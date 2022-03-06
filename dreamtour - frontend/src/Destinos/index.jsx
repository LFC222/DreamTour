import React from 'react';
import TextoInicial from './TextoInicial';
import CardDeck1 from './CardDeck1'
import CardDeck2 from './CardDeck2'



function Destinos(){
    return(
        <div class="container">
          <TextoInicial/>
            <CardDeck1/>
            <CardDeck2/>
        </div>
    );
}

export default Destinos;