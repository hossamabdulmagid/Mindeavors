import {UserType} from "./user-type";

const INITIAL_STATE = {

    loading: false,
    error: null,
    currentUser: {
        createdAt: "",
        displayName: '',
        email: '',
        id: '',
    }
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };

        default:
            return state;
    }
};

export default userReducer;