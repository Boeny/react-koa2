import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'

require('./style.css')

ReactDOM.render(
  <App state={INITIAL_STATE} />,// babel did not recognize a spread operator:(
  document.getElementById('app')
)
