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
  id : Number;
  apptLength : number;
  constructor(private service: CustomerDataService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.retrieveAllPatient();
    this.patient=new Patient(++this.apptLength,'','','','','');
  }
  onSave() {
    
    // call create customer service
    this.service.addPatient("houarizegai", this.patient).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['']);
      }
    );
  }
  
  retrieveAllPatient() {
    this.service.retrieveAllPatient("houarizegai").subscribe(
      response => {
      
        this.patients = response;
        this.apptLength=this.patients.length;
        console.log(this.patients.length);
      }
    );
  }
}