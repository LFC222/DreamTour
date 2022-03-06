import React from 'react';
import Intro from './Intro';
import Cadastro from './Cadastro';
import TextoFeed from './TextoFeed';
import FormFeedback from './FormFeedback';


function Contatos(){
    return(
        <div>

            <Intro/>

                <section>
                    <Cadastro/>
                    <TextoFeed/>
                    <FormFeedback/>
                </section>

        </div>
    );
}

export default Contatos;