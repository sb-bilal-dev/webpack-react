import axios from 'axios'

export default (options = {}) => {
  const defaultOptions = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
    ...options
  }

  return axios.create(defaultOptions)
}
