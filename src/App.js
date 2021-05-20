import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas.jsx";
import FormNotas from "./components/FormNotas/FormNotas.jsx";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.notas = JSON.parse(localStorage.getItem('notas')) || [];
    this.state = {};
  }
     
  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    this.notas.push(novaNota);
    this.setState({
      notas:this.notas
    })
    localStorage.setItem('notas', JSON.stringify(this.notas));
  }

  render(){
    return (
      <div className="App">
        <FormNotas criarNota={this.criarNota.bind(this)}/>
        <ListaDeNotas notas={this.notas}/>
      </div>
    );
  }
}

export default App;
