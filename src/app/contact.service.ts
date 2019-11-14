import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './interfaces/contact';
import { Store } from '@ngrx/store';
import { AppState, getContact } from './reducers';
import * as ContactActions from './actions/contact.actions';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  public readonly contact: Observable<Contact>;
  private readonly logTag: string = 'ContactService';

  constructor(private store: Store<AppState>) {
    console.log(this.logTag, 'constructor()');
    this.contact = this.store.select(getContact);
  }

  saveContact(contact: Contact): void {
    if(contact.id){
      this.store.dispatch(new ContactActions.EditContact({contact }));
    }else{
      const id = Math.random().toString(36).substring(7);
      contact.id = id;
      this.store.dispatch(new ContactActions.CreateContact({contact}));
    }
  }
}
