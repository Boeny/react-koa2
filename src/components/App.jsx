import React from 'react';
import { List } from 'immutable';

export default class App extends React.Component
{
  constructor(props){
    super(props);
    this.state = {data: List()};
  }
  
  componentDidMount(){
    this.props.onUpdate(el => {
      this.setState((prevState, props) => ({data: newData}));
    });
  }
  
  render(){
    return (
      <table>
      </table>
    );
  }
}