import React, { Component } from 'react';
import Modal from 'react-modal';
import './App.css';
import './css/..'
import './js/..'

const customStyles = {
  content : {
    top                   : '20%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
      students : [],
      value :"",
      modalIsOpen: false
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this); 
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

async  componentDidMount(){
  Modal.setAppElement('#myModal');
  console.log("2");
   await fetch('http://localhost:3001/url')
      .then(response => {
        return response.json();
      })
      .then(data =>{ 
        this.setState({students :Array.from(data)});
      })
  }

  searchT() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("ip");
    filter = input.value.toUpperCase();
    table = document.getElementById("body");
    tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
          for(var j=0;j<3;j++){
            td = tr[i].getElementsByTagName("td")[j];
            if (td) {
              txtValue = td.textContent || td.innerText;
              if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
                break;
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
    console.log("3");
    await fetch('http://localhost:3001/url/'+id)
      .then(response => 
        response.json()
      )
      .then(data =>{ 
        console.log(data);
        alert("ID : "+data.id+"\nFirst Name : "+data.first_name+"\nLast Name: "+data.last_name+"\nCity : "+data.city);
      })
  }

  renderRow()
  {
    return this.state.students.map((student) => 
    <tr key = {student.id} >
      <td>{student.id}</td>
      <td>{student.first_name}</td>
      <td>{student.last_name}</td>
      <td>
        <button type='button' onClick={ (e) =>this.showDataDetail(student.id,e)}>View</button>
        <button type='button'>Edit</button>
        <button type='button' >Delete</button></td>
    </tr>
    );
  }

  renderModal()
  {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <div className="container">
            <div className="row">
              <div className = "col-xs-4">col-sm-4</div>
              <div className = "col-xs-4">col-sm-4</div>
            </div>
          </div>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
      
    );
  }
  
  render() {
    
    console.log("1"); 
    let search = (
        <input type="text" id="ip" onKeyUp = {this.searchT}></input>
    )
    let content = this.renderRow();
    let modal = this.renderModal();
    return (
      <div id="myApp"> 
        <form>
        {search}
        <table id ="myTable" className="Table">
          <thead className ="Thead">
            <tr>
              <th>ID</th>
              <th>Frist name</th>
              <th>Last name</th>
              <th></th>
            </tr>
          </thead>
          <tbody id ="body">
            {content} 
          </tbody>
        </table>
        </form>
        <div id="myModal">{modal}</div>
      </div>
    );
  }
}

export default App;
