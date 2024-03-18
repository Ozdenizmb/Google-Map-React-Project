const defaultState = {
    isLoggedIn : false,
    email : undefined,
    name : undefined,
    surname : undefined,
    logoPath : undefined,
    password : undefined
}

const authReducer = (state = {... defaultState}, action) => {
    if(action.type === 'logout-success') {
        return defaultState;
    }
    else if(action.type === 'login-success') {
        return {
            ... action.data,
            isLoggedIn : true
        };
    }
    else if(action.type === 'update-success') {
        return {
            ... state,
            name : action.data.name,
            surname : action.data.surname,
            logoPath : action.data.logoPath
        }
    }
    return state;
};

export default authReducer;