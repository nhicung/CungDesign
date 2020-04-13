import React, { Component } from 'react';
import './App.css';
import UserInput from './Pictures/UserInput';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {

  state = {
      Username: '',
  }

  userNameChangedHandler = (event) => {
    this.setState ( {Username: event.target.value} );
  }

  deleteHandler = (index) => {
    const text = this.state.Username.split('');
    text.splice(index,1);
    const updatedtext = text.join('')
    this.setState({Username:updatedtext});
  }

    render() {
      const charList= this.state.Username.split('').map( (ch,index) => {
        return <CharComponent 
        character = {ch}
        key = {index}
        clicked = {this.deleteHandler}/>
      });

      return (
        <div className="App">
          <h1> Trying a new app</h1>
          Input <UserInput
          changed = {this.userNameChangedHandler }
          name = {this.state.Username}/>
          <Validation
          Inputlength={this.state.Username.length}/>
          {charList}
        </div>
    );

    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App'));
  }
}

export default App;
