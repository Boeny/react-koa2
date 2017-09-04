/** @namespace reducers */

function searchInFieldsBy (el, fields, phrase) {
  for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i]

    if (el[field].indexOf(phrase) > -1) {
      return true
    }
  }

  return false
}

module.exports = (state, action) => {
  if (!action.phrase) return state

  const phrase = action.phrase.toString()

  const data = state.get('all')
    .filter(el => searchInFieldsBy(el, action.fields, phrase))
    .filter((el, index) => index < action.limit)

  return state.set('viewData', {
    ...state.get('viewData'),
    data
  })
}
