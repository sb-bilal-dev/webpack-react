import axios from 'axios'

export default (options: object = {}) => {
  const defaultOptions = {
    baseURL: 'https://jsonplaceholder.typicode.com/',
    ...options
  }

  return axios.create(defaultOptions)
}
