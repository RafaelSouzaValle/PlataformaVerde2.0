import React, { Component } from 'react'
import axios from 'axios'
import Main from '../template/Main'

import './UserCrud.css'

const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', cpf: '', nascimento: '', estado: '', cidade: '' },
    list: []
}

export default class UserCrud extends Component {

    // Função a ser chamada quando um componente é exibido na tela.
    // Consulta o JSON server
    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    // Estado inicial do formulário
    state = { ...initialState }

    // Função que limpa o formulário
    clear() {
        this.setState({ user: initialState.user })
    }

    // Inclui ou altera usuário
    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    // Retorna lista de usuários atualizada
    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if (add) list.unshift(user)
        return list
    }

    // Atualiza campo
    updateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    // Carrega formulário
    renderForm() {
        return (
            <div className="form">
                <div className="row">

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome Completo*</label>
                            <input type="text" className="form-control" name="name" value={this.state.user.name} onChange={e => this.updateField(e)} placeholder="Digite o nome..." />
                        </div>
                    </div>


                    <div className="col-12 col-md-3">
                        <div className="form-group">
                            <label>CPF*</label>
                            <input type="text" className="form-control" name="cpf" value={this.state.user.cpf} onChange={e => this.updateField(e)} placeholder="000.000.000-00" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" />
                        </div>
                    </div>

                    <div className="col-12 col-md-3">
                        <div className="form-group">
                            <label>Data de Nascimento*</label>
                            <input type="date" className="form-control" name="nascimento" value={this.state.user.nascimento} onChange={e => this.updateField(e)} />
                        </div>
                    </div>

                </div>

                <div className="row">

                    <div className="col-12 col-md-5">
                        <div className="form-group">
                            <label>Estado*</label>
                            <input type="text" className="form-control" name="estado" value={this.state.user.estado} onChange={e => this.updateField(e)} placeholder="..." />
                        </div>
                    </div>


                    <div className="col-12 col-md-4">
                        <div className="form-group">
                            <label>Cidade*</label>
                            <input type="text" className="form-control" name="cidade" value={this.state.user.cidade} onChange={e => this.updateField(e)} placeholder="..." />
                        </div>
                    </div>

                    <div className="col-12 col-md-3">
                        <button className="btn btn-success btn-block button-col" onClick={e => this.save(e)}>
                            INCLUIR
                        </button>
                    </div>
                </div>
            </div>


        )
    }

    // Atualiza estado do objeto
    load(user) {
        this.setState({ user })
    }

    // Remove objeto da lista
    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(user, false)
            this.setState({ list })
        })
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>NOME COMPLETO</th>
                        <th>CPF</th>
                        <th>DATA DE NASCIMENTO</th>
                        <th>IDADE</th>
                        <th>ESTADO</th>
                        <th>CIDADE</th>
                        <th>EDITAR</th>
                        <th>EXCLUIR</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.cpf}</td>
                    <td>{user.nascimento}</td>
                    <td>{user.nascimento}</td>
                    <td>{user.estado}</td>
                    <td>{user.cidade}</td>
                    <td className="td-align">
                        <button className="td-edit"
                            onClick={() => this.load(user)}>
                        </button>
                    </td>
                    <td className="td-align">
                        <button className="td-remove" onClick={() => this.remove(user)}>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    render() {

        return (
            <Main>
                <div className="formContent">
                    {this.renderForm()}
                    {this.renderTable()}
                </div>
            </Main>
        )

    }
}

