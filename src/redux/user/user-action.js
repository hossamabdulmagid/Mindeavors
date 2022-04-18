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
const Register_Success = () => ({
    type: UserType.REGISTER_SUCCESS,

})

const Register_Error = (error) => ({
    type: UserType.REGISTER_ERROR,
    payload: error,
})

export const do_Register = () => {
    return dispatch => {
        dispatch(Register_Start())
        axios.post(urlRegister, {
            "username": "medo",
            "email": "medohesham@gmail.com",
            "password": "password123"
        })
            .then((res) => {
                console.log(res)
                dispatch(Register_Success())
            })
            .catch(error => {
                dispatch(Register_Error(error))
                console.log(error, `error from Register User`)
            })
    }
}