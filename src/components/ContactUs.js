import React, { Component } from 'react';

export class ContactUs extends Component {
  render() {
    return (
      <div className="contact-details">
        <p><span className="contact-label">Contact Us:</span> <span className="contact-links"><a href="tel:0211775895">021 484 212</a></span></p>
        <p><span className="contact-label">Email Us:</span> <span className="contact-links"><a href="mailto:mark@vpdl.co.nz">mark@vpdl.co.nz</a></span></p>
      </div>
    )
  }
}

export default ContactUs;
