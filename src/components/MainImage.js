import React, { Component } from 'react';
import mainImage from '../images/main-image.png';

export class MainImage extends Component {
  render() {
    return (
      <div className="image-container">
        <img src={mainImage} alt=""/>
      </div>
    )
  }
}

export default MainImage;
