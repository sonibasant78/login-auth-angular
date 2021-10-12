import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './my-components/login/login.component';
import { RegisterComponent } from './my-components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './my-components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthServicesService } from './auth-services/auth-services.service';
import { AuthguardGuard } from './auth-guard/authguard.guard';



@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [AuthServicesService,AuthguardGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
