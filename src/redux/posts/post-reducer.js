import {PostType} from "./post-type";

const INITIAL_STATE = {
    loading: false,
    error: null,
    singlePost: {
        userId: null,
        id: null,
        title: "",
        body: ""
    },
    allPosts: [{
        userId: null,
        id: null,
        title: "",
        body: ""
    }],
    data: {}

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
                allPosts: action.payload
            }

        case PostType.GET_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        case PostType.EDIT_POST_START:
            return {
                ...state,
                loading: true,
            }
        case PostType.EDIT_POST_SUCCESS:
            return {
                ...state,
                loading: false,
            }

        case PostType.EDIT_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }


        case PostType.SINGLE_POST_START:
            return {
                ...state,
                loading: true,
            }

        case PostType.SINGLE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                singlePost: action.payload,
            }


        case PostType.SINGLE_POST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case PostType.DELETE_POST_START:
            return {
                ...state,
                loading: true,
            }

        case PostType.DELETE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case PostType.DELETE_POST_ERROR:
            return {
                ...state,
                error: action.payload,
            }


        case PostType.CREATE_POST_START:
            return {
                ...state,
                loading: true,
            }
        case PostType.CREATE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,

            }

        case PostType.CREATE_POST_ERROR:
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
