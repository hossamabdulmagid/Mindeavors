import {Button, Modal} from "react-bootstrap";
import {DoDeleteComment} from "../../redux/comments/comments-action";
import {connect} from "react-redux";

const DeleteComment = ({show, handleClose, data, JWT, DoDeleteComment}) => {


    const headers = {
        "Authorization": `Bearer ${JWT.jwt}`
    };
    let id = data.id;
    console.log(data, `data`)
    const HandleDeleteReq = async () => {
        await DoDeleteComment(data, headers);
        handleClose();
    }
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
                <Button variant="primary" onClick={HandleDeleteReq}>
                    Delete comment
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

const mapStateToProps = state => ({
    JWT: state.user.strapiUser,
})

const mapDispatchToProps = dispatch => ({
    DoDeleteComment: (data, headers) => dispatch(DoDeleteComment(data, headers)),
})
export default connect(mapStateToProps, mapDispatchToProps)(DeleteComment);