import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import authReducer from './authReducer';
import SecureLS from 'secure-ls';
import { setAuthorizationHeader } from '../api/apiCalls';

const secureLs = new SecureLS();

const configureStore = () => {

    const hoaxProfile = secureLs.get('hoax-profile');

    let stateInLocaleStorage = {
        isLoggedIn : false,
        email : undefined,
        name : undefined,
        surname : undefined,
        logoPath : undefined,
        password : undefined
    }

    if(hoaxProfile) {
        stateInLocaleStorage = hoaxProfile;
    }

    const initialState = stateInLocaleStorage;
    setAuthorizationHeader(initialState);
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;//
    
    //const store = createStore(authReducer, initialState, applyMiddleware(thunk));
    const store = createStore(authReducer, initialState, composeEnhancers(applyMiddleware(thunk)));//

    store.subscribe(() => {
        secureLs.set('hoax-profile', store.getState());
        setAuthorizationHeader(store.getState());
    });

    return store;
}

export default configureStore;