import {useState} from 'react';
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';

const SignIn = () => {
    const navigate = useNavigate();

    const [userCred, setUserCred] = useState({
        email: "",
        password: "",
    });


    const handleChange = event => {
        const {name, value} = event.target;
        setUserCred({...userCred, [name]: value})
        console.log(userCred, `while  user Typing `)

    }


    const handleSubmit = event => {
        event.preventDefault();
        navigate('/')
        console.log(userCred, `user Submit Login Wating Api`)
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        name={"email"}
                        required
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        onChange={handleChange}
                        name={"password"}
                        required
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    )
}


export default SignIn;