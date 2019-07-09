import React, { Component } from 'react'

export default class Contador extends Component {
    //Manipulando propriedades.
    state = {
        numero: this.props.numeroInicial
    }
    
    maisUm = () => { 
        this.alterarNumero(1)
        // this.setState({ numero: this.state.numero + 1 })
        // this.state.numero + 1 
    }
    
    menosUm = () => { 
        this.alterarNumero(-1)
    }
    
    alterarNumero = (diferenca) => { //Parentese opcional em casa de 1 parametro.
        this.setState({ numero: this.state.numero + diferenca })
    }

    //={ this.maisUm } Passa a referencia da função e não a chamada da função.
    render() {
        return (
            <div>
                <div>Numero: {this.state.numero}</div>
                <button onClick={ this.maisUm }>Inc</button>
                <button onClick={ this.menosUm}>Dec</button>
                <button onClick={() => this.alterarNumero(10) }>Inc10</button>
                <button onClick={() => this.alterarNumero(-10) }>Dec10</button>
            </div>
        )
    }
}
    //Resolvando problema do this. Solução1 BIND
    // constructor(props){ 
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }

    //Solução 2 FUNÇÂO ARROW (ONCLICK)
    // <button onClick={() => this.maisUm() }>Inc</button>

    // Solução 3 FUNÇÂO ARROW
    // maisUm = () => { 