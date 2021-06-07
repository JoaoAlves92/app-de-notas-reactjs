import React, { Component } from "react";
import "./style.css"

export default class ListaDeNotas extends Component{

    _deletaNota(event, index){
        event.preventDefault();
        this.props.deletaNota(index);
    }

    render() {
        return (
            <div className="container">
                {this.props.notas.map((nota,index) => {
                    return(
                        <div className="card" key={index} onDoubleClick={(event) => this._deletaNota(event, index)}>
                            <h3>{nota.titulo}</h3>
                            <p>{nota.texto}</p>
                        </div>
                    );
                })}
            </div>
        )
    }
}