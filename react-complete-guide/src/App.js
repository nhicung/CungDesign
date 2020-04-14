import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

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