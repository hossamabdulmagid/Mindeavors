import {UserType} from "./user-type";
import axios from 'axios';

let urlRegister = ` http://localhost:1337/api/auth/local/register`;

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


export const Do_login = (userCred, toast) => {
    return dispatch => {
        dispatch(Login_Start())
        axios
            .post('http://localhost:1337/api/auth/local', userCred)
            .then((response) => {
                console.log('User profile', response.data.user);
                dispatch(Login_Success(response.data))
                console.log('User token', response.data.jwt);
                dispatch(toast.success(`welcome ${response.data.user.username}`))
            })
            .catch((error) => {
                if (
                    error &&
                    error.response &&
                    error.response.data &&
                    error.response.data.error &&
                    error.response.data.error.name
                ) {
                    dispatch(Login_Error(error.response.data.error.name))
                    toast.error(`${error.response.data.error.name}`, {
                        theme: "colored"
                    })
                    console.log('An error occurred:', error.response.data.error.name);
                }
            });
    }
}


export const DoLogout = () => ({
    type: UserType.USER_LOGOUT,
})


const Register_Start = () => ({
    type: UserType.REGISTER_START,

})
const Register_Success = (data) => ({
    type: UserType.REGISTER_SUCCESS,
    payload: data,

})

const Register_Error = (error) => ({
    type: UserType.REGISTER_ERROR,
    payload: error,
})

export const do_Register = (signUpCred, toast) => {
    return dispatch => {
        dispatch(Register_Start())
        axios.post(urlRegister, signUpCred)
            .then((res) => {
                console.log(res.data, `res.data`)
                toast.success(`welcome your Account Created ${res.data.user.username}`)
                dispatch(Register_Success(res.data))
            })
            .catch(error => {
                if (error &&
                    error.response &&
                    error.response.data &&
                    error.response.data.error &&
                    error.response.data.error.message) {
                    dispatch(Register_Error(error))
                    toast.error(` ${error.response.data.error.message}`, {
                        theme: "colored"
                    })
                    console.log(error, `error from Register User`)
                }
            })
    }
}