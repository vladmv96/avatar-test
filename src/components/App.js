import React, { Component } from 'react';
import '../styles/App.css';
import './ColoredUserpic';
import ColoredUserpic from './ColoredUserpic';
import avatar from '../images/avatar.jpeg';

class App extends Component {
  render() {
    return (
      <div className="app">
          <ColoredUserpic 
          src={avatar}
          size={150}
          margin={4}
          backgroundColor='red'
          colors={['green', 'blue']}
          hoverColors={['blue', 'green']}
          colorWidth={6}
          />
      </div>
    );
  }
}

export default App;
