import { Component } from '@angular/core';
import { Contact } from '../interfaces/contact';
import { ContactService } from '../contact.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public contact: Contact;
  private readonly logTag: string = 'Tab2Page';
  contactForm: any;

  constructor(
    private contactService: ContactService,
    private formBuilder: FormBuilder,
  ) {
   
    this.contactForm = this.formBuilder.group({
        id: ['', ''],
        nome: ['', Validators.required],
        telefone: ['', Validators.required],
        email: ['', Validators.required],
    });

    console.log(this.logTag, 'constructor()');
    contactService.contact.subscribe(contact => {
       this.contact = { ...contact }
    })
  }

  save() {
    this.contactService.saveContact(this.contact);
  }
}
