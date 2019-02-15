import React, { Component } from 'react';
import './App.css';



let data =  function readData()
{
  fetch('http://localhost:3001/url')
  .then(function(response) {
    console.log(response.json());
    return response;
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });
  return response;
}

class App extends Component {
  render() {

    let content = data.map((student,index) => 
      <tr key = {index}>
        <td>{student.id}</td>
        <td>{student.first_name}</td>
        <td>{student.last_name}</td>
      </tr>
    );  
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Frist name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          {content}
        </tbody>
      </table>
    );
  }
}

export default App;
