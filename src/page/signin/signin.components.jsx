import {useState} from 'react';
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom';
import {auth, signInWithGoogle} from '../../lib/firebase';
import {FcGoogle} from "react-icons/fc";
import {toast} from 'react-toastify';
import {RapperSignInComponent} from './signin.styles'

const SignIn = () => {
    const navigate = useNavigate();

    const [userCred, setUserCred] = useState({
        email: "",
        password: "",
    });
    const {email, password} = userCred;

    const handleChange = event => {
        const {name, value} = event.target;
        setUserCred({...userCred, [name]: value})
        console.log(userCred, `while  user Typing `)

    }


    const handleSubmit = async event => {
        event.preventDefault();
        if (password.length < 6) {
            toast.warn(`The password must be 6 to 32 characters long`)
            return;
        }
        try {
            await auth.signInWithEmailAndPassword(email, password);
            toast.success(`welcome ${email.toString()}`)
            // navigate('/')

        } catch (error) {
            console.log(error, `this an error`);
            toast.error(`${error.toString()}`, {
                theme: "colored"
            })

        }
        console.log(userCred, `user Submit Login Wating Api`)
    }

    return (
        <RapperSignInComponent>
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
                <br/>
                <Button className={'btn btn-light'} onClick={signInWithGoogle}>
                    <h5>
                        <FcGoogle/>
                    </h5>
                    <span>Log in With Google</span>
                </Button>
            </Form>
        </RapperSignInComponent>
    )
}


export default SignIn;