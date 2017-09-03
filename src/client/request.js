const err = ::console.error

export default url => global.fetch(url).catch(err)
  .then(res => res.json(), err)
