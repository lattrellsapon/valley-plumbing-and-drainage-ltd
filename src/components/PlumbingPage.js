import React, { Component } from 'react';
import test from '../images/main-image.png';

export class PlumbingPage extends Component {
  render() {
    return (
      <div className="container">
        <h1>Plumbing Page</h1>
        <div className="grid">
            <div>
                <img src={test} alt=""/>
            </div>
            <div>
                <img src={test} alt=""/>
            </div>
        </div>
      </div>
    )
  }
}

export default PlumbingPage;
