

function FormFeedback (){
    return(

        <div class="form-group">
            <div class="container">
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput" class="text-white">Nome</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nome"/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2" class="text-white">Email</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Email"/>
                </div>
                </form>
                <label for="exampleFormControlTextarea1 text-white"class="text-white">Seu Feedback</label>
                <textarea class="form-control rounded-0" id="exampleFormControlTextarea1" placeholder="Escreva aqui ..." rows="10"></textarea>
                <br/>
                <button type="button" class="btn  btn-primary  ">Enviar</button>
            </div>
        </div>
    );
}

export default FormFeedback;