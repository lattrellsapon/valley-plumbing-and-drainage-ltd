import React, { Component } from 'react';
import ContactUs from './ContactUs';

export class Header extends Component {
  render() {
    return (
      <div id="header">
        <div className="showcase">
          <div className="showcase-content">
            <h1>Valley Plumbing and Drainage Ltd</h1>
            <ContactUs />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque possimus deserunt esse magnam suscipit sit odio dolore animi reprehenderit. Minima, aperiam ab, delectus quas nesciunt aliquid facilis corporis voluptatibus, maiores tempore illo. Alias, nam sapiente officia dolor odit minus blanditiis tempora nobis provident. Numquam accusamus, maxime ex ipsam enim in.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
