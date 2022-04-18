import {UserType} from "./user-type";
import axios from 'axios';

export const setCurrentUser = (user) => {

    return {
        type: UserType.SET_CURRENT_USER,
        payload: user,
    };
};


const Login_Start = () => ({
    type: UserType.LOGIN_START,
})

const Login_Success = (data) => ({
    type: UserType.LOGIN_SUCCESS,
    payload: data,
})

const Login_Error = (error) => ({
    type: UserType.LOGIN_ERROR,
    payload: error,
})


export const Do_login = (userCred) => {
    return dispatch => {
        dispatch(Login_Start())
        axios
            .post('http://localhost:1337/api/auth/local', userCred)
            .then((response) => {
                console.log('User profile', response.data.user);
                dispatch(Login_Success(response.data))
                console.log('User token', response.data.jwt);
            })
            .catch((error) => {
                dispatch(Login_Error(error.response.data.error.name))
                console.log('An error occurred:', error.response.data.error.name);
            });
    }
}


export const DoLogout = () => ({
    type: UserType.USER_LOGOUT,
})