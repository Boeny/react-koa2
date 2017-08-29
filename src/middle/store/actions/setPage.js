module.exports = function (page) {
  page = +page
  return { type: 'setPage', page }
}
