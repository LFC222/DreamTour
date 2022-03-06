import {useState} from 'react';

function Contador(){

    const [valor , setValor ] = useState(0);

    function aumentar(){
        setValor(valor + 1);
    }

    function diminuir(){
        setValor(valor - 1);
    }

    return(
        <>
          <div className='container-flex text-center '>
          <hr/>
            <div className='container border border-dark'>
                <p>Faça sua pré-reserva <b>{valor}</b></p>
                <button style={{margin:15}} className='btn btn-success botao' onClick={aumentar}>Adicionar</button>
                <button className='btn btn-danger botao' onClick={diminuir}>Diminuir</button>
            </div>
              </div>
        </>
    );
}

export default Contador;