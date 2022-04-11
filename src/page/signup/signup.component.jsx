import {useState} from "react";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

    const [signUpCred, setSignUpCred] = useState({
        fullName: '',
        email: '',
        password: '',
    });

    const handleChange = event => {
        const {name, value} = event.target;
        setSignUpCred({...signUpCred, [name]: value})
        console.log(signUpCred, `while user Typing`)
    }

    const handleSubmit = event => {
        event.preventDefault();
        navigate('/')
        console.log(signUpCred, `after user submit Register waiting Api`)

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full name </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    name={"fullName"}
                    required
                />
                <Form.Text className="text-muted">
                    Get in Touch No verification e-mail will be sent
                </Form.Text>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name={"email"}
                    required
                />
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
                Sign Up
            </Button>
        </Form>
    )


}


export default SignUp;