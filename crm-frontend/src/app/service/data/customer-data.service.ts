import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer, Patient } from 'src/app/customers/customers.component';
import { API_URL } from 'src/app/app.constants';
import { BasicAuthenticationService } from '../basic-authentication.service';
import { Appointment } from 'src/app/dr-log/dr-log.component';

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

  addCustomer(username: string, customer: Customer) {
    return this.http.post(`${API_URL}/users/${username}/customers`, customer);
  }
  addAppointment(username: string, appointment: Appointment) {
    return this.http.post(`${API_URL}/users/${username}/appointments`, appointment);
  }
  addPatient(username: string, patient: Patient) {
    return this.http.post(`${API_URL}/users/${username}/patients`, patient);
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

   
  getMaryam(username: string,id:  number) {
    return this.http.get<Appointment>(`${API_URL}/users/${username}/appointments/bymaryam/${id}`);
  }



}
