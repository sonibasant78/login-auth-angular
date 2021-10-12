import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;

  constructor(private http: HttpClient) {}


  onSubmit(data: any) {
    console.log("data found");
    console.log(data);
    this.http
      .post('https://reqres.in/api/login', data)
      .subscribe(
        (result) => {
          console.warn("result", result);
        },
        (error) => {
          console.warn("error");
          console.warn(error);
        });

    console.warn(data);
  }
}
