import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newListForm = new FormGroup({
    listItem: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/[a-zA-Z]+/)])
  })

  constructor(){
    console.log(this.newListForm.get('listItem'))
  }
}
