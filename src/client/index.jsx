import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import request from './request'

require('./style.css')

function changePageRequest(page){
   return request(`/comment/${page}`)
}

function searchRequest(phrase) {
  return request(`/search/${phrase}`)
}

INITIAL_STATE = {
  ...INITIAL_STATE,
  changePageRequest,
  searchRequest
}

ReactDOM.render(
  <App {...INITIAL_STATE} />,
  document.getElementById('app')
)
