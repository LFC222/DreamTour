import React from 'react';
import './index.css';
import Texto from './Texto';
import CardDeck1 from './CardDeck1';
import CardDeck2 from './CardDeck2';


function Promocao(){
    return(
        <div className='container'>
            <Texto/>
            <CardDeck1/>
            <CardDeck2/>
        </div>
        
    );
}

export default Promocao;