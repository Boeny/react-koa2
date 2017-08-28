import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'

require('./style.css')

INITIAL_STATE = {
  ...INITIAL_STATE,
  changePageRequest: page => fetch('/comment/'+page).then(res => res.json())
}

ReactDOM.render(
  <App {...INITIAL_STATE} />,
  document.getElementById('app')
)
