import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      students : [],
      value :""
    }
  }
async  componentDidMount()
  {
   
   await fetch('http://localhost:3001/url')
      .then(response => {
        return response.json()
      })
      .then(data =>{ 
        this.setState({students :Array.from(data)});
      })
  }

  searchT() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("ip");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          for(var j=0;j<3;j++){
            td = tr[i].getElementsByTagName("td")[j];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                i++;
              } 
              else {
                tr[i].style.display = "none";
              }
            } 
          }
        }
  }
  async showDataDetail(id)
  {
    await fetch('http://localhost:3001/url/'+id)
      .then(response => {
        return response.json()
      })
      .then(data =>{ 
        alert("ID : "+data.id+"\nFirst Name : "+data.first_name+"\nLast Name: "+data.last_name+"\nCity : "+data.city);
      })
  }
  renderRow()
  {
    return this.state.students.map((student) => 
    <tr key = {student.id} onClick={ (e) =>this.showDataDetail(student.id,e)}>
      <td>{student.id}</td>
      <td>{student.first_name}</td>
      <td>{student.last_name}</td>
    </tr>
    );
  }
  
  render() {

    let search = (
        <input type="text" id="ip" onKeyUp = {this.searchT}></input>
    )
    let content = this.renderRow();
    return (
      <form>
      {search}
      <table id ="myTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>Frist name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody id ="body">
          {content}
        </tbody>
      </table>
      </form>
    );
  }
}

export default App;
