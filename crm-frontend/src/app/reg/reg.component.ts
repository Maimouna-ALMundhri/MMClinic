import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../customers/customers.component';
import { CustomerDataService } from '../service/data/customer-data.service';

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
  constructor(private service: CustomerDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.retrieveAllPatient();
    //this.apptLength=this.appointments.length;
    console.log("HAMDOOOON"+this.apptLength);
    this.id = this.route.snapshot.params['id']
    if(this.id <0)
    this.patient=new Patient(++this.apptLength,'','','','','');
    else{
      this.retrievePatient(this.id);
    }

  }

  onSave() {
    
      // call create customer service
      if(this.id <0){
      this.service.addPatient("houarizegai", this.patient).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['']);
        }
      );
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
          this.apptLength=this.patients.length;
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
