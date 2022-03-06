import {useState} from 'react';
import { Button,Form,Row,Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { changeUser } from '../../Redux/userSlice';

const Login = () => {
    const [name, setName] = useState('');

    const dispatch = useDispatch()

    const handleLogin = () =>{
        dispatch(changeUser(name))
    }

    return(
        <Form>
            <div className="container">
            <h1 className='mt-5 text-white '>Login</h1>
            <Row className='align-items-center'>
                <Col sm={6} className='my-1'>
                    <Form.Control type="text" placeholder="None" onChange={(e) => setName(e.target.value)} />

                </Col>
                <Col sm={6}>
                    <Button onClick={handleLogin} className="btn-success">Login</Button>
                </Col>
            </Row>
            </div>
            <hr/>
        </Form>
    );
}

export default Login;