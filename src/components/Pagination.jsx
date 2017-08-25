import React from 'react'
import PropTypes from 'prop-types'

class Pagination extends React.PureComponent
{
  constructor(props) {
    super(props)
    this.range = 2
  }
  
  inRange(n, min, max) {
    return n >= min && n <= max
  }
  
  map(start, end, callback) {
    let result = []
    
    for (let i = start; i <= end; i++){
      result.push( callback(i) )
    }
    
    return result
  }
  
  isEmpty(i, start, end, active) {
    return this.inRange(i, start + 1, end - 1) && !this.inRange(i, active - this.range, active + this.range)
  }
  
  render() {
    let active = this.props.active
    let empty = false
    
    return (
      <div className="paginator">
        {
          this.map(1, this.props.count, i => {
            let nextIsEmpty = this.isEmpty(i, 1, this.props.count, active)
            if (empty && nextIsEmpty) return null
            
            empty = nextIsEmpty
            
            return empty ? <div key={i} className="page">...</div> : (
              <div
                onClick={this.props.getClickHandler(i)}
                key={i}
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
}

Pagination.propTypes = {
  getClickHandler: PropTypes.func,
  active: PropTypes.number,
  count: PropTypes.number
}

export default Pagination
