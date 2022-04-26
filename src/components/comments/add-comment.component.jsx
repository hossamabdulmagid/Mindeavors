import {useState} from 'react';
import Form from "react-bootstrap/Form";
import {Button, Modal} from "react-bootstrap";
import {connect} from "react-redux";
import {PlusIcon, RapperCommentsComponent} from "./comments.styles";
import {DoAddComment} from "../../redux/comments/comments-action";

const AddComment = ({token, DoAddComment, postId, singlePost}) => {


    let userId = token.user.id;

    const [data, setData] = useState({post: '', content: '', author: userId})

    const handleChange = event => {
        const {name, value} = event.target;
        setData({...data, [name]: value});
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const headers = {
        "Authorization": `Bearer ${token.jwt}`
    };


    const handleSubmit = (event) => {
        event.preventDefault()
        data.post = postId;
        DoAddComment(data, headers);
        handleClose();
    }


    return (
        <div className={'container'}>
            <div className={'row'}>
                <RapperCommentsComponent>
                    <h5 onClick={handleShow} className={'add-comment'}>
                        <PlusIcon/>
                        comment
                    </h5>
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
    token: state.user.strapiUser || "",
})

const mapDispatchToProps = dispatch => ({
    DoAddComment: (data, headers) => dispatch(DoAddComment(data, headers)),
})

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);