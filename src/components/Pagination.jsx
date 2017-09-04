/** @namespace components */

import React from 'react'
import PropTypes from 'prop-types'

const range = 2

function inRange (n, min, max) {
  return n >= min && n <= max
}

function map (start, end, callback) {
  const result = []

  for (let i = start; i <= end; i += 1) {
    result.push(callback(i))
  }

  return result
}

function isEmpty (i, start, end, active) {
  return inRange(i, start + 1, end - 1) && !inRange(i, active - range, active + range)
}

class Pagination extends React.PureComponent {
  constructor (props) {
    super(props)
    this.a = 1
    this.onClickListener = ::this.onClickListener
  }

  onClickListener (page) {
    if (this.props.onClick) {
      return () => this.props.onClick(page)
    }

    return null
  }

  render () {
    const active = this.props.active
    const count = this.props.count
    let empty = false

    return (
      <div className="paginator">
        {
          map(1, count, (i) => {
            const nextIsEmpty = isEmpty(i, 1, count, active)
            if (empty && nextIsEmpty) return null

            empty = nextIsEmpty
            const pageId = `page${i}`

            return empty ? <div key={pageId} className="page">...</div> : (
              <div
                role="button"
                tabIndex={i}
                onClick={this.onClickListener(i)}
                key={pageId}
                className={`page ${i === active ? 'active' : ''}`}
              >
                {i}
              </div>
            )
          })
        }
      </div>
    )
  }
}

Pagination.defaultProps = {
  onClick: null
}

Pagination.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired
}

export default Pagination
