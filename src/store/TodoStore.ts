import { observable, action } from 'mobx'

export default class TodoStore {
  @observable todos: string[] = ['add mobx']
  @action addTodo = (payload: string) => {
    this.todos.unshift(payload)
  }
}
