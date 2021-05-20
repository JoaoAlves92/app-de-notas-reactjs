import React, { Component } from "react";
import "./style.css"

export default class ListaDeNotas extends Component{
    render() {
        return (
            <div className="container">
                {this.props.notas.map((nota,index) => {
                    return(
                        <div className="card" key={index}>
                            <h3>{nota.titulo}</h3>
                            <p>{nota.texto}</p>
                        </div>
                    );
                })}
            </div>
        )
    }
}