const request      = require('request')
const config       = require(SRC + 'config')
const {normalize, schema} = require ('normalizr')

const user = new schema.Entity('users')

const comment = new schema.Entity('comments', {
  author: user
})

const post = new schema.Entity('posts', {
  comments: [comment]
})

function dispatch(store){
  return (data) => {
    console.log(normalize(data, post)); return
    store.dispatch({type: 'setEntries', data: data})
  }
}

module.exports = (store) => {
  request(config.data.url).then(dispatch(store))
}

{
  "id": "123",
  "author": {
    "id": "1",
    "name": "Paul"
  },
  "title": "My awesome blog post",
  "comments": [
    {
      "id": "324",
      "commenter": {
        "id": "2",
        "name": "Nicole"
      }
    }
  ]
}