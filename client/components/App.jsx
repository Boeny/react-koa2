import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

class App extends React.Component
{
  static get propTypes() {
    data: PropTypes.Array
  }

  constructor(props) {
    super(props)
    this.fields = ['postId', 'id', 'name', 'email', 'body']
  }

  render() {
    return (
      <div className='container'>
        {
        this.props.data.map((row) => {
          return (
            <div key={row.id} className='comment'>
              { this.fields.map((f) => <div key={f} className={f}>{ row[f] }</div>) }
            </div>
          )
        })
      }
      </div>
    )
  }
}

export default connect(state => ( {data: state.toArray()} ))(App)// mapStateToProps