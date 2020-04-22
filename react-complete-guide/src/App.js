import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { CarouselHandler } from './components/Carousel';
import { BreakLine } from './components/LineBreak'
import  {Footer}  from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import ThemePic from './Images/hanoi.jpg';

class App extends Component {
  
  render() {
    return (   
      <div className="App">
        <React.Fragment>
          <Router>
            <NavigationBar />
          </Router>
        </React.Fragment>
        {/* <img 
        src={ThemePic}
        width="100%"
        height="100%"
        alt="logo"/> */}
        <BreakLine w="100%" />
        <CarouselHandler></CarouselHandler>
        <div className="header">
          <h1>Our Collection</h1>
          <BreakLine w="50%" />
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;