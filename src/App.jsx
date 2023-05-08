import React, { Component } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      name: "Mauro ",
      surname: "Gomez"
    }
  }

  render() {  

    return (
      <>
        <div className='App'>
          <header className='app-header'>
            <img src={reactLogo} alt="logo-react" />
            <p>Hi {this.state.name + this.state.surname}</p>
            <button>Change name!</button>
          </header>
        </div>
      </>
    );
  }
  };

export default App;
