import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table' 
import { DataSource } from '@angular/cdk/table';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Customer, Patient } from '../customers/customers.component';
import { CustomerDataService } from '../service/data/customer-data.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export class Appointment {
  constructor(
    public id: number,
    public patientID: number,
    public patientName: string,
    public speciality: string,
    public age: string,
    public appointmentDt: string,
    public msg: string,
    public doctorNote: string,
    public gsm: string,
    public doctor: string,
    public gender: string) {

  }
}



@Component({
  selector: 'app-dr-log',
  templateUrl: './dr-log.component.html',
  styleUrls: ['./dr-log.component.css']
})
export class DrLogComponent implements OnInit {
  displayedColumns: string[] = ['id', 'patientID', 'name', 'speciality','doctor','appointmentDt'];

  clickedRows = new Set<PeriodicElement>();
  customers: Customer[]
  patients: Patient[]
  appointments: Appointment[]
  message: string
  dataSource: Appointment[];


  constructor(private service: CustomerDataService,
   private router: Router,
    private toastr: ToastrService) { }


  ngOnInit() {
  
    this.retrieveAllAppointment();
    this.dataSource=this.appointments ;
  }


  retrieveAllAppointment() {
    this.service.retrieveAllAppointment("houarizegai").subscribe(
      response => {
        console.log(response);
        this.appointments = response;
        this.dataSource =this.appointments;
      }
    );
  }

}
