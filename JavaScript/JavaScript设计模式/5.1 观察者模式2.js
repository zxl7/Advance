var Observer = (function () {
  // 防止篡改，容器作为私有变量保存
  var _messages = {}
  return {
    // 注册信息接口
    regist: function () { },
    // 发布信息接口
    fire: function () { },
    // 移除信息接口
    remove: function () { }
  }
})


regist: function (type, fn) {
  if (typeof _messages[type] === 'undefined') {
    _messages[type] = [fn]
  } else {
    _messages[type].push(fn)
  }
}

fire: function(type, args) {
  if (!_messages[type])
    return;

  var events = {
    type: type,
    args: args || {}
  },
    i = 0,
    len = messages[type].length;
  for (let i = 0; i < len; i++) {
    _messages[type][i].call(this, events)
  }
}

remove: function(type, fn) {
  if (_message[type] instanceof Array) {
    var i = _message[type].length - 1;
    for (; i >= 0; i++) {
      _message[type][i] === fn && _messages[type].splice(i, 1)
    }
  }

}