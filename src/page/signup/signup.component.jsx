import {useState} from "react";
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";


const SignUp = () => {

    const [signUpCred, setSignUpCred] = useState({
        fullName: '',
        email: '',
        password: '',
    });


    const handleChange = event => {

        const {name, value} = event.target;
        setSignUpCred({...signUpCred, [name]: value})
        console.log(signUpCred, `while User Typing`)
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(signUpCred, `while User Submited`)

    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name </Form.Label>
                <Form.Control type="text" placeholder="Name" onChange={handleChange} name={"fullName"}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" onChange={handleChange} name={"email"}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={handleChange} name={"password"}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Sign Up
            </Button>
        </Form>
    )


}


export default SignUp;