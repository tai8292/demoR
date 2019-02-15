import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
  fetch('http://localhost:3001/url')
  .then(function(response) {
    console.log(response.json());
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
    return (
      <p></p>
    );
  }
}

export default App;
