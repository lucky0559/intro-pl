import createDataContext from "./createDataContext";
import api from '../api/api';
import AsyncStorage from "@react-native-async-storage/async-storage";

const authReducer = (state, action) => {
    switch(action.type) {
        case 'set_token':
            return { errorMessage: '', token: action.payload }
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'clear_error':
            return { ...state, errorMessage: '' }
        default:
            return state;
    }
};

const signUp = dispatch => async({name, email, password}) => {
    try {
        const response = await api.post('/signup',{ name, email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({
            type: 'set_token',
            payload: response.data.token
        });
    }
    catch(err) {
        dispatch({
            type:'add_error',
            payload: 'Something went wrong in sign up'
        })
    }
}

const signIn = dispatch => async({email, password}) => {
    try {
        const response = await api.post('/signin',{ email, password });
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({
            type: 'set_token',
            payload: response.data.token
        })
    }
    catch(err) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong in sign in'
        })
    }
}

const signOut = dispatch => () => {

}

const clearErrorMessage = dispatch => () => {
    dispatch({
        type: 'clear_error'
    })
}

const localSignIn = dispatch => async() => {
    const token = await AsyncStorage.getItem('token');

    if(token) {
        dispatch({
            type: 'set_token',
            payload: token
        })
    }
}


export const { Provider, Context } = createDataContext(
    authReducer,
    {
        signUp,
        signIn,
        signOut,
        clearErrorMessage,
        localSignIn
    },
    { token: null, errorMessage: '' }
);