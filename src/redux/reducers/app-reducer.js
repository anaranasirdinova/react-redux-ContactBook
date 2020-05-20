import {
    GET_DATA,
    OPEN_MODAL,
    CLOSE_MODAL,
    GET_CONTACT_DETAIL
} from '../constants';

const initialState = {
    data: [],
    currentContact: null,
    editContact: null,
    isEdit: false
}

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: return { ...state, data: action.payload }
        case OPEN_MODAL: return { ...state, isEdit: true, currentContact: action.payload }
        case CLOSE_MODAL: return { ...state, isEdit: false }
        case GET_CONTACT_DETAIL: return { ...state, currentContact: action.payload }
        default: return state;
    }
}


export default AppReducer;