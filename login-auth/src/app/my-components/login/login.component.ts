import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicesService } from '../../auth-services/auth-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  [x: string]: any;
  // login: FormGroup;

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private _authService: AuthServicesService
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl(''),
  });

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: '',
      password: '',
    });
  }

  submit(): void {
    this._authService.temp(this.loginForm)
      .subscribe(
        (result: any) => {
          console.log(result);
          localStorage.setItem('name', 'anup');
          localStorage.setItem('token', result.token);
          if (this._authService.loggedIn()) {
            this.router.navigate(['/home']);
          } else {
            this.router.navigate(['']);
          }
        },
        (error) => {
          console.error('error caught in component');
          this.errorMessage = error;
          this.loading = false;
        }
      );
  }

  get email() {
    return this.loginForm.get('email');
  }
}
