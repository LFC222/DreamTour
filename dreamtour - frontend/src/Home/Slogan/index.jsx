import ContPessoas from "../../ContPessoas";


function Slogan (){

    return(
        <div class="container">

    <div class="container p-5 my-5 border bg-dark">
        <h1  className='text-white text-center'>Bem Vindos ao <a href='/home' class="text-primary"> DreamTour</a> </h1>
    </div>

    <div class="jumbotron">
        <div class="text-center">
            <h1 class="display-3">Bem Vindos ao <a href='/home' class="text-primary"> DreamTour</a> esperamos dar a melhor
            experiência para sua viagem</h1>
        </div>
        <br/>
        <p class="lead text-dark">A vida é feita de momentos e valorizamos muito esses momentos com você, por isso não perca tempo e venha já conhecer nossas praias e vilarejos. Levamos aos nossos clientes todo conforto e tranquilidade que você merece.</p>
        
        <div>
        <img class="img rounded mx-auto d-block" src="/img/praia2.jpg" alt='praia2' />
        </div>
        <br /><br /><br />

        <div>
            <p class="text-danger text-xl-center"><b>Ganhe 50% de desconto na sua primeira reserva conosco! Promoção de tempo limitado</b></p>
        </div>
        <br /><br />

              <button type="button" class="btn btn-lg btn-primary btn-lg btn-block">Faça sua reserva já!</button>
              <ContPessoas/>
    </div>
    </div>
    );
}

export default Slogan;