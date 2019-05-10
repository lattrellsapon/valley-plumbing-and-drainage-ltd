import React, { Component } from 'react';
import { BrowserRouter as Router, Route}  from 'react-router-dom'; 
import Header from './components/Header';
import MainImage from './components/MainImage';
import Navbar from './components/Navbar';
import Services from './components/Services';
import ContactUsGrid from './components/ContactUsGrid';
import Plumbing from './components/PlumbingPage';
import Drainage from './components/DrainagePage';
import Footer from './components/Footer';
import './App.css'

export class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          {/* INSERT NAVBAR HERE */}
          <Navbar />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <MainImage />
                <div className="container">
                  <div className="grid">
                    <div>
                      <Services />
                    </div>
                    <div>
                      <ContactUsGrid />
                    </div>
                  </div>
                </div>
            </React.Fragment>
          )}/>
          <Route path="/plumbing" component={Plumbing}/>
          <Route path="/drainage" component={Drainage}/>
          
          {/* INSERT SERVICES */}
          
          {/* INSERT CONTACT DETAILS HERE - WITH PHYSICAL ADDRESS? */}
          {/* INSERT FOOTER HERE, CREATED BY TREEZY WEB DESIGN */}
          <Footer />
        </div>

      </Router>

    )
  }
}

export default App;
