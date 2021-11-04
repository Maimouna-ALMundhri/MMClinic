import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { stringify } from 'querystring';
import { Appointment } from '../dr-log/dr-log.component';
import { CustomerDataService } from '../service/data/customer-data.service';

@Component({
  selector: 'app-dr-details',
  templateUrl: './dr-details.component.html',
  styleUrls: ['./dr-details.component.css']
})
export class DrDetailsComponent implements OnInit {


  appointments: Appointment[]=null;
  selectedAppointment: Appointment;
  id : Number;
  apptLength : number;
  PID :number;
  constructor(private service: CustomerDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.retrieveAllAppointment();
    this.PID = this.route.snapshot.params['patientID']
    this.getAppointment(this.PID);
    //this.apptLength=this.appointments.length;
   // console.log("HAMDOOOON "+JSON.stringify( this.appointments));
    
    //this.PID = this.route.snapshot.params['patientID']
    //console.log("AKSDHaklDHasklD::::::"+ this.PID )
    //this.getAppointment(this.PID);
  }



    retrieveAllAppointment() {
      this.service.retrieveAllAppointment("houarizegai").subscribe(
        response => {
        
          this.appointments = response;
          this.apptLength=this.appointments.length;
          //this.selectedAppointment = this.appointments[0];
          console.log(this.appointments);
        }
      );
    }
    getAppointment(pid:number) {
      this.service.getAppointment("houarizegai",pid).subscribe(
        response => {
        
          this.selectedAppointment = response;
         // this.apptLength=this.appointments.length;
          //this.selectedAppointment = this.appointments[0];
          console.log(this.selectedAppointment);
        }
      );
    }
    getMaryam(pid:number) {
      this.service.getMaryam("houarizegai",pid).subscribe(
        response => {
        
          this.selectedAppointment = response;
         // this.apptLength=this.appointments.length;
          //this.selectedAppointment = this.appointments[0];
          console.log(this.selectedAppointment);
        }
      );
    }
    onSub(appid: number){
      console.log(appid);
    this.getMaryam(appid);
    }
    // onSave() {
    
    //   // call create customer service
    //   this.service.addAppointment("houarizegai", this.appointment).subscribe(
    //     response => {
    //       console.log(response);
    //       this.router.navigate(['']);
    //     }
    //   );
    // }
}