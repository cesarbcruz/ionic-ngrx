import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromNote from '../reducers/note.reducer';
import * as fromContact from '../reducers/contact.reducer';

export interface AppState {
  notes: fromNote.NoteState;
  contact: fromContact.ContactState;
}

export const reducers: ActionReducerMap<AppState> = {
  notes: fromNote.reducer,
  contact: fromContact.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

export const getNoteState = (state: AppState) => state.notes;

export const getAllNotes = createSelector(
  getNoteState,
  fromNote.getNotes
);

export const getNoteById = createSelector(
  getNoteState,
  fromNote.getNoteById
);


export const getContactState = (state: AppState) => state.contact;

export const getContact = createSelector(
  getContactState,
  fromContact.getContact
);
