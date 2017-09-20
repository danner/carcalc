import React from 'react';
import { connect } from 'react-redux'
import Slider from './Slider';

class Transmission extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.current.transmission.name}</h3>
        <ul>
          {this.props.current.transmission.gears.map( 
            (gear, i) => (
              <Slider 
                key={"gear-"+i+1}
                id={"gear-"+i+1}
                value={gear}
                label={i+1}
              />
            )
          )}
        </ul>
      </div>
    );
  }
}

export default Transmission;

