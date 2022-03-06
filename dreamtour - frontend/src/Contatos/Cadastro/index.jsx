

function Cadastro(){
    return(

        <form>
                <h1 class="text-center text-white">Cadastre-se</h1>

                    <div class="container p-5 my-5 border bg-dark">

                    <div class="form-row">
                        <div class="form-group col-md-6 text-white">
                        <label for="inputNome">Nome</label>
                        <input type="text" class="form-control" id="inputNome" placeholder="Nome completo"/>
                        </div>
                        <div class="form-group col-md-6 text-white">
                        <label for="inputText">Email</label>
                        <input type="text" class="form-control" id="inputEmail" placeholder="insira seu e-mail"/>
                        </div>
                    </div>
                    <div class="form-group text-white">
                        <label for="inputAddress">Endereço</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0"/>
                    </div>
                    <div class="form-group text-white">
                        <label for="inputAddress2 ">Complemento</label>
                        <input type="text" class="form-control" id="inputComplemento" placeholder="Apartamento, hotel, casa, etc."/>
                    </div>
                    <div class="form-row text-white">
                        <div class="form-group col-md-6">
                        <label for="inputCity">Cidade</label>
                        <input type="text" class="form-control" id="inputCity"/>
                        </div>
                        <div class="form-group col-md-4 text-white">
                        <label for="inputEstado">Estado</label>
                        <select id="inputEstado" class="form-control">
                            <option selected>Escolher...</option>
                            <option>Rio de Janeiro</option>
                            <option>São Paulo</option>
                            <option>Minas Gerais</option>
                            <option>Bahia</option>
                        </select>
                        </div>
                        <div class="form-group col-md-2 text-white">
                        <label for="inputCEP">CEP</label>
                        <input type="text" class="form-control" id="inputCEP"/>
                        </div>
                    </div>
                    <div class="form-group text-white">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="gridCheck"/>
                        <label class="form-check-label" for="gridCheck">
                            Aceito receber notificações por email
                        </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Cadastrar</button>

  </div>
</form>
    );
}

export default Cadastro;