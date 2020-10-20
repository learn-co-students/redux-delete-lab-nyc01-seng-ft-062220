import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

  render() {
    return(
      <div>
          <ul>
        {this.props.bands.map(band => {
            return(
                
                <Band key={band.id} band={band} deleteBand={this.props.deleteBand}/>
            )
        })}
        </ul>
      </div>
    );
  }
};

export default Bands;