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

  // Blob文件
  blobToFile(base64Data, fileName) {
    const blob = this.base64ToBlob(`${base64Data.value}`, 'image/jpeg')
    blob.lastModifiedDate = new Date()
    blob.name = fileName
    const file = { file: new File([blob], blob.name, { type: blob.type }) }
  },

  base64ToBlob(dataUrl, type) {
    const bstr = atob(dataUrl)
    let n = bstr.length
    const u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    console.log(new Blob([u8arr], { type }))
  },
}
