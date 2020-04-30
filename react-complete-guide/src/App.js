import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import  {Footer}  from './components/Footer'
import  About from './components/About'
import  {Home}  from './components/Home'
import  Gallery from './components/Gallery'
import  {Product} from './components/Product'
import  {Workshop} from './components/Workshop'
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
        <React.Fragment>
          <Router>
            <div>
            <NavigationBar />
            <Switch>
              <Route exact path="/" component ={Home}/>
              <Route path="/About" component={About}/>
              <Route path="/Product" component={Product}/>
              <Route path="/Gallery"component={Gallery}/>
              <Route path="/Workshop"component={Workshop}/>
            </Switch>
            </div>
          </Router>
        </React.Fragment>
        <Footer></Footer>
      </div>
    );
  }
}
export default App;

