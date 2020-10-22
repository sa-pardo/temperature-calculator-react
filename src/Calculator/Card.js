import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <p className="card-number">{this.props.transform(this.props.value)}</p>
        <p className="card-scale">°{this.props.scale}</p>
        <div className="card-scale-name">{this.props.scaleName}</div>
      </div>
    );
  }
}
