import {PostType} from "./post-type";
import axios from "axios";
import {toast} from 'react-toastify';

let url = `https://jsonplaceholder.typicode.com/posts`;
let urlCreated = `https://jsonplaceholder.typicode.com/posts`;
let urlUpdated = `https://jsonplaceholder.typicode.com/posts/1`;
let urlPatch = `https://jsonplaceholder.typicode.com/posts/1`;
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


const Edit_Post_Start = () => ({
    type: PostType.EDIT_POST_START
})

const Edit_Post_Success = () => ({
    type: PostType.EDIT_POST_SUCCESS,
})

const Edit_Post_Error = (error) => ({
    type: PostType.EDIT_POST_ERROR,
    payload: error
})

export const UpdateSinglePost = (data, headers) => {
    return dispatch => {
        dispatch(Edit_Post_Start)
        axios
            .put(urlUpdated, data, {
                headers: headers
            })
            .then((res) => {
                if (res.status === 200) {
                    dispatch(Edit_Post_Success())
                    console.log(res, `response from Api`)
                }
            })
            .catch(error => {
                dispatch(Edit_Post_Error(error))
                console.log(error, `error`)
            })
    }
}