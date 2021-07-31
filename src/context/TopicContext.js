import createDataContext from "./createDataContext";
import api from '../api/api';

const topicReducer = (state, action) => {
    switch(action.type) {
        case 'get_saved':
            return action.payload;
        default:
            return state;
    }
}


const addTopic = dispatch => async({title, image_url, info}) => {
    try {
        await api.post('/topic', {title, image_url, info});
    }
    catch(err) {
        console.log('Existing Topic');
    }
}

const removeTopic = dispatch => async({_id}) => {
    try {
        await api.delete(`/topic/${_id}`);
    }
    catch(err) {
        console.log(err.message);
    }
}

const showSavedTopic = dispatch => async() => {
    const response = await api.get('/topic');
    dispatch({
        type: 'get_saved',
        payload: response.data
    })
}




export const { Provider, Context } = createDataContext(
    topicReducer,
    {
        addTopic,
        removeTopic,
        showSavedTopic
    },
    []
);
