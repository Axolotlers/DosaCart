import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
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
          {'Users Component'}
          <Button variant="contained" color="primary">
            Hello World
            </Button>
      </div>
    );
  }
}

export default App;
