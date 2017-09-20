import React from 'react';
import { connect } from 'react-redux'
import Messages from './Messages';
import Transmission from './Input/Transmission';

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Messages messages={this.props.messages}/>
        <Transmission current={this.props.current}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    current: state.current,
  };
};

export default connect(mapStateToProps)(Home);
