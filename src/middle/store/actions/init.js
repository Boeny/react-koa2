/** @namespace actions */

module.exports = (data, pageSize) => {
  const count = Object.keys(data).length
  const pageCount = count ? count / pageSize : 1

  return {
    type: 'init',
    all: data,
    pageSize,
    pageCount: count % pageSize === 0 ? pageCount : Math.floor(pageCount) + 1
  }
}
