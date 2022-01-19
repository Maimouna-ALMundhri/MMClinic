import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../app.constants';
import { BasicAuthenticationService } from './basic-authentication.service';
import { CustomerDataService } from './data/customer-data.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  public allow: boolean;
  constructor( private basicAuthenticationService: BasicAuthenticationService,   private toastr: ToastrService,
                private userService: CustomerDataService,private http: HttpClient,private router: Router) { }

  
  authenticate(username, password) {    
  this.allow =false;
  this.doLogin(username,password);
    // if(username === "admin" && password === "0000") {
    //   sessionStorage.setItem('role','admin');
    //   return true;
    // }
    // if(username === "doctor" && password === "0000") {
    //   sessionStorage.setItem('role','doctor');
    //   return true;
    // }
    // if(username === "patient" && password === "0000") {
    //   sessionStorage.setItem('role','patient');
    //   return true;
    // }
    // console.log(this.doLogin(username,password));
// // console.log(this.allow);
//     if(this.trying(username,password)){
//       // sessionStorage.setItem('role','admin');
//       return true;
//     }
//     else{
//       return false;
//     }
   
  }

  doLogin(user:string, pass:string){
    this.userService.doLogin("houarizegai",user, pass).subscribe(
      data => {
        console.log(data);
        console.log(user +" "+ pass);
        if(data){
          if(user == 'doctor'){
            sessionStorage.setItem('role', 'doctor');
          }
         else if(user == 'admin'){
          sessionStorage.setItem('role', 'admin');
        }
         
         else{
          sessionStorage.setItem('role', 'patient');
         }
          this.router.navigate(['welcome',user]) 
        }
        else{
          this.toastr.error('Error', 'incorrect info', {timeOut: 3000});
        }
       
      },
      error => {
        console.log(error);
        this.toastr.error('Error', 'incorrect info', {timeOut: 3000});
      }
    ); 
    
    
  }

  trying(user:string, pass:string){
    return this.http.post<any>(
      `${API_URL}/users/houarizegai/login/${user}/${pass}`, {
        user,
        pass
      }).pipe(
        map(
          data => { // if request success with response save user in session
            if(data){
              // sessionStorage.setItem('role','admin');
              return true;
            }
            else{
              return false;
            }
           
          }
        )
      );
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
    sessionStorage.removeItem('authenticaterUser');
    sessionStorage.removeItem('role');
    this.allow=false;
  }
}
