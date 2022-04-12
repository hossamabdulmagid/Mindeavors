import {Button, Modal} from 'react-bootstrap'
import {connect} from 'react-redux';
import {Do_Delete_Post} from "../../redux/posts/post-action";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const DeletePost = ({show, handleClose, singlePost, Do_Delete_Post}) => {
    const navigate = useNavigate();
    let id = singlePost.id;
    const HandleDeleteReq = () => {
        Do_Delete_Post(id)

        toast.success(`post has been Deleted ${singlePost.title}`)
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
                        {singlePost && singlePost.title}
                    </h4>
                    <small>
                        {singlePost && singlePost.body}
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
    Do_Delete_Post: (id) => dispatch(Do_Delete_Post(id))
})

export default connect(null, mapDispatchToProps)(DeletePost);
