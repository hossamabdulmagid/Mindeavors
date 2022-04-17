import {Button, Modal} from 'react-bootstrap'
import {connect} from 'react-redux';
import {Do_Delete_Post} from "../../redux/posts/post-action";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const DeletePost = ({show, handleClose, singlePost, Do_Delete_Post}) => {
    const navigate = useNavigate();
    let id = singlePost.id;
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUwMTYzNzQ4LCJleHAiOjE2NTI3NTU3NDh9.Xwmx1beDfZ4MD-PDbuCNchIZPckh6A9Gi0wgSm-1syg"
    };
    const HandleDeleteReq = () => {
        Do_Delete_Post(id, headers)

        toast.success(`post has been Deleted ${singlePost.attributes.title}`)
        handleClose();
        navigate('/')
    }
    return (
        <>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>
                        {singlePost && singlePost.attributes && singlePost.attributes.title}
                    </h4>
                    <small>
                        {singlePost && singlePost.attributes && singlePost.attributes.content}
                    </small>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={HandleDeleteReq}>
                        Delete post
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

const mapDispatchToProps = dispatch => ({
    Do_Delete_Post: (id, headers) => dispatch(Do_Delete_Post(id, headers))
})

export default connect(null, mapDispatchToProps)(DeletePost);
