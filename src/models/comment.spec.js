require('tester')({
  'data': {
    'данные должны быть массивом': (assert) => {
      const config = require('../config')
      const comment = require('./comment')

      comment.getAll()
        .then(data => assert.equal(typeof data, 'Array'))
    },
    'отфильтрованные (el => el.id < 11) данные должны быть массивом длиной 10': (assert) => {
      const config = require('../config')
      const comment = require('./comment')

      comment.getAll(el => el.id < 11)
        .then(data => assert.equal(data.length, 10))
    }
  }
})
