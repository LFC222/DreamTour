import { useSelector } from "react-redux";
import { selectUser } from "../../Redux/userSlice";


const User = () => {

    const {name} = useSelector(selectUser);


    return(
        <div className="container">
            <div>
                <h1 className="text-white">Usuario: {name}</h1>
            </div>
            <br />
        </div>
    );
}

export default User;