import TodoStore from '../TodoStore'

describe('addTodo', () => {
  it('adds todo to todos', () => {
    const store = new TodoStore()
    store.addTodo('NEW_TODO')
    expect(store.todos[0]).toBe('NEW_TODO')
  })
})
