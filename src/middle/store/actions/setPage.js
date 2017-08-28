module.exports = function (page) {
  page = +page
  return { type: 'setEntries', page }
}
