import React, { Component } from 'react'
import DestinoService from './DestinoService'

class ViewDestino extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            destino: {}
        }
    }

    voltar(){
        this.props.history.push('/destino');
    }

    componentDidMount(){
        DestinoService.getDestinoById(this.state.id).then( res => {
            this.setState({destino: res.data});
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
                            <div><b> { this.state.destino.nomeDestino}</b></div>
                        </div>
                        <div className = "row">
                            <label> Descrição: </label>
                            <div><b>{ this.state.destino.descricao }</b></div>
                        </div>
                        <div className = "row">
                            <label> Dias: </label>
                            <div><b> { this.state.destino.dias }</b></div>
                        </div>
                        <div className = "row">
                            <label> Preço: </label>
                            <div><b> { this.state.destino.preco }</b></div>
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

export default ViewDestino;