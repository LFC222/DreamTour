import axios from 'axios';

const DESTINOS_API_BASE_URL = "http://localhost:8080/api/v1/destino";



class LugaresService {



        getDestino(){
            return axios.get(DESTINOS_API_BASE_URL);
        }



        createDestino(destino){
            return axios.post(DESTINOS_API_BASE_URL, destino);
        }



        getDestinoById(destinoId){
            return axios.get(DESTINOS_API_BASE_URL + '/' + destinoId);
        }



        updateDestino(destino, destinoId){
            return axios.put(DESTINOS_API_BASE_URL + '/' + destinoId, destino);
        }



        deleteDestino(destinoId){
            return axios.delete(DESTINOS_API_BASE_URL + '/' + destinoId);
        }
}



export default new LugaresService()