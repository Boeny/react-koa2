import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import Pagination from './Pagination'

class App extends React.Component
{
  constructor(props) {
    super(props)
    this.state = {...props}
    this.pageChanger = this.pageChanger.bind(this)
  }
  
  setPage(page) {
    if (this.state.page === page) return
    
    this.props.changePageRequest(page).then(state => {
      this.setState({
        page: page,
        data: state.data
      });
    })
  }
  
  pageChanger(page) {
    return () => this.setPage(page)
  }
  
  render() {
    return (
      <div className='container'>
        <Pagination active={this.state.page} count={this.state.pageCount} onClickHandler={this.pageChanger} />
        { this.state.data.map(row => <Comment key={'comment'+row.id} data={row}/>) }
      </div>
    )
  }
}

App.propTypes = {
  data: PropTypes.array,
  page: PropTypes.number,
  pageCount: PropTypes.number
}

export default App
