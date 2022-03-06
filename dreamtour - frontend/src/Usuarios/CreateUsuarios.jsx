import React, { Component } from 'react'
import UsuariosService from './UsuariosService';

class CreateUsuarios extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            nome: '',
            cpf: '',
            email: '',
            celular: ''
        }
        this.changeNomeHandler = this.changeNomeHandler.bind(this);
        this.changeCpfHandler = this.changeCpfHandler.bind(this);
        this.saveOrUpdateUsuario = this.saveOrUpdateUsuario.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            UsuariosService.getUsuarioById(this.state.id).then( (res) =>{
                let usuario = res.data;
                this.setState({nome: usuario.nome,
                    cpf: usuario.cpf,
                    email : usuario.email,
                    celular: usuario.celular
                });
            });
        }        
    }
    saveOrUpdateUsuario = (e) => {
        e.preventDefault();
        let usuario = {nome: this.state.nome, cpf: this.state.cpf, email: this.state.email, celular: this.state.celular};
        console.log('usuario => ' + JSON.stringify(usuario));

        // step 5
        if(this.state.id === '_add'){
            UsuariosService.createUsuario(usuario).then(res =>{
                this.props.history.push('/usuario');
            });
        }else{
            UsuariosService.updateUsuario(usuario, this.state.id).then( res => {
                this.props.history.push('/usuario');
            });
        }
    }
    
    changeNomeHandler= (event) => {
        this.setState({nome: event.target.value});
    }

    changeCpfHandler= (event) => {
        this.setState({cpf: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeCelularHandler= (event) => {
        this.setState({celular: event.target.value});
    }

    cancel(){
        this.props.history.push('/usuario');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Adicionar</h3>
        }else{
            return <h3 className="text-center">Atualizar</h3>
        }
    }
    
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Nome: </label>
                                            <input placeholder="Nome" name="nome" className="form-control" 
                                                value={this.state.nome} onChange={this.changeNomeHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CPF: </label>
                                            <input placeholder="Cpf" name="cpf" className="form-control" 
                                                value={this.state.cpf} onChange={this.changeCpfHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Celular: </label>
                                            <input placeholder="Celular" name="celular" className="form-control" 
                                                value={this.state.celular} onChange={this.changeCelularHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateUsuario}>Salvar</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancelar</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateUsuarios;