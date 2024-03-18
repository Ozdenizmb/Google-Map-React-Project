//import { signUpUser, loginUser } from "../api/apiCalls";

export const logoutSuccess = () => {
    return {
        type : 'logout-success'
    };
}

export const loginSuccess = (loginData) => {
    return {
        type : 'login-success',
        data : loginData

    }
}

export const updateSuccess = ({ name, surname, logoPath }) => {
    return {
        type : 'update-success',
        data : {
            name,
            surname,
            logoPath
        }
    }
}

export const loginUserHandler = (creds) => {
    return async function(dispatch) {
        console.log(creds);
        const response = null;//
        //const response = await loginUser(creds);

        const loginState = {
            email : creds.email,
            name : response.data.name,
            surname : response.data.surname,
            password : creds.password,
            logoPath : response.data.logoPath
        }
                
        dispatch(loginSuccess(loginState));

        return response;
    }
}

export const signUpUserHandler = (user) => {
    return async function(dispatch) {
        const response = null;//
        //const response = await signUpUser(user);
        //await dispatch(loginUserHandler(user));
        console.log(response);
        return response
    }
}