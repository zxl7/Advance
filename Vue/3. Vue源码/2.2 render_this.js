// 模板中的信息都在render中
// this即vm
// price即this.price即vm.price,即data中的price
// _c即this._c即vm._c

function render() {
  return _c{
    'div',
      {
        attrs: { 'id': 'app ' }
      }, [
        _c('p', [_v(_s(price))])
      ]
  }
}
