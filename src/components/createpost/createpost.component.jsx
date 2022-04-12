import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {useState} from "react";
import {Do_createPost} from "../../redux/posts/post-action";
import {connect} from 'react-redux'

const CreatePost = ({Do_createPost}) => {

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
    }
    return (

        <div className={'container'}>
            <div className={'row'}>
                <Form onSubmit={handleSubmit}>
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
                </Form>
            </div>
        </div>

    )

}

const mapDispatchToProps = dispatch => ({
    Do_createPost: (post, headers) => dispatch(Do_createPost(post, headers))
})
export default connect(null, mapDispatchToProps)(CreatePost);