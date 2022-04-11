import {PostType} from "./post-type";
import axios from "axios";
import {toast} from 'react-toastify';

let url2 = `https://reqres.in/api/users?page=2`;
let url = `https://jsonplaceholder.typicode.com/posts`;
const Post_Start = () => ({
    type: PostType.GET_POST_START,
})

const Post_Success = (data) => ({
    type: PostType.GET_POST_SUCCESS,
    payload: data,
})

const Post_Error = (error) => ({
    type: PostType.GET_POST_ERROR,
    payload: error,
})


export const Do_get_posts = () => {
    let hasError = false;
    return dispatch => {
        dispatch(Post_Start())
        axios
            .get(url)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(Post_Success(res.data))
                }

            })
            .catch((error) => {
                dispatch(Post_Error(error))

                dispatch(toast.error(error.toString()))


            })
    }
}