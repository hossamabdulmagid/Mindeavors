import {CommentsType} from "./comments.type";
import axios from 'axios';

let url = `http://localhost:1337/api/comments`;

let urlForPostToGetComment = `http://localhost:1337/api/posts/30?populate=comments`;

const Get_Comment_Start = () => ({
    type: CommentsType.GET_COMMENTS_START,
})

const Get_Comment_Success = (data) => ({
    type: CommentsType.GET_COMMENTS_SUCCESS,
    payload: data
})

const Get_Comment_Error = (error) => ({
    type: CommentsType.GET_COMMENTS_ERROR,
    payload: error,
})

export const Do_Get_Comments = (id) => {
    return dispatch => {
        dispatch(Get_Comment_Start())
        axios
            .get(`http://localhost:1337/api/posts/${id}?populate=comments`)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(Get_Comment_Success(res.data.data.attributes.comments))
                }
            })
            .catch((error) => {
                dispatch(Get_Comment_Error(error))
            })
    }
}


const AddCommentStart = () => ({
    type: CommentsType.ADD_COMMENTS_START,
})

const AddCommentSuccess = () => ({
    type: CommentsType.ADD_COMMENTS_SUCCESS,
})

const AddCommentError = (error) => ({
    type: CommentsType.ADD_COMMENTS_ERROR,
    payload: error
})


export const DoAddComment = (singlePost, postId, data, headers) => {
    return dispatch => {
        dispatch(AddCommentStart())
        axios.post(url, {
                id: [postId],

                data: data
            },
            {
                headers: headers
            })
            .then(res => {
                if (res.status === 200) {
                    console.log(res, `response`)
                    dispatch(AddCommentSuccess(res.data))
                    dispatch(Do_Get_Comments(postId))
                }
            })
            .catch(error => {
                dispatch(AddCommentError(error))
            })

    }
}


const DeleteCommentStart = () => ({
    type: CommentsType.DELETE_COMMENT_START,
})
const DeleteCommentSuccess = () => ({
    type: CommentsType.DELETE_COMMENT_SUCCESS,
})
const DeleteCommentError = (error) => ({
    type: CommentsType.DELETE_COMMENT_ERROR,
    payload: error,
})

export const DoDeleteComment = (data, headers) => {

    return dispatch => {
        dispatch(DeleteCommentStart())
        axios.delete(`${url}/${data.id}`,
            {
                headers: headers
            })
            .then(res => {
                dispatch(DeleteCommentSuccess())
                dispatch(Do_Get_Comments())

            })
            .catch(err => {
                console.log(err)
                dispatch(DeleteCommentError(err))
            })
    }
}


const SingleCommentStart = () => ({
    type: CommentsType.GET_SINGLE_COMMENT_START,
})


const SingleCommentSuccess = (data) => ({
    type: CommentsType.GET_SINGLE_COMMENT_SUCCESS,
    payload: data
})

const SingleCommentError = (error) => ({
    type: CommentsType.GET_SINGLE_COMMENT_ERROR,
    payload: error
})


export const GetSingleComment = (id, headers) => {
    // as we know we path data to edit Comment as A Props  And dont want this function ☺ xD
    return dispatch => {
        dispatch(SingleCommentStart())
        axios
            .get(`${url}/${id}`, {
                headers: headers
            })
            .then(res => {
                console.log(res, `response`)
                if (res.status === 200) {
                    dispatch(SingleCommentSuccess(res.data))
                }
            })
            .catch(err => {
                dispatch(SingleCommentError(err))
            })
    }
}


const UpdateCommentStart = () => ({
    type: CommentsType.UPDATE_COMMENT_START,
})

const UpdatedCommentSuccess = () => ({
    type: CommentsType.UPDATE_COMMENT_SUCCESS,
})

const UpdatedCommentError = (error) => ({
    type: CommentsType.UPDATE_COMMENT_ERROR,
    payload: error
})


export const DoUpdateComment = (postId, id, content, headers) => {
    console.log(id, `from edit comment iD`)
    console.log(postId, `from edit comment postId`)
    return dispatch => {
        dispatch(UpdateCommentStart())
        axios
            .put(`${url}/${id}`, {
                    data: content
                },
                {
                    headers: headers
                })
            .then(res => {
                dispatch(UpdatedCommentSuccess())
                dispatch(Do_Get_Comments(postId))


            })
            .catch(err => {
                dispatch(UpdatedCommentError(err))
            })
    }
}


