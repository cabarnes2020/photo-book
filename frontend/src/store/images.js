import { fetch } from './csrf';

const initialState = {images: []}
const GET_IMAGES = 'images/getImages'
const GET_PHOTO = 'images/getPhoto'

export const getImages = (payload) => {
    return {
        type: GET_IMAGES,
        payload
    }
}

export const getPhotos = () => async (dispatch) => {
    const res = await fetch('/api/images')

    if(res.ok){
        dispatch(getImages(res.data.images))
    }
}


const imageReducer = (state = initialState, action) => {
    let newState;

    switch (action.type) {
        case GET_IMAGES:
            newState = Object.assign({}, state);
            newState.images = action.payload;
            return newState;
        // case GET_PHOTO:
        //     newState = Object.assign({}, state);
        //     newState.topRatedPic = action.payload
        //     return newState
        default:
            return state;
    }
}

export default imageReducer;