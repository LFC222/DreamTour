import Contador from "../../Contador";
import ContPessoas from "../../ContPessoas";


function CardDeck2(){
    return(
        <div>
            <div class="card-deck">
            <div class="card card1">
                <img class="card-img-top" src="/img/ibitipoca.jpg" alt='ibitipoca'/>
                <div class="card-body">
                    <h5 class="card-title">Ibitipoca - Minas Gerais</h5>
                    <p class="card-text">Aéreo até Minas e de ônibus até Ibitipoca, estadia, quarto para casal, wi-fi, café da manhã, passeio com guia pela Janela do Céu, passieo nas cachoeiras ao redor, jantar no hotel.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">29 de Agosto a 10 de Setembro</li>
                    <li class="list-group-item"><strike>De:R$ 1000,00 por pessoa</strike></li>
                    <li class="list-group-item">Por Apenas: <b class="neg">R$ 490,00 por pessoa</b></li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-primary btn-lg btn-block">Reservar</button>
                    <Contador/>
                </div>
            </div>
            <br/>

            <div class="card card1">
                <img class="card-img-top" src="/img/cataratas.jpg" alt='iguacu'/>
                <div class="card-body">
                    <h5 class="card-title">Cataratas do Iguaçu - Paraná</h5>
                    <p class="card-text">Aéreo com saída de Congonhas e Galeão, translado, estadia, quarto para casal, wi-fi, café da manhã, passeio de Turistico pelas Cataratas, jantar no hotel.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">20 de Agosto a 30 de Agosto</li>
                    <li class="list-group-item"><strike>De:R$ 1500,00 por pessoa</strike></li>
                    <li class="list-group-item">Por Apenas: <b class="neg">R$ 695,00 por pessoa</b></li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-primary btn-lg btn-block">Reservar</button>
                    <Contador/>
                </div>
            </div>
            <br/>

            <div class="card card1" >
                <img class="card-img-top" src="/img/monte-roraima.jpg" alt='monte'/>
                <div class="card-body">
                    <h5 class="card-title">Monte Roraima - Roraima</h5>
                    <p class="card-text">Saida do Galeão e Congonhas, estadia, quarto para casal, wi-fi, café da manhã, passeio Turistico pelo Monte, jantar.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">21 de Outubro a 07 de Novembro</li>
                    <li class="list-group-item"><strike>De:R$ 1600,00 por pessoa</strike></li>
                    <li class="list-group-item">Por Apenas: <b class="neg">R$ 400,00 por pessoa</b></li>
                </ul>
                <div class="card-body">
                    <button type="button" class="btn btn-primary btn-lg btn-block">Reservar</button>
                    <Contador/>
                </div>
            </div>
            <br/>
        </div>
        <br/>
        <ContPessoas/>
        </div>
    );
}

export default CardDeck2;