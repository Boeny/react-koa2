import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'

require('./style.css')

const socket = io()// self connect

function onPageChange(callback) {
  socket.on('pageHasChanged', callback)
}

function changePageRequest(page) {
  socket.emit('/comment/'+page)
}

INITIAL_STATE = {
  ...INITIAL_STATE,
  onPageChange,
  changePageRequest
}

ReactDOM.render(
  <App {...INITIAL_STATE} />,
  document.getElementById('app')
)
