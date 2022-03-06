import Loggout from "./Loggout";
import Login from "./Login";
import User from "./User";


function Conta(){
    return(
        <div>
            <Login/>
            <User/>
            <Loggout/>
        </div>
    );
}

export default Conta;