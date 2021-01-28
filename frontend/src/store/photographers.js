import { fetch } from './csrf';

const initialState = {photographers: []}
const GET_PHOTOGRAPHERS = 'photographers/getPhotographers'

// const photographers = [
//     {
//         id: 1,
//         name: 'JD',
//         address1: 'Chicago',
//         photoType: 'portrait',
//     }, 
//     {
//         id: 2,
//         name: 'Christion',
//         address1: 'New York',
//         photoType: 'wedding'
//     }
// ]

export const getPhotographers = (payload) => {
    return { 
        type: GET_PHOTOGRAPHERS,
        payload       //: photographers
     }
    
}

export const getAll = () => async (dispatch) => {
    const res = await fetch('/api/photographer');

    if(res.ok){
        dispatch(getPhotographers(res.data.photographers))
    }
    
}

const photographerReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case GET_PHOTOGRAPHERS:
            newState = Object.assign({}, state);
            newState.photographers = action.payload;
            return newState;
        default:
            return state;
    }
}

export default photographerReducer;