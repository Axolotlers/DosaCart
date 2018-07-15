import React, { Component } from 'react';
// import logo from './logo.svg';
import User from '../../components/users/users';
import './App.css';
import NavBar from '../navbar/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <User />
      </div>
    );
  }
}

export default App;
