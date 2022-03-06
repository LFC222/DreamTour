import Contador from "../../Contador";


function CardDeck2(){
    return(
        <div>
            <div class="card-deck">
  <div class="card">
    <img class="card-img-top" src="/img/img4.jpg" alt='china'/>
    <div class="card-body">
      <h5 class="card-title text-center">China</h5>
      <p class="card-text">10 dias de hospedagens na China em pousada ou hotel por um otimo preço , quatro quartos , piscina, café da manhã e tour pela capital incluso!</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item text-success text-center"><b>Price : $7000,00 por pessoa</b></li>
    </ul>
    <div class="card-footer">
    <button type="button" class="btn btn-lg btn-primary btn-block">Reservar</button>
    <Contador/>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="/img/img5.jpg" alt='finlandia'/>
    <div class="card-body">
      <h5 class="card-title text-center">Finlândia</h5>
      <p class="card-text">10 dias de hospedagens na ilha da Finlândia em pousada ou hotel por um otimo preço , quatro quartos , piscina, café da manhã e tour pela ilha incluso!</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item text-success text-center"><b>Price : $9000,00 por pessoa</b></li>
    </ul>
    <div class="card-footer">
    <button type="button" class="btn btn-lg btn-primary btn-block">Reservar</button>
    <Contador/>
    </div>
  </div>
  <div class="card">
    <img class="card-img-top" src="./img/img6.jpg" alt='bahamas'/>
    <div class="card-body">
      <h5 class="card-title text-center">Bahamas</h5>
      <p class="card-text">10 dias de hospedagens na ilha das Bahamas em pousada ou hotel por um otimo preço , quatro quartos , piscina, café da manhã e tour pela ilha incluso!</p>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item text-success text-center"><b>Price : $1500,00 por pessoa</b></li>
    </ul>
    <div class="card-footer">
    <button type="button" class="btn btn-lg btn-primary btn-block">Reservar</button>
    <Contador/>
    </div>
  </div>
</div>
<br/>
        </div>
    )
}

export default CardDeck2;