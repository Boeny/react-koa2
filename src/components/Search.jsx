/** @namespace components */

import React from 'react'
import PropTypes from 'prop-types'

class Search extends React.PureComponent {
  constructor (props) {
    super(props)
    this.inputListener = ::this.inputListener
  }

  inputListener (e) {
    if (this.props.onInput) this.props.onInput(e.target.value)
  }

  render () {
    return (
      <div className='search'>
        <input type="text" onKeyUp={this.inputListener} />
      </div>
    )
  }
}

Search.defaultProps = {
  onInput: null
}

Search.propTypes = {
  onInput: PropTypes.func
}

export default Search
