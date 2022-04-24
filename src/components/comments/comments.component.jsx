import {useState} from "react";
import DeleteComment from "./delete-comment.component";
import AddComment from "./add-comment.component";
import {Link} from 'react-router-dom';

const Comments = ({comments}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);


    const [data, setData] = useState({});

    const getSelection = async (newItem) => {
        await setData({...newItem})
        // console.log(newItem, `newItem`);
        // console.log(data, `data while Selection`)
        handleShow();
    }
    return (
        <>
            <div className={"container"}>
                <AddComment/>
                {comments && comments.data && comments.data.map((singleComment, idx) => {
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
                                        <Link className={`btn btn-success`}
                                              to={`/edit-comment/${singleComment.id}`}>
                                            Edit
                                        </Link>

                                        <button
                                            className={`btn btn-danger`}
                                            onClick={() => getSelection(singleComment)}
                                        >
                                            Delete
                                        </button>
                                    </>
                                </div>

                            </div>
                            <p className={'space'}>
                            </p>
                        </div>
                    )
                })}

            </div>
            <DeleteComment
                show={show}
                handleClose={() => handleClose()}
                handleShow={() => handleShow()}
                data={data}
            />
        </>
    )
}


export default Comments