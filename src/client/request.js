const err = ::console.error

export default url => fetch(url).catch(err)
  .then(res => res.json(), err)