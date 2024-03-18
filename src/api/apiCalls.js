import axios from "axios";

export const signUpUser = body => {
    return axios.post("/api/v1/User", body);
}

export const loginUser = creds => {
    const { email, password } = creds;
    return axios.get(`/api/v1/User/Login?email=${email}&password=${password}`);
}

export const getUser = (creds) => {
    return axios.get("/api/v1/User", {}, {auth : creds});
}

export const setAuthorizationHeader = (userData) => {
    if(userData.isLoggedIn) {
        const { email, password } = userData;
        const userInfo = email + ":" + password;
        const convertBasic = btoa(userInfo);
        const authorizationHeaderValue = "Basic " + convertBasic;
        axios.defaults.headers['Authorization'] = authorizationHeaderValue;
    }
    else {
        delete axios.defaults.headers['Authorization'];
    }
};