import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import  NavigationBar  from './components/NavigationBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import ThemePic from './Images/hanoi.jpg';


function App(props) {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: 'React'
  //   };
  // }

  // render(props) {
    return (   
      <div className="App">
        <NavigationBar />
      </div>
    );
  }
// }
export default App;

