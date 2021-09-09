import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  profileForm = new FormGroup({
    title: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    sex: new FormControl(''),
    email: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zip: new FormControl(''),
    }),
    aliases: new FormArray([
      new FormControl(''),
    ])
  });

  get aliases(){
    return this.profileForm.get('aliases') as FormArray;
  }



  constructor() { }

  ngOnInit(): void {
  }

  addAlias(){
    this.aliases.push(new FormControl(''));
  }

}
