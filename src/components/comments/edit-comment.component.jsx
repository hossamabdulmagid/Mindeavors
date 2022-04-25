import {useEffect, useState} from 'react';
import {RapperCommentsComponent} from "./comments.styles";
import {DoUpdateComment, GetSingleComment} from "../../redux/comments/comments-action";
import {connect} from 'react-redux';
import {Button, Form, Modal, Spinner} from 'react-bootstrap'

const EditComment = ({
                         GetSingleComment,
                         singleComment,
                         loading,
                         token,
                         handleClose,
                         handleShow,
                         show,
                         path = {},
                         DoUpdateComment,
                         postId
                     }) => {


    let id = path.id;

    const [content, setContent] = useState("")

    const headers = {
        "Authorization": `Bearer ${token.jwt}`
    };


    const handleChange = event => {
        const {name, value} = event.target;
        setContent({...content, [name]: value});
        console.log(content)
    };

    useEffect(() => {
        if (!id) {
            return;
        }
        GetSingleComment(id, headers)

    }, [GetSingleComment, id])

    const handleSubmit = event => {
        event.preventDefault()
        DoUpdateComment(postId,id, content, headers)
        handleClose();
    }

    return (
        <div className={'row'}>
            <RapperCommentsComponent>
                <Modal show={show} onHide={handleClose} animation={false}>

                    <Modal.Header closeButton>
                        <Modal.Title>Edit Comment</Modal.Title>
                    </Modal.Header>
                    {!loading ?
                        <Form onSubmit={handleSubmit}>
                            <Modal.Body>


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
                                        defaultValue={path && path.attributes && path.attributes.content || ""}
                                        required
                                    />
                                </Form.Group>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Discard
                                </Button>
                                <Button variant="primary" type={'submit'}>
                                    Updated Comment
                                </Button>
                            </Modal.Footer>
                        </Form>
                        : <div className={'container text-center'}>
                            <Spinner animation={"border"}/>
                        </div>
                    }

                </Modal>
            </RapperCommentsComponent>
        </div>

    )
}
const mapStateToProps = state => ({
    singleComment: state.comments.singleComment,
    loading: state.comments.loading,
    token: state.user.strapiUser,

})

const mapDispatchToProps = dispatch => ({
    GetSingleComment: (id, headers) => dispatch(GetSingleComment(id, headers)),
    DoUpdateComment: (postId,id, content, headers) => dispatch(DoUpdateComment(postId,id, content, headers))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);