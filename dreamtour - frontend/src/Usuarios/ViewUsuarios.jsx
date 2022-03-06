import React, { Component } from 'react'
import UsuariosService from './UsuariosService'

class ViewUsuarios extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            usuario: {}
        }
    }

    voltar(){
        this.props.history.push('/usuario');
    }

    componentDidMount(){
        UsuariosService.getUsuarioById(this.state.id).then( res => {
            this.setState({usuario: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3 ">
                    <h3 className = "text-center"> Detalhes </h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Nome:</label>
                            <div><b> { this.state.usuario.nome}</b></div>
                        </div>
                        <div className = "row">
                            <label> CPF: </label>
                            <div><b>{ this.state.usuario.cpf }</b></div>
                        </div>
                        <div className = "row">
                            <label> Email: </label>
                            <div><b> { this.state.usuario.email }</b></div>
                        </div>
                        <div className = "row">
                            <label> Celular: </label>
                            <div><b> { this.state.usuario.celular }</b></div>
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={this.voltar.bind(this)} style={{marginLeft: "10px"}}>Voltar</button>
                    <br />
                </div>
                <br/>
            </div>
        )
    }
}

export default ViewUsuarios;