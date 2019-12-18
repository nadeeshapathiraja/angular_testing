import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HomeComponent } from 'home.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.registraionForm= this._fromBuilder.group({

    //   fullName: ['',Validators.required],
    //   address: ['',Validators.required],
    //   dob: ['',Validators.required],
    //   emial: ['',Validators.required],
    //   password: ['',Validators.required],

    // });
  }
  getData(){
    // console.log("Full Name: "+this.registraionForm.value["fullName"]);
  }

}
