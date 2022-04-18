import {UserType} from "./user-type";

const INITIAL_STATE = {

    loading: false,
    error: null,
    currentUser: {
        createdAt: "",
        displayName: '',
        email: '',
        id: '',
    },
    strapiUser: {
        blocked: null,
        confirmed: null,
        createdAt: "",
        email: "",
        id: null,
        provider: "",
        updatedAt: "",
        username: "",
    }
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };

        case UserType.LOGIN_START:
            return {
                ...state,
                loading: true,
            }
        case UserType.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                strapiUser: action.payload,
            }
        case UserType.LOGIN_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
};

export default userReducer;