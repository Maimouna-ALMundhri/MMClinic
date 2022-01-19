import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer, Patient } from 'src/app/customers/customers.component';
import { API_URL } from 'src/app/app.constants';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { Appointment } from 'src/app/dr-log/dr-log.component';
import { contact } from 'src/app/contact/contact.component';
import { UserDto } from 'src/app/reg/reg.component';

@Injectable({
  providedIn: 'root'
})
export class CustomerDataService {

  constructor(private http: HttpClient) { }

  retrieveAllCustomers(username: string) {
    return this.http.get<Customer[]>(`${API_URL}/users/${username}/customers`);
  }
  retrieveAllPatient(username: string) {
    return this.http.get<Patient[]>(`${API_URL}/users/${username}/patients`);
  }
  retrieveAllAppointment(username: string) {
    return this.http.get<Appointment[]>(`${API_URL}/users/${username}/appointments`);
  }

  retrieveCustomer(username: string, id: number) {
    return this.http.get<Customer>(`${API_URL}/users/${username}/customers/${id}`);
  }
  retrievePatient(username: string, id: number) {
    return this.http.get<Patient>(`${API_URL}/users/${username}/patients/${id}`);
  }

  addCustomer(username: string, customer: Customer) {
    return this.http.post(`${API_URL}/users/${username}/customers`, customer);
  }
  addAppointment(username: string, appointment: Appointment) {
    return this.http.post(`${API_URL}/users/${username}/appointments`, appointment);
  }
  addPatient(username: string, patient: Patient) {
    return this.http.post(`${API_URL}/users/${username}/patients`, patient);
  }
  addUser(username: string, user: UserDto) {
    return this.http.post(`${API_URL}/users/${username}/login`, user);
  }
  addContact(username: string, Contact: contact) {
    return this.http.post(`${API_URL}/users/${username}/contacts`, Contact);
  }

  updateCustomer(username: string, customer: Customer) {
    return this.http.put(`${API_URL}/users/${username}/customers`, customer);
  }

  deleteCustomer(username: string, id: number) {
    return this.http.delete(`${API_URL}/users/${username}/customers/${id}`);
  }

  getPatient(username: string,usr: string,password: string) {
    return this.http.get(`${API_URL}/users/${username}/patients/${usr}/${password}`);
  }
  getAppointment(username: string,id:  number) {
    return this.http.get<Appointment>(`${API_URL}/users/${username}/appointments/${id}`);
  }
  updateAppointment(username: string,appt:  Appointment) {
    return this.http.put(`${API_URL}/users/${username}/appointments`, appt);
  }

  deleteContact(username: string, id: number) {
    return this.http.delete(`${API_URL}/users/${username}/contacts/${id}`);
  }
   
  getMaryam(username: string,id:  number) {
    return this.http.get<Appointment>(`${API_URL}/users/${username}/appointments/bymaryam/${id}`);
  }

  deletePatient(username: string, id: number) {
    return this.http.delete(`${API_URL}/users/${username}/patients/${id}`);
  }

  updatePatient(username: string,patients: Patient) {
    return this.http.put(`${API_URL}/users/${username}/patients`, patients);
  }
  retrieveAllContact(username: string) {
    return this.http.get<contact[]>(`${API_URL}/users/${username}/contacts`);
  }
  doLogin(username: string,usrname:  string, password: string) {
    return this.http.get<any>(`${API_URL}/users/${username}/login/${usrname}/${password}`);
  }

}
