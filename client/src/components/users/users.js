import React, { Component } from 'react';
import './user.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isUserLoggedIn: false
        }
    }

    componentDidMount() {
        fetch('/api/getTestData')
            .then(res => res.json())
            .then(data => console.log(data));
    }
  render() {
    return (
      <div >
          Users Component
      </div>
    );
  }
}

export default App;
