import {useState} from "react";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {useNavigate} from 'react-router-dom';
import {auth, createUserProfileDocument} from '../../lib/firebase'
import {useSelector} from 'react-redux'

const SignUp = () => {
    const navigate = useNavigate();

    const [signUpCred, setSignUpCred] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = event => {
        const {name, value} = event.target;
        setSignUpCred({...signUpCred, [name]: value})
    }

    const currentUser = useSelector((state) => state.user.currentUser)

    const handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = signUpCred;
        if(password )
        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, {displayName});
        } catch (error) {
            console.log(error, `this an error`);
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full name </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Name"
                    onChange={handleChange}
                    name={"displayName"}
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Re type Password"
                    onChange={handleChange}
                    name={"confirmPassword"}
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