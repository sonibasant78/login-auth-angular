import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/auth-services/auth-services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  loginForm: FormGroup;


  constructor(private formBuilder:FormBuilder , private http:HttpClient,private router:Router,private _authService: AuthServicesService) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
   email:'',
   password:''
    })
  }

  submit():void{
    console.log("hello");
    
 console.log(this.loginForm.getRawValue());
 this._authService.temp(this.loginForm).subscribe(() => this.router.navigate(['/login']) );
  }

}


