import {useState} from "react";
import DeleteComment from "./delete-comment.component";
import AddComment from "./add-comment.component";
import EditComment from "./edit-comment.component";
import {RapperCommentsComponent} from "./comments.styles";
import Moment from "react-moment";
import {IconClock} from "../postlist/postlist.styles";
import Role from "./roles.component";

const Comments = ({comments = [], loadingComment, postId, singlePost, token}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const [showEditComment, setShowEditComment] = useState(false);

    const handleCloseEditComment = () => setShowEditComment(false);

    const handleShowEditComment = () => setShowEditComment(true);

    const [data, setData] = useState({});

    const getSelection = async (newItem) => {
        await setData({...newItem})
        handleShow();
    }

    const [path, setPath] = useState({});

    const GetEditCommentSelected = async (selection) => {
        await setPath({...selection})
        handleShowEditComment();
    }


    return (
        <>
            <div className={"container"}>
                {comments.length === 0 && !loadingComment ?
                    (<div className={'container'}>
                        <h2>No comment found on this post</h2>
                    </div>)
                    : null}

                <RapperCommentsComponent>
                    {comments && comments.map((singleComment, idx) => {
                        return (
                            <div className={'container text-center'} key={idx}>
                                <div className={"row"}>
                                    <div className={'col-sm-12'}>
                                        <p className={'comment-content'}>
                                            <small>
                                                {singleComment && singleComment.attributes.content}
                                            </small>
                                        </p>
                                    </div>
                                    <div className={'col-sm-12 card-footer'}>
                                        <IconClock/>
                                        <small className={'time'}>
                                            <Moment
                                                format="MMMM Do YYYY, h:mm a">
                                                {singleComment && singleComment.attributes && singleComment.attributes.createdAt}
                                            </Moment>
                                        </small>

                                        <div className={`pull-right`}>
                                            {token && token.jwt ? (
                                                <>
                                                    <div>
                                                        {/*{token.user.id.toString() === singleComment.attributes.author ||*/}
                                                        {/*token.user.id.toString() === (singlePost && singlePost.attributes && singlePost.attributes.author) ?*/}
                                                        {/*    <>*/}
                                                        {/*        <EditIcon*/}
                                                        {/*            onClick={() => GetEditCommentSelected(singleComment)}/>*/}
                                                        {/*        <TrashIcon*/}
                                                        {/*            onClick={() => getSelection(singleComment)}/>*/}
                                                        {/*    </>*/}
                                                        {/*    :*/}
                                                        {/*    <small>not owner</small>*/}
                                                        {/*}*/}
                                                        <Role
                                                            token={token.user.id.toString()}
                                                            singleComment={singleComment.attributes.author}
                                                            singlePost={singlePost && singlePost.attributes && singlePost.attributes.author}
                                                            getSelection={() => getSelection(singleComment)}
                                                            GetEditCommentSelected={() => GetEditCommentSelected(singleComment)}
                                                        />
                                                    </div>
                                                </>
                                            ) : null}


                                        </div>
                                    </div>
                                </div>
                                <p className={'space'}>
                                </p>
                            </div>
                        )
                    })}
                    <div>
                        {token && token.jwt ?
                            <AddComment
                                postId={postId}
                                singlePost={singlePost}
                            />
                            : null}
                    </div>
                </RapperCommentsComponent>
            </div>

            <DeleteComment
                show={show}
                handleClose={() => handleClose()}
                handleShow={() => handleShow()}
                data={data}
                postId={postId}
            />

            <EditComment
                show={showEditComment}
                handleClose={() => handleCloseEditComment()}
                handleShow={() => handleShowEditComment()}
                path={path}
                postId={postId}
            />
        </>
    )
}


export default Comments