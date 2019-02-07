import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

@inject('todo')
@observer
class Todo extends Component {
  state = {
    value: ''
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.todo.addTodo(this.state.value)
    this.setState({ value: '' })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            placeholder="Add todo..."
            value={this.state.value}
          />
        </form>
        <ul>
          {this.props.todo.todos.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Todo
