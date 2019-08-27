// 主题，保存状态，状态变化后触发所有观察者模式
class Subject {
  constructor() {
    this.state = 0
    this.observers = []
  }
  getState() {
    return this.state
  }
  setState() {
    this.state = state
    this.notifyAllObservers()
  }
  notifyAllObservers() {
    this.observers.forEach(observers => {
      observers.update()
    })
  }
  attch(observer) {
    this.observers.push(observer)
  }
}

// 观察者
class Observer {
  constructor(name, subject) {
    this.name = name
    this.subject = subject
    this.subject.attach(this)

  }
  update() {
    console.log('${this.name} update,state:${this.subject.getState}')
  }
}

let s = new Subject()
let o1 = new Observer('o1', s)

s.setState(1)