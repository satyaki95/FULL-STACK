import React, { Component } from 'react';


// Mounting -> Constructor -> render -> componentDidMount
// Updating -> render -> componentDidUpdate
// Unmounting -> 
export default class LIFE_CYCLE extends Component {
    constructor(props) {
      super(props);
      console.log("Constructor");
    
      this.state = {
        count: 0
      }

    }
    componentDidMount(){
      console.log("ComponentDidMount")
    }
    componentDidUpdate(){
      console.log("ComponentDidUpdate")
      }
      shouldComponentUpdate(){
        console.log("ShouldComponentUpdate")
      }
    handleIncrement = () => {
      this.setState({
        count : this.state.count + 1
      })
    }
  render() {
    {console.log("render")}
    return (
      <div>
        <h1>Counter : {this.state.count}</h1>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    )
  }
}
