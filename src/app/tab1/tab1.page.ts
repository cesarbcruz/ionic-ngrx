import { Component } from '@angular/core';
import { NotesService } from '../notes.service';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/note';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  private readonly logTag: string = 'Tab1Page';

  public notes: Observable<Note[]>;

  constructor(
    private notesService: NotesService
  ) {
    console.log(this.logTag, 'constructor()');
    this.notes = notesService.notes;
    console.log(this.logTag, this.notes);
  }

  addNote() {
    this.notesService.createNote('Some Note');
  }

  deleteNote(note: Note) {
    this.notesService.deleteNote(note);
  }

}
