import { fetch } from './csrf';
import imageReducer from './images';

const initialState = {photographers: []}
const GET_PHOTOGRAPHERS = 'photographers/getPhotographers'
const GET_TOP_PHOTOGRAPHERS = 'photographers/getTopPhotographers'
// const GET_PHOTO = 'photographers/getPhoto'
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

export const getTopPhotographers = (payload) => {
    return {
        type: GET_TOP_PHOTOGRAPHERS,
        payload       //: photographers
    }
}

// export const getAPhoto = (payload) => {
//     return {
//         type: GET_PHOTO,
//         payload       //: photographers
//     }
// }

export const getAll = () => async (dispatch) => {
    const res = await fetch('/api/photographer');

    if(res.ok){
        dispatch(getPhotographers(res.data.photographers))
    }
    
}

export const getBestPhotographers = () => async (dispatch) => {
    const res = await fetch('/api/photographer/best')

    if(res.ok) {
        dispatch(getTopPhotographers(res.data.photographers))
    }
}

// export const photographerWithImg = (state) => {
//     // return state.photographers.topPhotographers
//     state.photographers.topPhotographers.map((photographer) => {
//         state.images.images.find((image) => 
//             photographer['imageUrl'] = Number (photographer.id) === Number (image.photographerId) ? image.imageUrl : ''
//         )
//         return photographer
//     })
// }

export const checkState = (state) => state
// export const getPhoto = () => async (dispatch) => {
//     const res = await fetch('/api/photographer/photo')

//     if(res.ok){
//         dispatch(getAPhoto(res.data.photographers))
//     }
// } 

const photographerReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case GET_PHOTOGRAPHERS:
            newState = Object.assign({}, state);
            newState.photographers = action.payload;
            return newState;
        case GET_TOP_PHOTOGRAPHERS:
            newState = Object.assign({}, state);
            newState.topPhotographers = action.payload;
            return newState;
        // case GET_PHOTO:
        //     newState = Object.assign({}, state);
        //     newState.topRatedPic = action.payload
        //     return newState
        default:
            return state;
    }
}

export default photographerReducer;