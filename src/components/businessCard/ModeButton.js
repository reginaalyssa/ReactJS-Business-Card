import React, {Component} from 'react';

class ModeButton extends Component {
  render() {
    return(
      <button onClick={this.props.changeMode}>{this.props.isNightMode === true ? "Day Mode" : "Night Mode"}</button>
    );
  }
}

export default ModeButton;