import React, { Component } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      name: { firstName:"Mauro", lastName: "Gomez" },
      company: "Google"
    };
  }

  render() {  

    return (
      <>
        <div className='App'>
          <header className='app-header'>
            <img src={reactLogo} alt="logo-react" />
            <p>Hi I am {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}.</p>
            <button onClick={() => {
              this.setState({ 
                name: {firstName: "Matias", lastName:"Gonzales" } })
            }}
            >
            Change name!</button>
          </header>
        </div>
      </>
    );
  }
  };

export default App;
