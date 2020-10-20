import React, { Component } from 'react';

class Band extends Component {

  clickHandler = (e) => {
    this.props.deleteBand(this.props.band.id)
  }

  render() {
    return(
      <div>
        <li>{this.props.band.name}<span><button onClick={this.clickHandler}>DELETE BAND</button></span></li>
      </div>
    );
  }
};

export default Band;
