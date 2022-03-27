import React, { Component, Fragment } from 'react'
class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['xxxll', 'xxxllll'],
    }
  }
  render() {
    return (
      <Fragment>
        <div>
          {/* 这是注释 */}
          <input
            value={this.state.inputValue}
            onChange={this.handlerChangedInput.bind(this)}
          ></input>
          <button onClick={this.handleButtonClick.bind(this)}>提交</button>
        </div>

        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li
                key={index}
                onClick={this.handleItemDelete.bind(this, index)}
              >
                {item}{' '}
              </li>
            )
          })}
        </ul>
      </Fragment>
    )
  }

  handlerChangedInput(e) {
    this.setState({
      inputValue: e.target.value,
    })
  }
  handleItemDelete(index) {
    this.setState((prevState) => {
      const list = [...this.state.list]
      list.splice(index, 1)

      return { list }
    })
  }

  handleButtonClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: '',
    })
  }
}

export default TodoList
