import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  message = '';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
  }

  resetLocal() {
    localStorage.removeItem("token");
  }
}
