import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer, Patient } from '../customers/customers.component';
import { CustomerDataService } from '../service/data/customer-data.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})


export class PatientComponent implements OnInit {

  customers: Customer[]
  patients: Patient[]
  message: string


  constructor(private service: CustomerDataService,
   private router: Router,
    private toastr: ToastrService) { }


  ngOnInit() {
    this.retrieveAllCustomers();
    this.retrieveAllPatient();
  }

  retrieveAllCustomers() {
    this.service.retrieveAllCustomers("houarizegai").subscribe(
      response => {
        // console.log(response);
        this.customers = response;
      }
    );
  }
  retrieveAllPatient() {
    this.service.retrieveAllPatient("houarizegai").subscribe(
      response => {
        console.log(response);
        this.patients = response;
      }
    );
  }

  addCustomer() {
    this.router.navigate(['customers', -1]);
  }

  updateCustomer(id) {
    // console.log(`Update Customer ${id}`);
    this.router.navigate(['customers', id]);
  }

  deleteCustomer(id) {
      // console.log(`Delete customer ${id}`);
      this.service.deleteCustomer("houarizegai", id).subscribe(
        response => {
          // console.log(response);
          this.toastr.success('Success','The customer has been deleted!', {
            timeOut: 3000
          });         
          this.retrieveAllCustomers(); // refresh customers
        }
      );
  }

}
