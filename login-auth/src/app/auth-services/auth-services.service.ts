import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../my-components/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  loginform: any;
 

  constructor(private http:HttpClient) { }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  temp(loginform):Observable<any>{
    return this.http.post('https://reqres.in/api/login',loginform.getRawValue())
  }
}
