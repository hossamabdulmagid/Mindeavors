import {CommentsType} from './comments.type'

const INITIAL_STATE = {

    loading: false,
    error: null,
    comments: [{
        postId: null,
        id: null,
        name: "",
        email: "",
        body: ""
    }]
};

const commentsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CommentsType.GET_COMMENTS_START:
            return {
                ...state,
                loading: true,
            }


        case CommentsType.GET_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: action.payload,
            }
        case CommentsType.GET_COMMENTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};

export default commentsReducer;