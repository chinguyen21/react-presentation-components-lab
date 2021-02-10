// Code SimpleComponent Here
import React, {useState, useEffect} from 'react';


class SimpleComponent extends React.Component {
  state = {mood: 'happy'};
  render() {

    return (
      <div onClick={() => this.state.mood === "happy" ? this.setState({mood: "sad"}) : this.setState({mood: "happy"}) }>
      {this.state.mood}
      </div>
      )
    }
}

export default SimpleComponent;