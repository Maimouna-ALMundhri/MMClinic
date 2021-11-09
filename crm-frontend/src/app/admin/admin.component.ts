import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { contact } from '../contact/contact.component';
import { Customer, Patient } from '../customers/customers.component';
import { CustomerDataService } from '../service/data/customer-data.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  customers: Customer[]
  patients: Patient[]
  contacts: contact[]
  message: string
  id: number

  constructor(private service: CustomerDataService,
   private router: Router,private route: ActivatedRoute,
    private toastr: ToastrService) { }


  ngOnInit() {

    this.retrieveAllPatient();
    this.retrieveAllContact();
  }

 
  retrieveAllPatient() {
    this.service.retrieveAllPatient("houarizegai").subscribe(
      response => {
        console.log(response);
        this.patients = response;
      }
    );
  }
  retrieveAllContact() {
    this.service.retrieveAllContact("houarizegai").subscribe(
      response => {
        console.log(response);
        this.contacts = response;
      }
    );
  }

  addPatient() {
    this.router.navigate(['reg',-1]);
  }

  updatePatient(id) {
    // console.log(`Update Customer ${id}`);
    this.router.navigate(['reg', id]);
  }

  deletePatient(id) {
      // console.log(`Delete customer ${id}`);
      this.service.deletePatient("houarizegai", id).subscribe(
        response => {
          // console.log(response);
          this.toastr.success('Success','The patient has been deleted!', {
            timeOut: 3000
          });         
          this.retrieveAllPatient(); // refresh customers
        }
      );
  }
  deleteContact(id) {
      // console.log(`Delete customer ${id}`);
      this.service.deleteContact("houarizegai", id).subscribe(
        response => {
          // console.log(response);
          this.toastr.success('Success','The patient has been deleted!', {
            timeOut: 3000
          });         
          this.retrieveAllContact(); // refresh customers
        }
      );
  }

}
