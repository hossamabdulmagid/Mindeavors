import {useState} from "react";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {toast} from "react-toastify";
import {do_Register} from "../../redux/user/user-action";
import {useDispatch} from "react-redux";

const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [signUpCred, setSignUpCred] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = event => {
        const {name, value} = event.target;
        setSignUpCred({...signUpCred, [name]: value})
    }
    const {username, email, password} = signUpCred;


    const handleSubmit = async event => {
        event.preventDefault();

        if (password.length < 6) {
            toast.warn(`The password must be 6 to 32 characters long`)
            return;

        }
        dispatch(do_Register(signUpCred, toast));

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label> Name </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    name={"username"}
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