import Form from "react-bootstrap/Form";
import {useEffect, useState} from "react";
import {Do_createPost} from "../../redux/posts/post-action";
import {connect} from 'react-redux'
import {toast} from "react-toastify";
import {Button} from 'react-bootstrap'
import {RapperHeaderComponent} from '../../page/homepage/homepage.styles'
import Card from "react-bootstrap/Card";

const CreatePost = ({Do_createPost, newPostData}) => {

    const [post, setPost] = useState({
        title: '',
        body: '',
        userId: 1,
    })

    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    };


    const handleChange = event => {
        const {name, value} = event.target;
        setPost({...post, [name]: value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        Do_createPost(post, headers)
        toast.success(`Post Created Successful`)
    }
    useEffect(() => {

    }, [newPostData.status])

    return (

        <div className={'container'}>
            <div className={'row'}>
                {newPostData.status === 201 ?
                    <div className={"container"}>
                        <RapperHeaderComponent className={'col-sm-12'}>
                            <Card>
                                <Card.Header as="h3">{newPostData.data.title}</Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                        <small>{newPostData.data.body}</small>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </RapperHeaderComponent>
                    </div>
                    : <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                onChange={handleChange}
                                name={"title"}
                                required
                            />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control
                                type="text"
                                placeholder="Enter Body"
                                onChange={handleChange}
                                name={"body"}
                                required
                            />
                        </Form.Group>
                        <Button variant="success" type="submit" style={{margin: '2px'}}>
                            Create
                        </Button>
                    </Form>}
            </div>
        </div>

    )

}

const mapStateToProps = state => ({
    newPostData: state.posts.data
})

const mapDispatchToProps = dispatch => ({
    Do_createPost: (post, headers) => dispatch(Do_createPost(post, headers))
})
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);