import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { loggout } from "../../Redux/userSlice";

const Loggout = () => {

    const dispatch = useDispatch()

    const handleLoggout = () => {


        dispatch(loggout())
    }

    return(
        <div className="container">
            <div>
                <Button onClick={handleLoggout} className="btn btn-danger">Loggout</Button>
            </div>
            <br />
        </div>
    );
}

export default Loggout;