import Form from "react-bootstrap/Form";
import {Button} from "react-bootstrap";
import {useState} from "react";
import {UpdateSinglePost} from "../../redux/posts/post-action";
import {connect} from "react-redux";
import {toast} from 'react-toastify';
import {useLocation, useNavigate} from 'react-router-dom';

const EditPost = ({UpdateSinglePost}) => {
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location.pathname, `location.path`);
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
        console.log(event.target.value, `eventTargetval While Typing`)
        const {name, value} = event.target;
        setPost({...post, [name]: value})

    }


    const handleSubmit = event => {
        event.preventDefault()
        UpdateSinglePost(post, headers, toast)
        navigate('/')
    }

    const Cancel = () => {
        let result = location.pathname.slice(11);
        navigate(`/posts/${result}`)
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
                        Save
                    </Button>
                    <Button variant="primary" style={{margin: '2px'}} onClick={Cancel}>
                        Cancel
                    </Button>
                </Form>
            </div>
        </div>

    )
}


const mapDispatchToProps = dispatch => ({
    UpdateSinglePost: (data, headers, toast) => dispatch(UpdateSinglePost(data, headers, toast))
})
export default connect(null, mapDispatchToProps)(EditPost);