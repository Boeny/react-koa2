import React from 'react'
import PropTypes from 'prop-types'

class Comment extends React.PureComponent
{
  constructor(props) {
    super(props)
    this.fields = ['postId', 'id', 'name', 'email', 'body']
  }
  
  render() {
    let row = this.props.data
    
    return (
      <div className='comment'>
        { this.fields.map((f) => <div key={row.id + f} className={f}>{ row[f] }</div>) }
      </div>
    )
  }
}

Comment.propTypes = {
  data: PropTypes.object
}

export default Comment
