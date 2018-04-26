import React, {Component} from 'react';

class ModeButton extends Component {
  constructor(props) {
      super(props)
      this.state = {
          isNightMode: false,
          mode: "Night Mode"
      }
  }

  changeMode = () => {
    if(this.state.isNightMode === false) {
      this.setState({
        isNightMode: true,
        mode: "Day Mode"
      })
    } else {
      this.setState({
        isNightMode: false,
        mode: "Night Mode"
      })
    }
  }

  render() {
    return(
      <button onClick={this.changeMode}>{this.state.mode}</button>
    )
  }
}

export default ModeButton