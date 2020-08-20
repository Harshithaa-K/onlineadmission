import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onlineadmission';
  userData = new FormGroup(
  {
      name: new FormControl(''),
      email: new FormControl(''),
      contactnumber: new FormControl('')
  });
  onSubmit(form: NgForm)
  {
  console.log(form);
  }
}