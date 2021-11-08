import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../dr-log/dr-log.component';
import { CustomerDataService } from '../service/data/customer-data.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointment: Appointment;
  appointments: Appointment[];
  id : Number;
  apptLength : number;
  dr: string;
  sp: string;
  constructor(private service: CustomerDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.retrieveAllAppointment();
    //this.apptLength=this.appointments.length;
    console.log("HAMDOOOON"+this.apptLength);
    
    this.dr = this.route.snapshot.params['dr']
    this.sp = this.route.snapshot.params['sp']
    if(this.dr != null || this.sp !=null){
      console.log("HALLLO "+this.dr+this.sp);
      this.appointment=new Appointment(++this.apptLength,10004,'',this.sp,'','','','','',this.dr,'');
    }
    else{
      this.appointment=new Appointment(++this.apptLength,10004,'','','','','','','','','');
    }
    
  }

  onSave() {
    
      // call create customer service
      this.service.addAppointment("houarizegai", this.appointment).subscribe(
        response => {
          console.log(response);
          this.router.navigate(['']);
        }
      );
    }

    retrieveAllAppointment() {
      this.service.retrieveAllAppointment("houarizegai").subscribe(
        response => {
        
          this.appointments = response;
          this.apptLength=this.appointments.length;
          console.log(this.appointments.length);
        }
      );
    }

}
