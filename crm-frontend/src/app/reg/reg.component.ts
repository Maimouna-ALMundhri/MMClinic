import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from '../customers/customers.component';
import { CustomerDataService } from '../service/data/customer-data.service';

export class UserDto {
  constructor(
    public id: number,
    public username: string,
    public password: string,
    public role: string
    ) {

  }
}

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})


export class RegComponent implements OnInit {
  patient: Patient;
  patients: Patient[];
  id : number;
  apptLength : number;
  user:UserDto;
  admin: boolean;
  constructor(private service: CustomerDataService, private toastr: ToastrService ,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.retrieveAllPatient();
    //this.apptLength=this.appointments.length;
    this.apptLength = 6;
    console.log("HAMDOOOON "+this.apptLength);
    this.id = this.route.snapshot.params['id']
    if(this.id <0 || this.id ==null){
    this.patient=new Patient(++this.apptLength,'','','','','');
    this.user=new UserDto(++this.apptLength,'','','');
    }
    else{
      this.retrievePatient(this.id);
      this.user=new UserDto(++this.apptLength,'','','patient');
      this.admin =true;
    }

  }

  onSave() {
    
      // call create customer service
      if(this.id <0 || this.id ==null){
        this.service.addUser("houarizegai", this.user).subscribe(
          response => {
            console.log(response);
            // console.log("USER ADDED", JSON.stringify(this.user));
           
          }
        );
       
      this.service.addPatient("houarizegai", this.patient).subscribe(
        response => {
          console.log(response);
          
        }
      );
      
      this.toastr.success('success', 'Users has been registerd', {timeOut: 3000});

      this.router.navigate(['login']);
      }
      else{
        this.updatePatient(this.patient);
      }
    }
 
    retrieveAllPatient() {
      this.service.retrieveAllPatient("houarizegai").subscribe(
        response => {
          console.log(response);
          
          this.patients = response;
          // this.apptLength=this.patients.length;
        }
      );
    }
    
    retrievePatient(id:number) {
      this.service.retrievePatient("houarizegai",id).subscribe(
        response => {
          console.log(response);
          
          this.patient = response;
        }
      );
    }
    updatePatient(patient: Patient) {
      this.service.updatePatient("houarizegai",patient).subscribe(
        response => {
          console.log(response);
          
          this.router.navigate(['']);
        }
      );
    }
  

}
