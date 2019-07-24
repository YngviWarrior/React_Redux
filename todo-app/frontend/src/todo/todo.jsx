import React, { Component } from 'react'
import Axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3001/api/todos'
export default class Todo extends Component {
    //Amarra o this ao componente da classe. Sempre o componente atual.
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)

        this.refresh()
    }

    refresh() {
        Axios.get(`${URL}?sort=-createAt`).then(resp => this.setState({
            ...this.state,
            description: '',
            list: resp.data
        }))
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    handleAdd() { //this está associado a quem chama, não ao componente que está inserido.
        const description = this.state.description
        Axios.post(URL, { description }).then(resp => this.refresh()) //Post p backend
    }

    render() {
        return (
            <div>
                <PageHeader name="Tarefas" small="Cadastro"></PageHeader>
                <TodoForm description={ this.state.description } 
                    handleAdd={this.handleAdd}
                    handleChange={this.handleChange} />
                <TodoList />
            </div>
        )
    }
}