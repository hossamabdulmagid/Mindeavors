import {Button, Modal} from 'react-bootstrap'

const DeletePost = ({show, handleClose, singlePost}) => {
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
                    <Button variant="primary" onClick={handleClose}>
                        Delete post
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


export default DeletePost;
