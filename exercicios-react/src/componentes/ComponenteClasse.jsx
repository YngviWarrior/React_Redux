import React, { Component } from 'react'
//Componente sem estado, preferivel usar componentes funcionais e não de classe.
export default class ComponenteClasse extends Component{
    render(){
        return(
            <h1>{this.props.valor || 'Padrão/Default'}</h1>
        )
    }
}