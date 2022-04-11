import {UserType} from "./user-type";

const setCurrentUser = (user) => {
    return {
        type: UserType.SET_CURRENT_USER,
        payload: user,
    };
};

export default setCurrentUser;