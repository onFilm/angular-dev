import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/auth.action';
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { RouterLink } from '@angular/router';
import { selectIsSubmitting } from '../../store/auth.reducer';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, AsyncPipe],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  isSubmitting$ = this.store.select(selectIsSubmitting)

  constructor(
    private fb: FormBuilder, 
    private store: Store) {
  }

  onSubmit() {
    console.log('form', this.form.getRawValue())

    const request: RegisterRequestInterface = {
      user: this.form.getRawValue(),
    };

    this.store.dispatch(authActions.register({request}));
  }
}
