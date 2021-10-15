import { ADD_CONTACT, CLEAR_CONTACTS, DELETE_CONTACT, DELETE_SELECTED_CONTACT, SELECT_CONTACTS, UPDATE_CONTACT } from "../../actionType";
import { GET_CONTACT } from "../../actionType";
export const addContacts = (contact) => {
    return {
        type: ADD_CONTACT,
        payload: contact,
    };
};


export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id
});

export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact
});

export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id
});

export const selectAllContacts = (id) => ({
    type: SELECT_CONTACTS,
    payload: id
});

export const clearAllContacts = () => ({
    type: CLEAR_CONTACTS,
});

export const deleteAll = () => ({
    type: DELETE_SELECTED_CONTACT,
    
})




