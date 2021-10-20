import { Component, OnInit } from '@angular/core';
import { CustomerDataService } from '../service/data/customer-data.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


export class Customer {
  constructor(
    public id: number,
    public name: string,
    public birthDate: Date,
    public email: string) {

  }
}
export class Patient {
  constructor(
    public id: number,
    public name: string,
    public age: string,
    public gsm: string,
    public email: string,
    public gender: string) {

  }
}

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  
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
