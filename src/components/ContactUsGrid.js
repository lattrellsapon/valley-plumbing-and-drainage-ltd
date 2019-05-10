import React, { Component } from 'react';
import businessCard from '../images/business-card.png';

export class ContactUsGrid extends Component {
  render() {
    return (
      <div id="contact-us-grid">
        <h1>Get in touch</h1>
        <div className="card-container">
            <img src={businessCard} alt=""/>
        </div>
      </div>
    )
  }
}

export default ContactUsGrid;
