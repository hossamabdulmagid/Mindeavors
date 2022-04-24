import {useState} from 'react';
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {RapperCommentsComponent} from "./comments.styles";
import {useLocation, useNavigate} from "react-router-dom";

const EditComment = () => {

    let navigate = useNavigate();

    let location = useLocation();

    const [content, setContent] = useState("")


    const handleChange = event => {
        const {name, value} = event.target;
        setContent({...content, [name]: value});
        console.log(content)
    };


    const handleSubmit = event => {
        event.preventDefault()
    }
    let id = location.pathname.slice(14);


    const Cancel = () => {
        navigate(`/posts/${id}`)
    }
    return (

        <div className={'container'}>
            <div className={'row'}>
                <RapperCommentsComponent>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>
                                Content
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Enter Body"
                                onChange={handleChange}
                                name={"content"}
                                className={'textarea'}
                                // value={content} waiting to create Action from redux
                                required
                            />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Update
                        </Button>
                        <Button variant="primary" onClick={Cancel}>
                            Discard
                        </Button>
                    </Form>
                </RapperCommentsComponent>
            </div>
        </div>

    )
}

export default connect(null, null)(EditComment);