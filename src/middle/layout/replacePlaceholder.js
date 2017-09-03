module.exports = (_from, _to, str, start = '{{', end = '}}') => str.replace(`${start}${_from}${end}`, _to)
