import {Button, Modal} from "react-bootstrap";

const DeleteComment = ({show, handleClose, data}) => {
    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Post</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <small>
                    {data && data.attributes && data.attributes.content}
                </small>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary">
                    Delete comment
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteComment;