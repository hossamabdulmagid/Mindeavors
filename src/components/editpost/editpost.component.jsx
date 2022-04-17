import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Get_Single_post, UpdateSinglePost} from "../../redux/posts/post-action";
import {connect} from "react-redux";
import {useLocation, useNavigate} from 'react-router-dom';
import {RapperEditPostComponent} from "./editpost.styles";

const EditPost = ({UpdateSinglePost, PostUpdated, postLoading, postView}) => {

    const location = useLocation();

    const navigate = useNavigate();

    const [data, setdata] = useState({
        title: '',
        content: '',

    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setdata({data, [name]: value})
        console.log(data, `post while changing input`)
    }
    let id = location.pathname.slice(11);

    const handleSubmit = event => {
        event.preventDefault()
        UpdateSinglePost(id, headers, data)
        // toast.success(`Post Updated Successful`)
        navigate(`/posts/${id}`)
    }
    const headers = {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjUwMTYzNzQ4LCJleHAiOjE2NTI3NTU3NDh9.Xwmx1beDfZ4MD-PDbuCNchIZPckh6A9Gi0wgSm-1syg"
    }

    const Cancel = () => {
        navigate(`/posts/${id}`)
    }
    useEffect(() => {
        Get_Single_post(id);

    }, [Get_Single_post, id, postLoading])

    return (

        <div className={'container'}>
            <div className={'row'}>
                <RapperEditPostComponent>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>
                                Title
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                onChange={handleChange}
                                name={"title"}
                                defaultValue={postView.attributes.title}
                                required
                            />

                        </Form.Group>
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
                                defaultValue={postView.attributes.content}
                                required
                            />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Save
                        </Button>
                        <Button variant="primary" onClick={Cancel}>
                            Cancel
                        </Button>
                    </Form>
                </RapperEditPostComponent>
            </div>
        </div>

    )
}

const mapStataToProps = state => ({
    PostUpdated: state.posts.singlePost,
    postLoading: state.posts.flag,
    postView: state.posts.singlePost,
})
const mapDispatchToProps = dispatch => ({
    UpdateSinglePost: (id, headers, data) => dispatch(UpdateSinglePost(id, headers, data)),
    Get_Single_post: (id) => dispatch(Get_Single_post(id))
})
export default connect(mapStataToProps, mapDispatchToProps)(EditPost);