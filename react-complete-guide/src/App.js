import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { CarouselHandler } from './components/Carousel';
import { BreakLine } from './components/LineBreak'
import  {Footer}  from './components/Footer'
import  {Feature}  from './components/Feature'
import  Collection from './components/Collection'
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
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            
          </Router>
        </React.Fragment>
        {/* <img 
        src={ThemePic}
        width="100%"
        height="100%"
        alt="logo"/> */}
        <BreakLine w="100%" />
        <CarouselHandler></CarouselHandler>
        <Feature></Feature>
        <div className="collection">
          <h1>Our Collection</h1>
          <BreakLine w="50%" />
          <Collection/>
        </div>
        <Footer></Footer>
      </div>
    );
  }
  
}
function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;