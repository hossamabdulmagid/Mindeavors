import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react";
import {Do_createPost} from "../../redux/posts/post-action";
import {connect} from 'react-redux'
import {useNavigate} from "react-router-dom";
import {BUTTON, RapperCreatePostComponent} from './createpost.styles'

const CreatePost = ({Do_createPost, newPostData, token}) => {

    const navigate = useNavigate();

    let userId = token.user.id;

    const [data, setData] = useState({
        title: '',
        content: '',
        author: userId
    })

    const headers = {
        "Authorization": `Bearer ${token.jwt}`
    };

    const handleChange = event => {
        const {name, value} = event.target;
        setData({...data, [name]: value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        Do_createPost(data, headers)
        navigate('/')
    }

    useEffect(() => {

    }, [newPostData.status])

    return (
        <RapperCreatePostComponent className={'container'}>
            <div className={'row'}>
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
                            required
                        />
                    </Form.Group>
                    <BUTTON variant="success" type="submit">
                        Create
                    </BUTTON>
                </Form>
            </div>
        </RapperCreatePostComponent>
    )
}

const mapStateToProps = state => ({
    newPostData: state.posts.data,
    token: state.user.strapiUser,
})

const mapDispatchToProps = dispatch => ({
    Do_createPost: (data, headers) => dispatch(Do_createPost(data, headers)),
})
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);