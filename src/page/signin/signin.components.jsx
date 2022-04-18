import {useState} from 'react';
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import {toast} from 'react-toastify';
import {RapperSignInComponent} from './signin.styles'
import {useDispatch, useSelector} from "react-redux";
import {Do_login} from "../../redux/user/user-action";

const SignIn = ({}) => {
    const dispatch = useDispatch()


    const error = useSelector((state) => state.user.error)


    const [userCred, setUserCred] = useState({
        identifier: "",
        password: "",
    });

    const {identifier, password} = userCred;

    const handleChange = event => {
        const {name, value} = event.target;
        setUserCred({...userCred, [name]: value})

    }


    const handleSubmit = async event => {
        event.preventDefault();
        if (password.length < 6) {
            toast.warn(`The password must be 6 to 32 characters long`)
            return;
        }

        await dispatch(Do_login(userCred, toast))


    }

    return (
        <RapperSignInComponent>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter email"
                        onChange={handleChange}
                        name={"identifier"}
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
        </RapperSignInComponent>
    )
}


export default SignIn;