import React, {Component} from 'react';
import BusinessCard from './BusinessCard';
import ModeButton from './ModeButton';

class BusinessCardContainer extends Component {
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
    return (
      <div className={"App " + (this.state.isNightMode ? "Night-mode" : "")}>
        <BusinessCard />
        <ModeButton changeMode={this.changeMode} isNightMode={this.state.isNightMode}/>
      </div>
    );
  }
}

export default BusinessCardContainer;
      