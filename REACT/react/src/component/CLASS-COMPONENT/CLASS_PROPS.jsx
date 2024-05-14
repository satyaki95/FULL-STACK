import React, { Component } from 'react';

export default class CLASS_PROPS extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}
