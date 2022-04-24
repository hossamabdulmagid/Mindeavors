import {useState} from 'react';
import Form from "react-bootstrap/Form";
import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {RapperCommentsComponent} from "./comments.styles";
import {DoAddComment} from "../../redux/comments/comments-action";

const AddComment = ({JWT, DoAddComment}) => {

    const [content, setContent] = useState("")

    const handleChange = event => {
        const {name, value} = event.target;
        setContent({...content, [name]: value});
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const headers = {
        "Authorization": `Bearer ${JWT.jwt}`
    };


    let reset = () => {
        setContent("")
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        DoAddComment(content, headers);
        handleClose();
    }


    return (
        <div className={'container'}>
            <div className={'row'}>
                <RapperCommentsComponent>
                    <Button onClick={handleShow} style={{margin: '15px'}}>Add Comment</Button>
                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title> Comment</Modal.Title>
                        </Modal.Header>
                        <Form onSubmit={handleSubmit}>
                            <Modal.Body>
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
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="success" type="submit">
                                    Add Comment
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal>
                </RapperCommentsComponent>
            </div>
        </div>

    )
}
const mapStateToProps = state => ({
    JWT: state.user.strapiUser,
})

const mapDispatchToProps = dispatch => ({
    DoAddComment: (data, headers) => dispatch(DoAddComment(data, headers)),
})
export default connect(mapStateToProps, mapDispatchToProps)(AddComment);