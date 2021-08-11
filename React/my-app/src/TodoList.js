import React, { Component, Fragment } from 'react'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '123',
      list: [],
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={this.handlerChangedInput}></input>
          <button>提交</button>
        </div>
      </Fragment>
    )
  }

  handlerChangedInput(e) {
    console.log(e.target.value)
  }
}

export default TodoList
