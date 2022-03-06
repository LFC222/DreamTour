import {BrowserRouter as Router, Route, Link,Switch} from 'react-router-dom';
import Home from "../Home";
import Destinos from "../Destinos";
import Contatos from "../Contatos";
import Promocao from "../Promocao";
import Conta from '../Components';
import ListaUsuarios from '../Usuarios/ListaUsuarios';
import CreateUsuarios from '../Usuarios/CreateUsuarios';
import ViewUsuarios from '../Usuarios/ViewUsuarios';
import Header from '../Usuarios/Header';
import ListaDestino from '../Lugares/ListaDestino';
import CreateDestino from '../Lugares/CreateDestino';
import ViewDestino from '../Lugares/ViewDestino';

function Rotas(){
    return(
      <Router>

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <a class="navbar-brand" href="/home">DreamTour</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                  <a class="nav-item nav-link active" href="*"><Link to="/home">Home</Link> <span class="sr-only"></span></a>
                  <a class="nav-item nav-link active" href="*"><Link to="/login">Login</Link> <span class="sr-only"></span></a>
                  <a class="nav-item nav-link" href="*"><Link to="/destinos">Destinos</Link></a>
                  <a class="nav-item nav-link" href="*"><Link to="/promocao">Promoção</Link></a>
                  <a class="nav-item nav-link " href="*"><Link to="/contatos">Contatos</Link></a>
                  <a class="nav-item nav-link " href="*"><Link to="/usuario">User</Link></a>
                  <a class="nav-item nav-link " href="*"><Link to="/destino">Lugares</Link></a>
                </div>
              </div>
            </nav>
                    <Switch>
                        <Route path='/home'   component={Home}></Route>
                        <Route path='/login'   component={Conta}></Route>
                        <Route path='/destinos'   component={Destinos}></Route>
                        <Route path='/promocao'   component={Promocao}></Route>
                        <Route path='/contatos'   component={Contatos}></Route>

                      <div>
                      <Header />
                        <div className="container">
                          <Route path = "/usuario" exact component = {ListaUsuarios}></Route>
                          <Route path='/add-usuario/:id' exact component = {CreateUsuarios}></Route>
                          <Route path='/view-usuario/:id' exact component = {ViewUsuarios}></Route>

                          <Route path = "/destino" exact component = {ListaDestino}></Route>
                          <Route path = "/add-destino/:id" exact component = {CreateDestino}></Route>
                          <Route path = "/view-destino/:id" exact component = {ViewDestino}></Route>
                        </div>
                      </div>
                      
                    </Switch>

                    
      </Router>
    );
}

export default Rotas;