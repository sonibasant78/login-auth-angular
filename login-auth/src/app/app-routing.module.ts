import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthguardGuard } from './auth-guard/authguard.guard';
import { LoginGuadGuard } from './loginGuard/login-guad.guard';
import { HomeComponent } from './my-components/home/home.component';
import { LoginComponent } from './my-components/login/login.component';
import { RegisterComponent } from './my-components/register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', canActivate: [LoginGuadGuard], component: LoginComponent },
  { path: 'home', canActivate: [AuthguardGuard], component: HomeComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
