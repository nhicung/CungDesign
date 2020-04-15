import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  
  render() {
    return (   
    <React.Fragment>
      <Router>
        <NavigationBar />
      </Router>
    </React.Fragment>
    );
  }
}

export default App;