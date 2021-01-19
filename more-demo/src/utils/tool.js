export default {
  // 链接blob转文件
  urlToFile(url, name) {
    fetch(url).then((res) =>
      res.blob().then((blob) => {
        blob.lastModifiedDate = new Date()
        blob.name = name
        const file = { file: new File([blob], blob.name, { type: blob.type }) }
        return file
      }),
    )
  },
  // 图片后缀
  checkImgType(file) {
    if (!/\.(jpg|jpeg|png|GIF|JPG|PNG)$/.test(file.name)) {
      return false
    } else {
      return true
    }
  },

  //   图片转base64
  imageUrlToBase64(imageUrl, fileName) {
    const image = new Image()
    image.setAttribute('crossOrigin', 'anonymous')
    image.src = imageUrl
    image.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = image.width
      canvas.height = image.height
      const context = canvas.getContext('2d')
      context.drawImage(image, 0, 0, image.width, image.height)
      const quality = 0.8
      // base64类型
      const dataURL = canvas.toDataURL('image/jpeg', quality)
      // 图片的显示
      this.fileList.push({ content: dataURL, file: 'File', name: fileName })
      this.base64ToFile(dataURL, fileName)
    }
  },
  // 转文件
  base64ToFile(dataURL, fileName) {
    const arr = dataURL.split(',')
    const mime = arr[0].match(/:(.*?);/)[1]
    const bytes = atob(arr[1]) // 解码base64
    let n = bytes.length
    const ia = new Uint8Array(n)
    // eslint-disable-next-line no-plusplus
    while (n--) {
      ia[n] = bytes.charCodeAt(n)
    }
    const file = { file: new File([ia], fileName, { type: mime }) }
    this.afterRead(file)
  },
}
