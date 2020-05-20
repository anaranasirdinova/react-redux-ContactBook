import axios from 'axios';
import {
    GET_DATA,
    OPEN_MODAL,
    CLOSE_MODAL,
    GET_CONTACT_DETAIL
} from '../constants';

export const getContactData = () => async (dispatch) => {
    const { data } = await axios.get('http://localhost:8000/contacts');
    dispatch({
        type: GET_DATA,
        payload: data
    })
}

export const addContact = (contact) => async (dispatch) => {
    await axios.post('http://localhost:8000/contacts', contact);
    dispatch(getContactData());
}


export const editContact = (id, contact) => async (dispatch) => {
    await axios.put(`http://localhost:8000/contacts/${id}`, contact);
    dispatch(getContactData());
    dispatch({ type: CLOSE_MODAL });
}

export const openModal = (id) => async (dispatch) => {
    const {data} = await axios(`http://localhost:8000/contacts/${id}`);
    dispatch({ 
        type: OPEN_MODAL,
        payload: data
    });
}

export const deleteContact = (id) => async (dispatch) => {
    await axios.delete(`http://localhost:8000/contacts/${id}`);
    dispatch(getContactData());
}

export const getContactDetail = (id) => async (dispatch) => {
    const {data} = await axios(`http://localhost:8000/contacts/${id}`);
    dispatch({
        type: GET_CONTACT_DETAIL, 
        payload: data
    });
}