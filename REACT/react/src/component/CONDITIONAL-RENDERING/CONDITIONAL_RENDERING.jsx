import React, { Component } from 'react';
import LOGIN from './LOGIN';
import HOME from './HOME';

export default class CONDITIONAL_RENDERING extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
    
  render() {
    const {isLoggedIn} = this.state;
    return (
      <div>
        {isLoggedIn ? <HOME /> : <LOGIN />}
      </div>
    )
  }
}
