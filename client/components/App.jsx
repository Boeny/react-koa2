import React from 'react';
import { List } from 'immutable';
import PropTypes from 'prop-types';

export default class App extends React.Component
{
  static get propTypes () {
    data: PropTypes.Array
  }
  
  constructor (props) {
    super(props);
    this.state = {data: List()};
    this.fields = ['postId','id','name','email','body'];
  }
  
  componentDidMount () {
    this.setState((prevState, props) => ({data: List(props.data)}));
  }
  
  render () {
    return (
      <div className="container">
      {
        this.state.data.toArray().map((row) => {
          return (
            <div key={row.id} className="comment">
              { this.fields.map((f) => <div key={f} className={f}>{ row[f] }</div>) }
            </div>
          )
        })
      }
      </div>
    );
  }
}