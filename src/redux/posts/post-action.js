import {PostType} from "./post-type";
import axios from "axios";
import {toast} from 'react-toastify';

let url = `http://localhost:1337/api/posts/`;

let urlCreated = `http://localhost:1337/api/posts`;

let urlUpdated = `http://localhost:1337/api/posts/`;

let urlDelete = `http://localhost:1337/api/posts/`;

let urlSinglePost = `http://localhost:1337/api/posts/`;


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
                console.log(res, `response l ll`)
                if (res.status === 200) {
                    dispatch(Post_Success(res.data.data))
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

const Edit_Post_Success = (data) => ({
    type: PostType.EDIT_POST_SUCCESS,
    payload: data,
})

const Edit_Post_Error = (error) => ({
    type: PostType.EDIT_POST_ERROR,
    payload: error
})

export const UpdateSinglePost = (id, headers, data) => {
    return dispatch => {
        dispatch(Edit_Post_Start)
        axios
            .put(`${urlUpdated}${id}`,
                {
                    data: data
                },
                {
                    headers: headers
                })
            .then((res) => {
                if (res.status === 200) {
                    dispatch(Edit_Post_Success(res.data))

                    dispatch(Get_Single_post(id))
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
                dispatch(Single_Post_Success(res.data.data))
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

export const Do_Delete_Post = (id, headers) => {
    console.log(`${id} got Called`)
    return dispatch => {
        dispatch(Delete_Post_Start())
        axios
            .delete(`${urlDelete}${id}`,
                {
                    headers: headers
                })
            .then((res) => {
                if (res.status === 200) {
                    dispatch(Delete_Post_Success())
                    dispatch(Do_get_posts())
                    console.log(res, `response From api`)
                }
            })
            .catch(error => {
                dispatch(Delete_Post_Error(error))
            })
    }
}


const Create_Post_Start = () => ({
    type: PostType.CREATE_POST_START,
})

const Create_Post_Success = (data) => ({
    type: PostType.CREATE_POST_SUCCESS,
    payload: data,
})
const Create_Post_Error = (error) => ({
    type: PostType.CREATE_POST_ERROR,
    payload: error
})


export const Do_createPost = (data, headers) => {
    return dispatch => {
        dispatch(Create_Post_Start())
        axios
            .post(`${urlCreated}`,
                {
                    data: data
                },
                {
                    headers: headers
                })
            .then((res) => {
                if (res.status === 200) {
                    console.log(res, `response from Api`)
                    dispatch(Create_Post_Success(res))
                }
            })
            .catch(error => {
                dispatch(Create_Post_Error(error))
                console.log(error)
            })

    }
}


