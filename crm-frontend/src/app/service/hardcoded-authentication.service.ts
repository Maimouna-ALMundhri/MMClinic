import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    if(username === "admin" && password === "0000") {
      sessionStorage.setItem('role','admin');
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    if(username === "doctor" && password === "0000") {
      sessionStorage.setItem('role','doctor');
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    if(username === "patient" && password === "0000") {
      sessionStorage.setItem('role','patient');
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    return false;
  }

  

  isUserLoggedIn() {
    let user = sessionStorage.getItem('authenticaterUser')
  
    return !(user === null)
  }

  isadmin() {
    let ad = sessionStorage.getItem('role')
    return (ad ==='admin')
  }

  isdoctor() {
    let ad = sessionStorage.getItem('role')
    return (ad ==='doctor')
  }

  ispatient() {
    let ad = sessionStorage.getItem('role')
    return (ad ==='patient')
  }

  logout() {
    sessionStorage.removeItem('authenticaterUser')
    sessionStorage.removeItem('role')
  }
}
