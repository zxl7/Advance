class ReadImg {
  constructor(flieName) {
    this.fileName = fileName
    this.loadFromDisk()
  }
  display() {
    console.log('display...' + this.fileName)
  }
  loadFromDisk() {
    console.log('loading...' + this.fileName)
  }
}

class ProxyImg {
  constructor(fileName) {
    this.realImh = new ReadImh(fileName)
  }
  display() {
    this.realImg.display()
  }
}
