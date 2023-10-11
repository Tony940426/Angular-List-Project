import { Component } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  newListForm = new FormGroup({
    listItem: new FormControl('')
  })
}
