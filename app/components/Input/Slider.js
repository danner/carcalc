import React from 'react';
import { connect } from 'react-redux'

class Slider extends React.Component {
  render() {
    return (
      <li>
        <label htmlFor={this.props.id}>{this.props.label}:</label>
        <input type="range" min="0" max="5" value={this.props.value} step=".01" />
        <input id={this.props.id} type="text" value={this.props.value} />
      </li>
    );
  }
}

export default Slider;
