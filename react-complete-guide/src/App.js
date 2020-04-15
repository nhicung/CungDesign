import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

class App extends Component {
  
  render() {
    return (
      <div>
        <img src="golf.jpg" alt="golff" />
      <React.Fragment>
        <Router>
          <NavigationBar />
        </Router>
      </React.Fragment>
    </div>
    );
  }
}

export default App;