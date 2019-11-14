import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../interfaces/contact';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public contact: Contact;
  private contactService;

  constructor(
    private cs: ContactService,
  ) {
   this.contactService = cs;   
   this.contactService.contact.subscribe(contact => {
    this.contact = contact
  }) 
  }

  find(){
    
  }
}
