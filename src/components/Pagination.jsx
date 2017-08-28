import React from 'react'
import PropTypes from 'prop-types'

const range = 2;

function inRange(n, min, max) {
  return n >= min && n <= max
}

function map(start, end, callback) {
  let result = []
  
  for (let i = start; i <= end; i++){
    result.push( callback(i) )
  }
  
  return result
}

function isEmpty(i, start, end, active) {
  return inRange(i, start + 1, end - 1) && !inRange(i, active - range, active + range)
}

function Pagination(props) {
  let active = props.active
  let empty = false
  
  return (
    <div className="paginator">
      {
        map(1, props.count, i => {
          let nextIsEmpty = isEmpty(i, 1, props.count, active)
          if (empty && nextIsEmpty) return null
          
          empty = nextIsEmpty
          let pageId = 'page' + i;
          
          return empty ? <div key={pageId} className="page">...</div> : (
            <div
              onClick={props.onClickHandler(i)}
              key={pageId}
              className={'page ' + (i == active ? 'active' : '')}
            >
              {i}
            </div>
          )
        })
      }
    </div>
  )
}

Pagination.propTypes = {
  onClickHandler: PropTypes.func,
  active: PropTypes.number,
  count: PropTypes.number
}

export default Pagination
