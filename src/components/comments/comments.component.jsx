import {useState} from "react";
import DeleteComment from "./delete-comment.component";
import AddComment from "./add-comment.component";
import EditComment from "./edit-comment.component";
import {EditIcon, RapperCommentsComponent, TrashIcon} from "./comments.styles";

const Comments = ({comments = [], loadingComment, postId, singlePost}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);


    const [showEditComment, setShowEditComment] = useState(false);

    const handleCloseEditComment = () => setShowEditComment(false);

    const handleShowEditComment = () => setShowEditComment(true);


    const [data, setData] = useState({});

    const getSelection = async (newItem) => {
        await setData({...newItem})
        // console.log(newItem, `newItem`);
        // console.log(data, `data while Selection`)
        handleShow();
    }


    const [path, setPath] = useState({});

    const GetEditCommentSelected = async (selection) => {
        await setPath({...selection})
        console.log(path, `path`);
        handleShowEditComment();
    }

    return (
        <>
            <div className={"container"}>
                <AddComment
                    postId={postId}
                    singlePost={singlePost}

                />


                {comments.length === 0 && !loadingComment ?
                    (<div className={'container'}>
                        <h2>No post found matching your filter</h2>
                    </div>)
                    : null}
                <RapperCommentsComponent>

                    {comments && comments.map((singleComment, idx) => {
                        return (
                            <div className={'container text-center'} key={idx}>
                                <div className={"row"}>


                                    <div className={'col-sm-8'}>
                                        <p className={'comment-content'}>
                                            <small>
                                                {singleComment && singleComment.attributes.content}
                                            </small>
                                        </p>
                                    </div>
                                    <div className={'col-sm-4'} style={{marginTop: '30px', textAlign: 'center'}}>
                                        <>
                                            <button
                                                className={`btn btn-success`}
                                                onClick={() => GetEditCommentSelected(singleComment)}>
                                                <EditIcon/>
                                            </button>

                                            <button
                                                className={`btn btn-danger`}
                                                onClick={() => getSelection(singleComment)}
                                            >
                                                <TrashIcon/>
                                            </button>
                                        </>
                                    </div>
                                </div>
                                <p className={'space'}>
                                </p>
                            </div>
                        )
                    })}
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