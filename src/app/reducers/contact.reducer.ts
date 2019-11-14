import * as fromContact from '../actions/contact.actions';
import { Contact } from '../interfaces/contact';

export interface ContactState {
  data: Contact;
}

export const initialState: ContactState = {
  data: {
    id: "",
    nome: "abc",
    telefone: "",
    email: "",
    date_create: "",
    date_update: ""
  }
};

export function reducer(
  state = initialState,
  action: fromContact.ActionsUnion
): ContactState {
  switch (action.type) {
    case fromContact.ActionTypes.CreateContact: {
      action.payload.contact.date_create = new Date().toISOString();
      return {
        ...state,
        data: action.payload.contact
      };
    }

    case fromContact.ActionTypes.EditContact: {
      action.payload.contact.date_update = new Date().toISOString();
      return {
        ...state,
        data: action.payload.contact
      };
    }

    default: {
      return state;
    }
  }
}

export const getContact = (state: ContactState) => state.data;
