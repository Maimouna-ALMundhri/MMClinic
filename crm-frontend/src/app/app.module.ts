import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { CustomersComponent } from './customers/customers.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomerFormComponent } from './customer-form/customer-form.component';

// import some UI module
import { AlertModule } from 'ngx-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ToastrModule } from 'ngx-toastr';
import { HttpIntercepterBasicAuthService } from './service/http/http-intercepter-basic-auth.service';
import { TestComponent } from './test/test.component';
import { RegComponent } from './reg/reg.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './patient/patient.component';
import { DrLogComponent } from './dr-log/dr-log.component';
import { DrDetailsComponent } from './dr-details/dr-details.component';
import { MatTableModule } from '@angular/material/table' 




@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    ErrorComponent,
    CustomersComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    CustomerFormComponent,
    TestComponent,
    RegComponent,
    ContactComponent,
    AppointmentComponent,
    AdminComponent,
    PatientComponent,
    DrLogComponent,
    DrDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    MatTableModule,
    HttpClientModule,
    AlertModule.forRoot(), // Alert from ngx bootstrap module added
    AngularFontAwesomeModule, // Font awesome module added
    BrowserAnimationsModule, // required animations module added
    ToastrModule.forRoot() // ToastrModule module added  
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBasicAuthService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
