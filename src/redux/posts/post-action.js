import {PostType} from "./post-type";
import axios from "axios";

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
            .then((res, error) => {
                if (error) {
                    hasError = true;
                    dispatch(Post_Error(error))
                }
                dispatch(Post_Success(res.data))
            })
            .catch((error) => {
                if (hasError) {
                    dispatch(Post_Error(error))
                }
            })
    }
}