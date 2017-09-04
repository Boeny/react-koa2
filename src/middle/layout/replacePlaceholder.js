/** @module layout/replacePlaceholder */
/**
 * Replaces the substring bordered with its start and end by another substring 
 * @param {Map} state
 * @returns {String} content
 */
module.exports = (_from, _to, str, start = '{{', end = '}}') => str.replace(`${start}${_from}${end}`, _to)
