import TodoStore from './TodoStore'
import RouterStore from './RouterStore'

const createStores = (history) => {
  const todo = new TodoStore()
  const router = new RouterStore(history)

  return {
    todo,
    router
  }
}

export default createStores
