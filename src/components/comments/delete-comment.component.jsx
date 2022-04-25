import {Button, Modal} from "react-bootstrap";
import {DoDeleteComment} from "../../redux/comments/comments-action";
import {connect} from "react-redux";

const DeleteComment = ({show, handleClose, data, token, DoDeleteComment,postId}) => {


    const headers = {
        "Authorization": `Bearer ${token.jwt}`
    };


    console.log(data, `data`)

    const HandleDeleteReq = async () => {
        await DoDeleteComment(postId,data, headers);
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header closeButton>
                <Modal.Title>Delete comment</Modal.Title>
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
                <Button variant="primary" onClick={HandleDeleteReq}>
                    Delete comment
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const mapStateToProps = state => ({
    token: state.user.strapiUser,
})

const mapDispatchToProps = dispatch => ({
    DoDeleteComment: (postId,data, headers) => dispatch(DoDeleteComment(postId,data, headers)),
})
export default connect(mapStateToProps, mapDispatchToProps)(DeleteComment);