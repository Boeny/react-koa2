import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import Pagination from './Pagination'

class App extends React.Component
{
  constructor(props) {
    super(props)
    this.changePage = this.changePage.bind(this)
  }
  
  changePage(page) {
    return () => {
      console.log(page)
    }
  }
  
  render() {
    let state = this.props.state;
    
    return (
      <div className='container'>
        <Pagination active={state.page} count={state.pageCount} onClickHandler={this.changePage} />
        { state.data.map(row => <Comment key={row.id} data={row}/>) }
      </div>
    )
  }
}

App.propTypes = {
  state: PropTypes.object
}

export default App
