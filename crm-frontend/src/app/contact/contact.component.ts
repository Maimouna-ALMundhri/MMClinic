import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerDataService } from '../service/data/customer-data.service';

export class contact {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public gsm: string,
    public comment: string) {

  }
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  Contact: contact;
  Contacts: contact[];
  id : Number;
  apptLength : number;
  constructor(private service: CustomerDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    sessionStorage.setItem('authenticaterUser', 'tempuser');
    this.retrieveAllContact();
    //this.apptLength=this.appointments.length;
    console.log("HAMDOOOON"+this.apptLength);
   
    this.Contact=new contact(++this.apptLength,'','','','');
  }

  onSave() {
    
      // call create customer service
      this.service.addContact("houarizegai", this.Contact).subscribe(
        response => {
          console.log(response);
          sessionStorage.removeItem('authenticaterUser')
          this.router.navigate(['']);
        }
      );
    }

    retrieveAllContact() {
      this.service.retrieveAllContact("houarizegai").subscribe(
        response => {
        
          this.Contacts = response;
          this.apptLength=this.Contacts.length;
          console.log(this.Contacts.length);
        }
      );
    }

}



