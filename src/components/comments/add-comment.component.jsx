import {useState} from 'react';
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {RapperCommentsComponent} from "./comments.styles";

const AddComment = () => {

    const [content, setContent] = useState("")

    const handleChange = event => {
        const {name, value} = event.target;
        setContent({...content, [name]: value});
    };


    const handleSubmit = event => {
        event.preventDefault()
    }


    return (

        <div className={'container'}>
            <div className={'row'}>
                <RapperCommentsComponent>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>
                                {/*New Comment*/}
                            </Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Add Comment here"
                                onChange={handleChange}
                                name={"content"}
                                className={'textarea'}
                                required
                            />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Add Comment
                        </Button>
                    </Form>
                </RapperCommentsComponent>
            </div>
        </div>

    )
}

export default connect(null, null)(AddComment);