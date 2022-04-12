import {useEffect, useState} from 'react';

import {Get_Single_post} from '../../redux/posts/post-action';

import {Link, useLocation} from 'react-router-dom';

import {connect} from "react-redux";
import {RapperHeaderComponent} from "../../page/homepage/homepage.styles";
import Card from "react-bootstrap/Card";
import {Button, Spinner} from "react-bootstrap";

const SinglePost = ({Get_Single_post, singlePost, singlepostLoading}) => {


    const location = useLocation();

    const id = location.pathname;

    useEffect(() => {
        Get_Single_post(id);

    }, [Get_Single_post, id]);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            {!singlepostLoading ?
                <div className={"container"}>
                    <RapperHeaderComponent className={'col-sm-12'}>
                        <Card>
                            <Card.Header as="h4">{singlePost.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <small>{singlePost.body}</small>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                <Link className={`btn btn-success`} to={`/edit-post/${singlePost.id}`}>Edit</Link>
                                <Button className={`btn btn-danger`}>Delete</Button>
                            </Card.Footer>
                        </Card>
                    </RapperHeaderComponent>
                </div> : <Spinner animation={"border"}/>
            }
        </>

    )
}

const mapStateToProps = state => ({
    singlePost: state.posts.singlePost,
    singlepostLoading: state.posts.loading
})
const mapDispatchToProps = dispatch => ({
    Get_Single_post: (id) => dispatch(Get_Single_post(id)),
})
export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);