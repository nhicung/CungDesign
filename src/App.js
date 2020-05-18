import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  NavigationBar  from './components/NavigationBar';
import  {Footer}  from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import ThemePic from './Images/hanoi.jpg';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (   
      <div className="App">
        <NavigationBar />
        <Footer></Footer>
      </div>
    );
  }
}
export default App;

