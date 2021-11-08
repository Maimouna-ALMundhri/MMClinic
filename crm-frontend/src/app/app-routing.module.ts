import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { CustomersComponent } from './customers/customers.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { TestComponent } from './test/test.component';
import { RegComponent } from './reg/reg.component';
import { ContactComponent } from './contact/contact.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AdminComponent } from './admin/admin.component';
import { PatientComponent } from './patient/patient.component';
import { DrLogComponent } from './dr-log/dr-log.component';
import { DrDetailsComponent } from './dr-details/dr-details.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent},
  { path: 'patient', component: PatientComponent, canActivate: [RouteGuardService] },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'doctors', component: TestComponent},
  { path: 'reg', component: RegComponent},
  { path: 'reg/:id', component: RegComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'dr-log', component: DrLogComponent},
  { path: 'dr-details/:patientID', component: DrDetailsComponent},
  { path: 'appointment/:dr/:sp', component: AppointmentComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'admin', component:  AdminComponent},
  { path: 'customers/:id', component: CustomerFormComponent, canActivate: [RouteGuardService] },
  { path: '**', component: ErrorComponent }
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
