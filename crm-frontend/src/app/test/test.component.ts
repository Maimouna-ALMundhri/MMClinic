import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Customer } from '../customers/customers.component';
import { CustomerDataService } from '../service/data/customer-data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  customers: Customer
  message: string
  dr: any;
  sp: any;


  constructor(private mahmood: CustomerDataService,
   private router: Router,private route: ActivatedRoute,
    private toastr: ToastrService) { }


  ngOnInit() {
    
console.log("HAAAAAAAAAALLLLOO");

    this.retrieveCustomer();
  }

  retrieveCustomer() {
    this.mahmood.retrieveCustomer("houarizegai",10002).subscribe(
      response => {
        // console.log(response);
        this.customers = response;
        console.log("customers   "+JSON.stringify(this.customers));
      }
    );
  }
  
  onClik(dr: String, sp: String) {
    

        this.router.navigate(['appointment',dr,sp]);
      
   


}
}