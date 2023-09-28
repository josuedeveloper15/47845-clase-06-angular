import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function noHomeroValidator(
  control: AbstractControl
): ValidationErrors | null {
  if (
    typeof control.value === 'string' &&
    control.value.toLowerCase() === 'homero'
  ) {
    return {
      noHomero: true,
    };
  }

  return null;
}

export function forbiddenName(name: string): ValidatorFn {
  return (control) => {
    if (
      typeof control.value === 'string' &&
      control.value.toLowerCase() === name
    ) {
      return {
        forbiddenName: true,
      };
    }

    return null;
  };
}

// export function noHomeroValidator(): ValidatorFn {
//   return
// }
