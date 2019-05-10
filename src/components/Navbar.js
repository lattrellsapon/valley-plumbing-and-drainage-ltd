import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div className="container" id="navbar">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/plumbing">Plumbing</Link></li>
            <li><Link to="/drainage">Drainage</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navbar;
