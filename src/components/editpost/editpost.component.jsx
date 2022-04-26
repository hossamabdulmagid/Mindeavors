import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Get_Single_post, UpdateSinglePost} from "../../redux/posts/post-action";
import {connect} from "react-redux";
import {useLocation, useNavigate} from 'react-router-dom';
import {RapperEditPostComponent} from "./editpost.styles";

const initialValues = {
    title: '', content: ''
}
const EditPost = ({UpdateSinglePost, PostUpdated, postLoading, postView, token, singlePost}) => {

    const location = useLocation();

    const navigate = useNavigate();

    const [data, setData] = useState(initialValues)

    const handleChange = event => {
        const {name, value} = event.target;
        setData({...data, [name]: value});
        console.log(data)
    };

    let id = location.pathname.slice(11);

    const headers = {
        "Authorization": `Bearer ${token.jwt}`
    }

    const handleSubmit = event => {
        event.preventDefault()
        UpdateSinglePost(id, headers, data)
        navigate(`/posts/${id}`)
    }

    const Cancel = () => {
        navigate(`/posts/${id}`)
    }

    useEffect(() => {
        Get_Single_post(id);
        setData(postView)
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
                                value={data.title}
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
                                value={data.content}
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
    postView: state.posts.singlePost.attributes,
    token: state.user.strapiUser,
})
const mapDispatchToProps = dispatch => ({
    UpdateSinglePost: (id, headers, data) => dispatch(UpdateSinglePost(id, headers, data)),
    Get_Single_post: (id) => dispatch(Get_Single_post(id))
})
export default connect(mapStataToProps, mapDispatchToProps)(EditPost);