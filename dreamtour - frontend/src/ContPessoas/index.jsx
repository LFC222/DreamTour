import {useState} from 'react';

function ContPessoas(){

    const [valor , setValor ] = useState(0);

    function aumentar(){
        setValor(valor + 1);
    }

    function diminuir(){
        setValor(valor - 1);
    }

    return(
        <>
        <div className='container'>
          <div className='container-flex text-center'>
            <div className='container border'>
                <h1 className='text-dark'>Preencha para Promoções</h1>
                <div>
                    <p className='text-danger'> Promoção será proporcional a quantidade de pessoas
                                                na reserva</p>
                </div>
                <p className='text-dark'>Para quantas pessoas será esta reserva? <br /> <b>{valor}</b></p>
                <button style={{margin:15}} className='btn btn-success botao' onClick={aumentar}>Adicionar</button>
                <button className='btn btn-danger botao' onClick={diminuir}>Diminuir</button>
                <p className='text-dark'>Valor da promoção: </p>
                <p className='text-dark'><b>R${valor * 300}</b></p>
            </div>
              </div>
              <br />
              </div>
        </>
    );
}

export default ContPessoas;