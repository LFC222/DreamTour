import Contador from "../../Contador";


function CardDeck1(){
    return(
    <div>
        <div class="card-deck">
        <div class="card">
          <img class="card-img-top" src="/img/img1.jpg" alt='caribe'/>
          <div class="card-body">
            <h5 class="card-title text-center">Caribe</h5>
            <p class="card-text">10 dias de hospedagens na ilha do Caribe em pousada ou hotel por um otimo preço , quatro quartos , piscina, café da manhã e tour pela ilha incluso! .</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item text-success text-center"><b>Price : $3000,00 por pessoa</b></li>
          </ul>
          <div class="card-footer">
          <button type="button" class="btn btn-lg btn-primary btn-block">Reservar</button>
          <Contador/>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="/img/img2.jpg" alt='indonesia'/>
          <div class="card-body">
            <h5 class="card-title text-center">Indonésia</h5>
            <p class="card-text">10 dias de hospedagens na capital da Indonesia em pousada ou hotel por um otimo preço , quatro quartos , piscina e café da manhã !</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item text-success text-center"><b>Price : $6000,00 por pessoa</b></li>
          </ul>
          <div class="card-footer">
          <button type="button" class="btn btn-lg btn-primary btn-block">Reservar</button>
          <Contador/>
          </div>
        </div>
        <div class="card">
          <img class="card-img-top" src="./img/img3.jpg" alt='japao'/>
          <div class="card-body">
            <h5 class="card-title text-center">Japão</h5>
            <p class="card-text">10 dias de hospedagens na ilha do Japão em pousada ou hotel por um otimo preço , quatro quartos , piscina, café da manhã e tour pela ilha incluso!</p>
          </div>
          <ul class="list-group list-group-flush">
          <li class="list-group-item text-success text-center"><b>Price : $7000,00 por pessoa</b></li>
          </ul>
          <div class="card-footer">
          <button type="button" class="btn btn-lg btn-primary btn-block">Reservar</button>
          <Contador/>
          </div>
        </div>
      </div>
      <br/>
    </div>
    );
}

export default CardDeck1;