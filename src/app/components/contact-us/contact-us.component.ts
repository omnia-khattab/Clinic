import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  //fdata=[];
  constructor() { }

  contactForm = new FormGroup({
    'firstName': new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
    'lastName': new FormControl(null,[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')]),
    "email":new FormControl(null,[Validators.required,Validators.email]),
    "desc":new FormControl(null,[Validators.required,Validators.minLength(10)]),
  });

  ngOnInit(): void {
  }
  
  onSubmit(FormData) {
    if(FormData.valid==true){
      //this.fdata=this.contactForm.value;
      console.warn(this.contactForm.value);

    }
  }
}
