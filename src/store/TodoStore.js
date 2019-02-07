import { observable, action } from 'mobx'

export default class TodoStore {
  @observable todos = ['add mobx']
  @action addTodo = payload => {
    this.todos.unshift(payload)
  }
}
