import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { forbiddenName, noHomeroValidator } from '../utils/custom-validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  userForm: FormGroup;

  myStepperForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.myStepperForm = this.formBuilder.group({
      // Paso 1
      contact: this.formBuilder.group({
        telefono: [],
        email: [],
        linkedin: [],
      }),

      // Paso 2
      address: this.formBuilder.group({
        locations: [],
        state: [],
        country: [],
        zip: [],
      }),

      // Paso 3
      facturacion: this.formBuilder.group({
        cuit: [],
        numeroDeSocio: [],
      }),
    });

    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, forbiddenName('josue')]],
      // name: ['', [Validators.required, noHomeroValidator]],

      email: ['', [Validators.required, Validators.email]],
      password: this.formBuilder.control(''),
    });
  }

  get emailControl() {
    return this.userForm.controls['email'];
  }

  get emailControlIsInvalid() {
    return this.emailControl.invalid && this.emailControl.touched;
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      alert('Formulario invalido');
    } else {
      console.log(this.userForm.value);
    }
  }
}
