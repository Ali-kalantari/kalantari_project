import React from 'react';
import Clock from './Clock'

class Mainclock extends React.Component {
    render() {
      return (
        <div>
          <div className="row">
            <div className="col-lg-6 col-lg-offset-3">
              
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Clock size={400} timeFormat="24hour" hourFormat="standard" />
            </div>
          </div>
        </div>
      );
    }
  }
  export default Mainclock;
  