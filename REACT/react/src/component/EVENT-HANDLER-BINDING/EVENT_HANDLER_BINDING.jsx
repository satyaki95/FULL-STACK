import React, { Component } from 'react'

export default class EVENT_HANDLER_BINDING extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({
            count : this.state.count + 1
        })
    }
    
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

// Arrow function don't need to bind
