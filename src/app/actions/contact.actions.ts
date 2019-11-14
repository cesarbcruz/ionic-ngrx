import { Action } from '@ngrx/store';
import { Contact } from '../interfaces/contact';

export enum ActionTypes {
    CreateContact = '[Contact Service] Create contact',
    EditContact = '[Contact Service] Edit contact'
}

export class CreateContact implements Action {
    readonly type = ActionTypes.CreateContact;
    constructor(public payload: {contact: Contact}) {}
}

export class EditContact implements Action {
    readonly type = ActionTypes.EditContact;
    constructor(public payload: {contact: Contact}) {}
}

export type ActionsUnion = CreateContact | EditContact;
