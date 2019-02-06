import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as todoActions from './actions'

class Todo extends Component {
  state = {
    value: ''
  }

  componentDidMount () {
    this.props.dispatch(todoActions.getTodos())
  }

  handleChange = (e) => this.setState({ value: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(todoActions.addTodo(this.state.value))
    this.setState({ value: '' })
  }

  render () {
    const { value } = this.state
    const {
      todo: { todos }
    } = this.props

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder='Add todo...'
            onChange={this.handleChange}
            value={value}
          />
        </form>
        <ul>
          {todos.map(todo => (<li>{todo}</li>))}
        </ul>
      </div>
    )
  }
}

export default connect(state => state)(Todo)
