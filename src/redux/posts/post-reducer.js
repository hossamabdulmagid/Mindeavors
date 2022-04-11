import {PostType} from "./post-type";

const INITIAL_STATE = {
    loading: false,
    error: null,
    posts: [{
        userId: null,
        id: null,
        title: "",
        body: ""
    }],
};

const postReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PostType.GET_POST_START:
            return {
                ...state,
                loading: true,
            }
        case PostType.GET_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload
            }

        case PostType.GET_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default postReducer;
