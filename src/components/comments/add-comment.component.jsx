import {useState} from 'react';
import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {RapperCommentsComponent} from "./comments.styles";
import {DoAddComment} from "../../redux/comments/comments-action";

const AddComment = ({JWT, DoAddComment}) => {

    const [content, setContent] = useState("")

    const handleChange = event => {
        const {name, value} = event.target;
        setContent({...content, [name]: value});
    };

    const headers = {
        "Authorization": `Bearer ${JWT.jwt}`
    };


    const handleSubmit = event => {
        event.preventDefault()
        DoAddComment(content, headers)
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
const mapStateToProps = state => ({
    JWT: state.user.strapiUser,
})

const mapDispatchToProps = dispatch => ({
    DoAddComment: (data, headers) => dispatch(DoAddComment(data, headers)),
})
export default connect(mapStateToProps, mapDispatchToProps)(AddComment);