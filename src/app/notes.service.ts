import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from './interfaces/note';
import { Store } from '@ngrx/store';
import { AppState, getAllNotes, getNoteById } from './reducers';
import * as NoteActions from './actions/note.actions';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public notes: Observable<Note[]>;
  private readonly logTag: string = 'NotesService';

  constructor(private store: Store<AppState>) {
    console.log(this.logTag, 'constructor()');
    this.notes = this.store.select(getAllNotes);
  }

  getNote(id: string): Observable<Note> {
    return this.store.select(getNoteById, {
      id
    });
  }

  createNote(title: any): void {
    const id = Math.random()
      .toString(36)
      .substring(7);

    const note = {
      id: id.toString(),
      title,
      content: ''
    };

    this.store.dispatch(new NoteActions.CreateNote({ note }));
  }

  deleteNote(note: Note): void {
    this.store.dispatch(new NoteActions.DeleteNote({ note }));
  }

}
