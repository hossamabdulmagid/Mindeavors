import {useEffect, useState} from 'react';

import {Get_Single_post} from '../../redux/posts/post-action';

import {Link, useLocation, useNavigate} from 'react-router-dom';

import {connect} from "react-redux";
import {RapperHeaderComponent} from "../../page/homepage/homepage.styles";
import Card from "react-bootstrap/Card";
import {Button, Spinner} from "react-bootstrap";
import DeletePost from "../deletepost/deletepost.component";
import {Do_Get_Comments} from "../../redux/comments/comments-action";

const SinglePost = ({
                        Get_Single_post,
                        singlePost,
                        singlePostLoading,
                        Do_Get_Comments,
                        comments = [],
                        currentUser,
                        JWT
                    }) => {

    const location = useLocation();

    const navigate = useNavigate();

    let id = location.pathname.slice(7);

    useEffect(() => {
        Get_Single_post(id);

        Do_Get_Comments()

    }, [Get_Single_post, id, Do_Get_Comments]);


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    window.scrollTo(0, 0);

    const goToSignInPage = () => {
        navigate('/signin')
    }


    return (
        <>
            {!singlePostLoading ?
                <div className={"container"}>
                    <RapperHeaderComponent className={'col-sm-10'}>
                        <Card>
                            <Card.Header
                                as="h4">{singlePost && singlePost.attributes && singlePost.attributes.title}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <small>{singlePost && singlePost.attributes && singlePost.attributes.content}</small>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                {JWT ?
                                    <>
                                        <Link className={`btn btn-success`}
                                              to={`/edit-post/${singlePost.id}`}>Edit</Link>
                                        <Button
                                            className={`btn btn-danger`}
                                            onClick={handleShow}
                                        >
                                            Delete
                                        </Button>
                                    </> : <Button onClick={goToSignInPage} variant="warning" size={'sm'}>
                                        log in to edit or delete post
                                    </Button>
                                }
                            </Card.Footer>
                            <div className={"container"}>
                                {comments && comments.data && comments.data.map((singleComment, idx) => {
                                    return (
                                        <div className={'container'} key={idx}>
                                            <div className={"row"}>
                                                <div className={'col-sm-4'}>
                                                    <img
                                                        src={singleComment.avatar}
                                                        alt={"Image Loaded"}
                                                        className={"avatar"}
                                                    />
                                                    <small>
                                                        {singleComment && singleComment.first_name}
                                                        {" "}
                                                        {singleComment && singleComment.last_name}
                                                    </small>
                                                </div>
                                                <div className={'col-sm-8'}>
                                                    <p className={'comment-content'}>
                                                        <small>
                                                            {singleComment && singleComment.first_name}
                                                            {" "}
                                                            {singleComment && singleComment.email}
                                                            {" "}
                                                            {singleComment && singleComment.last_name}
                                                        </small>
                                                    </p>
                                                </div>
                                            </div>
                                            <p className={'space'}></p>
                                        </div>
                                    )
                                })}

                            </div>
                        </Card>
                    </RapperHeaderComponent>
                </div> : <Spinner animation={"border"}/>
            }
            <DeletePost
                show={show}
                handleClose={() => handleClose()}
                singlePost={singlePost}
            />
        </>
    )
}

const mapStateToProps = state => ({
    singlePost: state.posts.singlePost,
    singlePostLoading: state.posts.loading,
    comments: state.comments.comments,
    currentUser: state.user.currentUser,
    JWT: state.user.strapiUser,

})
const mapDispatchToProps = dispatch => ({
    Get_Single_post: (id) => dispatch(Get_Single_post(id)),
    Do_Get_Comments: () => dispatch(Do_Get_Comments())

})
export default connect(mapStateToProps, mapDispatchToProps)(SinglePost);