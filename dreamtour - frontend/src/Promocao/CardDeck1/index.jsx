import Contador from "../../Contador";


function CardDeck1 (){
    return(
        <div>
                    <div class="card-deck">
            <div class="card card1">
                <img  class="card-img-top" src="/img/Jeri.jpg" alt='jericoacoara'/>
                <div class="card-body">
                    <h5 class="card-title">Jericoacoara - Ceará</h5>
                    <p class="card-text">Aéreo com saída de Congonhas, estadia, quarto para casal, wi-fi, café da manhã, passeio de buggy, passieo no centro histórico, mergulho, jantar no hotel.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">20 de Agosto a 23 de Agosto</li>
                    <li class="list-group-item"><strike>De:R$ 980,00 por pessoa</strike></li>
                    <li class="list-group-item">Por Apenas: <b class="neg">R$ 500,00 por pessoa</b></li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-primary btn-lg btn-block">Reservar</button>
                    <Contador/>
                </div>
            </div>
            <br/>
            

            <div class="card card1">
                <img class="card-img-top" src="/img/Pipa.jpg" alt='pipa'/>
                <div class="card-body">
                    <h5 class="card-title">Pipa - Rio Grande do Norte</h5>
                    <p class="card-text">Aéreo com saída de Congonhas, translado, estadia, quarto para casal, wi-fi, café da manhã, passeio de escuna, passieo nas praias da região, jantar no hotel.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">07 de Agosto a 09 de Agosto</li>
                    <li class="list-group-item"><strike>De:R$ 900,00 por pessoa</strike></li>
                    <li class="list-group-item">Por Apenas: <b class="neg">R$ 400,00 por pessoa</b></li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-primary btn-lg btn-block">Reservar</button>
                    <Contador/>
                </div>
            </div>
            <br/>

            <div class="card card1">
                <img class="card-img-top" src="/img/ParatyIcone.jpg" alt='paraty'/>
                <div class="card-body">
                    <h5 class="card-title">Paraty - Rio de Janeiro</h5>
                    <p class="card-text">Ônibus com saída de Diadema, estadia, quarto para casal, wi-fi, café da manhã, passeio de escuna, passieo no centro histórico, jantar.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">07 de Agosto a 09 de Agosto</li>
                    <li class="list-group-item"><strike>De:R$ 450,00 por pessoa</strike></li>
                    <li class="list-group-item">Por Apenas: <b class="neg">R$ 200,00 por pessoa</b></li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-primary btn-lg btn-block">Reservar</button>
                    <Contador/>
                </div>
            </div>
        </div>
        <br/>
        </div>
    );
}

export default CardDeck1