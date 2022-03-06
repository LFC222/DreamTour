import React, { Component } from 'react'
import DestinoService from './DestinoService';



class ListaDestino extends Component {
        constructor(props) {
        super(props)



        this.state = {
        destinos: []
        }
            this.addDestino = this.addDestino.bind(this);
            this.editDestino = this.editDestino.bind(this);
            this.deleteDestino = this.deleteDestino.bind(this);
        }



        deleteDestino(id){
            DestinoService.deleteDestino(id).then( res => {
            this.setState({destinos: this.state.destinos.filter(destino => destino.id !== id)});
        });
        }
        
        viewDestino(id){
            this.props.history.push(`/view-destino/${id}`);
        }
        editDestino(id){
            this.props.history.push(`/add-destino/${id}`);
        }



        componentDidMount(){
            DestinoService.getDestino().then((res) => {
            this.setState({ destinos: res.data});
        });
        }



        addDestino(){
            this.props.history.push('/add-destino/_add');
        }



        render() {
        return (
        <div>
            <h2 className="text-center text-white">Lista de Destino</h2>
            <div className = "row">
            <button className="btn btn-primary" onClick={this.addDestino}> Adicionar</button>
        </div>
            <br></br>
        <div className = "row">
        <table className = "table table-striped table-bordered">
            <thead>
            <tr>
            <th className='text-white'> Nome </th>
            <th className='text-white'> Descrição </th>
            <th className='text-white'> Dias </th>
            <th className='text-white'> Preços </th>
            <th className='text-white'> Actions</th>
            </tr>
            </thead>
            <tbody>
                {
                this.state.destinos.map(
                destino =>
                    <tr key = {destino.id}>
                    <td className='text-white'> {destino.nomeDestino} </td>
                    <td className='text-white'> {destino.descricao}</td>
                    <td className='text-white'> {destino.dias}</td>
                    <td className='text-white'> {destino.preco}</td>
                    <td>
                    <button onClick={ () => this.editDestino(destino.id)} className="btn btn-info">Update </button>
                    <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDestino(destino.id)} className="btn btn-danger">Delete </button>
                    <button style={{marginLeft: "10px"}} onClick={ () => this.viewDestino(destino.id)} className="btn btn-info">View </button>
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



export default ListaDestino;