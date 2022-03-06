import React, { Component } from 'react'
import UsuariosService from './UsuariosService';



class ListaUsuarios extends Component {
        constructor(props) {
        super(props)



        this.state = {
        usuarios: []
        }
            this.addUsuario = this.addUsuario.bind(this);
            this.editUsuario = this.editUsuario.bind(this);
            this.deleteUsuario = this.deleteUsuario.bind(this);
        }



        deleteUsuario(id){
            UsuariosService.deleteUsuario(id).then( res => {
            this.setState({usuarios: this.state.usuarios.filter(usuario => usuario.id !== id)});
        });
        }
        
        viewUsuario(id){
            this.props.history.push(`/view-usuario/${id}`);
        }
        editUsuario(id){
            this.props.history.push(`/add-usuario/${id}`);
        }



        componentDidMount(){
            UsuariosService.getUsuarios().then((res) => {
            this.setState({ usuarios: res.data});
        });
        }



        addUsuario(){
            this.props.history.push('/add-usuario/_add');
        }



        render() {
        return (
        <div>
            <h2 className="text-center text-white">Lista de Usuarios</h2>
            <div className = "row">
            <button className="btn btn-primary" onClick={this.addUsuario}> Adicionar</button>
        </div>
            <br></br>
        <div className = "row">
        <table className = "table table-striped table-bordered">
            <thead>
            <tr>
            <th className='text-white'> Nome </th>
            <th className='text-white'> Cpf </th>
            <th className='text-white'> Email </th>
            <th className='text-white'> Celular </th>
            <th className='text-white'> Actions</th>
            </tr>
            </thead>
            <tbody>
                {
                this.state.usuarios.map(
                usuario =>
                    <tr key = {usuario.id}>
                    <td className='text-white'> { usuario.nome} </td>
                    <td className='text-white'> {usuario.cpf}</td>
                    <td className='text-white'> {usuario.email}</td>
                    <td className='text-white'> {usuario.celular}</td>
                    <td>
                    <button onClick={ () => this.editUsuario(usuario.id)} className="btn btn-info">Update </button>
                    <button style={{marginLeft: "10px"}} onClick={ () => this.deleteUsuario(usuario.id)} className="btn btn-danger">Delete </button>
                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewUsuario(usuario.id)} className="btn btn-info">View </button>
                    </td>
                    </tr>
                    )
                }
            </tbody>
        </table>



        </div>



        </div>
        )
        }
}



export default ListaUsuarios;