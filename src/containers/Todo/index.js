import React, { Component } from 'react'

import Profile from './Profile'

class Todo extends Component {
  state = {
    value: '',
    todos: []
  }

  handleChange = event => {
    this.setState({ value: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    if (this.state.value.trim().length) {
      this.setState({
        value: '',
        todos: [...this.state.todos, this.state.value]
      })
    }
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
          {this.state.todos.map(todo => <li>{todo}</li>)}
        </ul>
        <Profile />
      </div>
    )
  }
}

export default Todo
