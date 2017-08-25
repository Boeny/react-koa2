import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import Pagination from './Pagination'

class App extends React.Component
{
  constructor(props) {
    super(props)
    this.pageChanger = this.pageChanger.bind(this)
  }
  
  pageChanger(page) {
    return () => this.props.changePageRequest(page)
  }
  
  componentDidMount(){
    this.props.onPageChanged(state => {
      this.setState(state);
    });
  }
  
  render() {
    return (
      <div className='container'>
        <Pagination active={this.props.page} count={this.props.pageCount} getClickHandler={this.pageChanger} />
        { this.props.data.map(row => <Comment key={row.id} data={row}/>) }
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
