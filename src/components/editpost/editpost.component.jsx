import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import {Get_Single_post, UpdateSinglePost} from "../../redux/posts/post-action";
import {connect} from "react-redux";
import {toast} from 'react-toastify';
import {useLocation, useNavigate} from 'react-router-dom';
import {RapperHeaderComponent} from "../../page/homepage/homepage.styles";
import Card from "react-bootstrap/Card";

const EditPost = ({UpdateSinglePost, PostUpdated, postLoading, postView}) => {

    const location = useLocation();

    const navigate = useNavigate();

    const [post, setPost] = useState({
        title: 'foo',
        body: 'bar',
        userId: 1,
    })

    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost({...post, [name]: value})

    }

    const handleSubmit = event => {
        event.preventDefault()
        UpdateSinglePost(post, headers)
        toast.success(`Post Updated Successful`)
        // navigate('/')
    }
    let result = location.pathname.slice(11);

    const Cancel = () => {
        navigate(`/posts/${result}`)
    }
    useEffect(() => {
        Get_Single_post(result);
        return () => {
            setPost(postView)
        }
    }, [Get_Single_post, result, postLoading])
    return (
        <div className={'container'}>
            <div className={'row'}>
                {postLoading ? <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                            type="text"
                            placeholder="Enter title"
                            onChange={handleChange}
                            name={"title"}
                            value={post.title || ""}
                            required
                        />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control
                            type="text"
                            placeholder="Enter Body"
                            onChange={handleChange}
                            name={"body"}
                            value={post.body || ""}

                            required
                        />
                    </Form.Group>
                    <Button variant="success" type="submit" style={{margin: '2px'}}>
                        Save
                    </Button>
                    <Button variant="primary" style={{margin: '2px'}} onClick={Cancel}>
                        Cancel
                    </Button>
                </Form> : <div className={"container"}>
                    <RapperHeaderComponent className={'col-sm-12'}>
                        <Card>
                            <Card.Header as="h3">{PostUpdated.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <small>{PostUpdated.body}</small>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </RapperHeaderComponent>
                </div>}
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
    UpdateSinglePost: (post, headers) => dispatch(UpdateSinglePost(post, headers)),
    Get_Single_post: (result) => dispatch(Get_Single_post(result))
})
export default connect(mapStataToProps, mapDispatchToProps)(EditPost);