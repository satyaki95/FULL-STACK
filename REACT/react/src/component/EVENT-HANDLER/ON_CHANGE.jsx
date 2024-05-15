import React, { Component } from "react";

export default class ON_CHANGE extends Component {
  constructor(props) {
    super(props);

    this.state = {
      changedValue: "",
    };
  }

  handleClick = () => {
    console.log(`Clicked`);
  };
  handleChange = (e) => {
    this.setState(
      {
        changedValue: e.target.value,
      },
      () => {
        console.log(this.state.changedValue);
      }
    );
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <button onClick={this.handleClick}>Click Here</button>
        <p>{this.state.changedValue}</p>
      </div>
    );
  }
}
