import axios from 'axios';



const USUARIOS_API_BASE_URL = "http://localhost:8080/api/v1/usuario";



class UsuariosService {



        getUsuarios(){
            return axios.get(USUARIOS_API_BASE_URL);
        }



        createUsuario(usuario){
            return axios.post(USUARIOS_API_BASE_URL, usuario);
        }



        getUsuarioById(usuarioId){
            return axios.get(USUARIOS_API_BASE_URL + '/' + usuarioId);
        }



        updateUsuario(usuario, usuarioId){
            return axios.put(USUARIOS_API_BASE_URL + '/' + usuarioId, usuario);
        }



        deleteUsuario(usuarioId){
            return axios.delete(USUARIOS_API_BASE_URL + '/' + usuarioId);
        }
}



export default new UsuariosService()