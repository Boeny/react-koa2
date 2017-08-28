module.exports = function (data, pageSize) {
  const count = Object.keys(data).length
  const pageCount = count / pageSize

  return {
    type: 'setEntries',
    all: data,
    page: 1,
    pageSize,
    pageCount: count % pageSize === 0 ? pageCount : Math.floor(pageCount) + 1
  }
}
