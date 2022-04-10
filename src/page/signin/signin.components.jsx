import {useState} from 'react';
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';

const SignIn = () => {
    const [userCred, setUserCred] = useState({
        email: "",
        password: "",
    });


    const handleChange = event => {
        console.log(event.target.value)
        const {name, value} = event.target;
        setUserCred({...userCred, [name]: value})
        console.log(userCred, `userCred while user Changing Input`)

    }


    const handleSubmit =  event => {
        event.preventDefault();
        console.log(userCred, `userCred OnSubmit`)
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name={"email"}/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={handleChange} name={"password"}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
        </div>
    )
}


export default SignIn;