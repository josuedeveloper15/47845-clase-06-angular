import { FormControl, FormGroup, Validators } from '@angular/forms';

export const myForm = new FormGroup({
  name: new FormControl('', [Validators.required]),
  lastname: new FormControl('', [Validators.required]),
});
