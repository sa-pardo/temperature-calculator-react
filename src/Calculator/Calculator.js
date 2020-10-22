import React, { Component } from "react";
import "./Calculator.css";
import Card from "./Card";

export default class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      measurement: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let value = parseInt(e.target.value);
    if (Number.isNaN(value)) {
      value = 0;
    }
    this.setState({
      measurement: value,
    });
  }

  render() {
    return (
      <div id="calculator">
        <Input onChange={this.handleChange} />
        <div className="cards">
          <Card
            transform={toFarenheit}
            value={this.state.measurement}
            scale="F"
            scaleName="Fahrenheit"
          />
          <Card
            transform={toKelvin}
            value={this.state.measurement}
            scale="K"
            scaleName="Kelvin"
          />
          <Card
            transform={toRankine}
            value={this.state.measurement}
            scale="R"
            scaleName="Rankine"
          />
          <Card
            transform={toDelisle}
            value={this.state.measurement}
            scale="De"
            scaleName="Delisle"
          />
          <Card
            transform={toNewton}
            value={this.state.measurement}
            scale="N"
            scaleName="Newton"
          />
          <Card
            transform={toReaumur}
            value={this.state.measurement}
            scale="Ré"
            scaleName="Réaumur"
          />
          <Card
            transform={toRomer}
            value={this.state.measurement}
            scale="Rø"
            scaleName="Rømer"
          />
        </div>
      </div>
    );
  }
}

const Input = (props) => {
  return (
    <div id="input">
      <input
        className="input"
        type="number"
        placeholder="0"
        onChange={props.onChange}
      />
      <div className="input-tag">°C</div>
    </div>
  );
};

const toRomer = (celsius) => {
  let f = (celsius * 21) / 40 + 7.5;
  f = Math.trunc(f * 100) / 100;
  return f;
};

const toReaumur = (celsius) => {
  let f = (celsius * 4) / 5;
  f = Math.trunc(f * 100) / 100;
  return f;
};

const toNewton = (celsius) => {
  let f = (celsius * 33) / 100;
  f = Math.trunc(f * 100) / 100;
  return f;
};

const toDelisle = (celsius) => {
  let f = ((100 - celsius) * 3) / 2;
  f = Math.trunc(f * 100) / 100;
  return f;
};

const toFarenheit = (celsius) => {
  let f = celsius * (9 / 5) + 32;
  f = Math.trunc(f * 100) / 100;
  return f;
};

const toKelvin = (celsius) => {
  let f = celsius + 273.15;
  f = Math.trunc(f * 100) / 100;
  return f;
};

const toRankine = (celsius) => {
  let f = ((celsius + 273.15) * 9) / 5;
  f = Math.trunc(f * 100) / 100;
  return f;
};
