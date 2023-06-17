import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  myForm!:FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.myForm = new FormGroup({
      name: new FormControl( '', [Validators.required]),
      email:  new FormControl('', [Validators.required, Validators.email]),
      password:  new FormControl('', [Validators.required, Validators.minLength(6)]),
      contact:  new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')])
    })
  }

  submit(){

    alert("form submitted successfully")
    this.myForm.reset();

  }

}
