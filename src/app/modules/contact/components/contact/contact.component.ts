import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators , FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 private contactForm: FormGroup
 private submitted:boolean = false;
 message: string = ""

  constructor(formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = new FormGroup({
                   
      name : new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern(/^[A-ZČĆŠĐŽ][a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,15})+$/)
      ])),
         email : new FormControl(null , Validators.compose([
          Validators.required,
        Validators.pattern(/^[\w]+[\.\_\-\w\d]*\@gmail\.com$/)
      ])),  
          subject : new FormControl(null , Validators.compose([
            Validators.required,
            Validators.pattern(/^[A-ZČĆŠĐŽ][a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,15})*$/)
          ])),
          message : new FormControl(null , Validators.compose([ 
            Validators.required,
            Validators.pattern(/^[A-ZČĆŠĐŽa-zčćšđž\d\s\.\,\*\+\?\!\-\_\/\'\:\;]{5,}$/)
          ]))
 })
  }

  get f() { return this.contactForm.controls; }


  onSubmit(){
  
        //console.log(this.contactForm)
        if (this.contactForm.invalid) {
          this.submitted = true
           this.message = "Data is not successfully send!";
         }else{
          this.message = "Data is successfully send!"
         }
 
     
   }

}
