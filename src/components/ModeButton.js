import React, {Component} from 'react';

class ModeButton extends Component {
  constructor(props) {
      super(props);
      this.state = { 
        isNightMode: false 
      };
  }

  changeMode = () => {
    this.setState((prevState) => {
      return {isNightMode: !prevState.isNightMode};
    });
  }

  render() {
    return(
      <button onClick={this.changeMode}>{this.state.isNightMode === true ? "Day Mode" : "Night Mode"}</button>
    )
  }
}

export default ModeButton