import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import Pagination from './Pagination'
import Search from './Search'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { ...props }
    this.setPage = ::this.setPage
    this.search = ::this.search
  }

  setPage (page) {
    if (this.state.page === page) return

    this.props.changePageRequest(page).then((state) => {
      this.setState({
        page,
        data: state.data
      })
    })
  }

  search (phrase) {
    this.props.searchRequest(phrase).then((state) => {
      this.setState({
        data: state.data
      })
    })
  }

  render () {
    return (
      <div className='container'>
        <Pagination active={this.state.page} count={this.state.pageCount} onClick={this.setPage} />

        <Search onInput={this.search} />

        { this.state.data.map(row => <Comment key={`comment${row.id}`} data={row} />) }
      </div>
    )
  }
}

App.defaultProps = {
  changePageRequest: null,
  searchRequest: null
}

App.propTypes = {
  data: PropTypes.array.isRequired,
  page: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  changePageRequest: PropTypes.func,
  searchRequest: PropTypes.func
}

export default App
