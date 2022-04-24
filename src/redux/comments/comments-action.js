import {CommentsType} from "./comments.type";
import axios from 'axios';

let url = `http://localhost:1337/api/comments`;

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

export const Do_Get_Comments = () => {
    return dispatch => {
        dispatch(Get_Comment_Start())
        axios
            .get(url)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(Get_Comment_Success(res.data))
                }
            })
            .catch((error) => {
                dispatch(Get_Comment_Error(error))
            })
    }
}
