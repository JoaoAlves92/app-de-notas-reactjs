import React, { Component } from "react";
import "./style.css"

export default class FormNotas extends Component {

    constructor(props){
        super(props);
        this.titulo = "";
        this.texto = "";
    }

    handlerTitulo(event){
        this.titulo = event.target.value;
    }

    handlerTexto(event){
        this.texto = event.target.value;
    }

    _criarNota(event){
        event.preventDefault();
        this.props.criarNota(this.titulo, this.texto);
        event.target.querySelector("#titulo").value = "";
        event.target.querySelector("#texto").value = "";
    }
    render(){
        return(
            <form className="FormNotas" onSubmit={this._criarNota.bind(this)}>
                <input id="titulo" name="titulo" placeholder="Titulo Nota" onChange={this.handlerTitulo.bind(this)}/>
                <textarea id="texto" name="corpo-nota" placeholder="Insira a anotação" onChange={this.handlerTexto.bind(this)}></textarea>
                <button>Criar nota</button>
            </form>
        );
    }
}