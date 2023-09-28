import { Component, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent {
  @ViewChild('userForm')
  userForm?: FormGroup;

  userModel = {
    email: '',
    password: '',
  };

  onSubmit(): void {
    console.log(this.userModel);
  }
}
