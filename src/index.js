import './index.css'
import './print.js'

if (module.hot) {
  module.hot.accept('./print.js', () => {
    console.log('print.js updated..');
  })
}

console.log('webpack101')

