import {CommentsType} from "./comments.type";
import axios from 'axios';

let url = `https://reqres.in/api/users?page=2`;

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
                dispatch(Get_Comment_Success(res.data))
                console.log(res)
            })
            .catch((error) => {
                dispatch(Get_Comment_Error(error))
            })
    }
}
