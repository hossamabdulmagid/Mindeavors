import {PostType} from "./post-type";
import axios from "axios";
import {toast} from 'react-toastify';

let url = `https://jsonplaceholder.typicode.com/posts`;

let urlCreated = `https://jsonplaceholder.typicode.com/posts`;

let urlUpdated = `https://jsonplaceholder.typicode.com/posts/1`;

let urlDelete = `https://jsonplaceholder.typicode.com/posts/`;

let urlSinglePost = `https://jsonplaceholder.typicode.com`;


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
            })
    }
}


const Single_Post_Start = () => ({
    type: PostType.SINGLE_POST_START
})

const Single_Post_Success = (data) => ({
    type: PostType.SINGLE_POST_SUCCESS,
    payload: data

})

const Single_Post_Error = (error) => ({
    type: PostType.SINGLE_POST_ERROR,
    payload: error
})

export const Get_Single_post = (id) => {
    return dispatch => {
        dispatch(Single_Post_Start)
        axios.get(`${urlSinglePost}${id}`)
            .then((res) => {
                dispatch(Single_Post_Success(res.data))
                console.log(res, `response from Single`)
            })
            .catch(error => {
                dispatch(Single_Post_Error(error))
                console.log(error)
            })
    }
}

const Delete_Post_Start = () => ({
    type: PostType.DELETE_POST_START,
})

const Delete_Post_Success = () => ({
    type: PostType.DELETE_POST_SUCCESS,
})

const Delete_Post_Error = (error) => ({
    type: PostType.DELETE_POST_ERROR,
    payload: error
})

export const Do_Delete_Post = (id) => {
    console.log(`${id} got Called`)
    return dispatch => {
        dispatch(Delete_Post_Start())
        axios
            .delete(`${urlDelete}/${id}`)
            .then((res) => {
                if (res.status === 200) {
                    dispatch(Delete_Post_Success())
                    console.log(res, `response From api`)
                }
            })
            .catch(error => {
                dispatch(Delete_Post_Error(error))
            })
    }
}

