import React, { Component } from 'react'
import DestinoService from './DestinoService';

class CreateDestino extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            nomeDestino: '',
            descricao: '',
            dias: '',
            preco: ''
        }
        this.changeNomeDestinoHandler = this.changeNomeDestinoHandler.bind(this);
        this.changeDescricaoHandler = this.changeDescricaoHandler.bind(this);
        this.saveOrUpdateDestino = this.saveOrUpdateDestino.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            DestinoService.getDestinoById(this.state.id).then( (res) =>{
                let destino = res.data;
                this.setState({nomeDestino: destino.nomeDestino,
                    descricao: destino.descricao,
                    dias : destino.dias,
                    preco: destino.preco
                });
            });
        }        
    }
    saveOrUpdateDestino = (e) => {
        e.preventDefault();
        let destino = {nomeDestino: this.state.nomeDestino, descricao: this.state.descricao, dias: this.state.dias, preco: this.state.preco};
        console.log('destino => ' + JSON.stringify(destino));

        // step 5
        if(this.state.id === '_add'){
            DestinoService.createDestino(destino).then(res =>{
                this.props.history.push('/destino');
            });
        }else{
            DestinoService.updateDestino(destino, this.state.id).then( res => {
                this.props.history.push('/destino');
            });
        }
    }
    
    changeNomeDestinoHandler= (event) => {
        this.setState({nomeDestino: event.target.value});
    }

    changeDescricaoHandler= (event) => {
        this.setState({descricao: event.target.value});
    }

    changeDiasHandler= (event) => {
        this.setState({dias: event.target.value});
    }

    changePrecoHandler= (event) => {
        this.setState({preco: event.target.value});
    }

    cancel(){
        this.props.history.push('/destino');
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
                                            <input placeholder="NomeDestino" name="nomedestino" className="form-control" 
                                                value={this.state.nomeDestino} onChange={this.changeNomeDestinoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Descrição: </label>
                                            <input placeholder="Descricao" name="descricao" className="form-control" 
                                                value={this.state.descricao} onChange={this.changeDescricaoHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Dias: </label>
                                            <input placeholder="Dias" name="dias" className="form-control" 
                                                value={this.state.dias} onChange={this.changeDiasHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Preco: </label>
                                            <input placeholder="Preco" name="preco" className="form-control" 
                                                value={this.state.preco} onChange={this.changePrecoHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateDestino}>Salvar</button>
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

export default CreateDestino;