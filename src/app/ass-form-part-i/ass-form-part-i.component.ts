import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-ass-form-part-i',
  templateUrl: './ass-form-part-i.component.html',
  styleUrls: ['./ass-form-part-i.component.scss']
})
export class AssFormPartIComponent implements OnInit {
  signUpForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createSignUpForm();
  }

  createSignUpForm() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  submitForm() {
    console.log(this.signUpForm.getRawValue());
  }
}
