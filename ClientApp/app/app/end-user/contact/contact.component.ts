import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';
import { Contact } from '@app/end-user/contact/contact.model';
@Component({
    selector: 'hure-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
    contactForm: FormGroup;
    constructor(private fb: FormBuilder) {
        this.createForm();
     }
    createForm() {
        this.contactForm = this.fb.group(new Contact())
    }
    submitContact(){
        console.log(this.contactForm.value);
    }
}