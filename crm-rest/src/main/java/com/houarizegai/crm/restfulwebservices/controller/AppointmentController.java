package com.houarizegai.crm.restfulwebservices.controller;

import com.houarizegai.crm.restfulwebservices.model.Appointment;
import com.houarizegai.crm.restfulwebservices.repository.AppointmentRepository;
import com.houarizegai.crm.restfulwebservices.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AppointmentController {

    @Autowired
    private AppointmentService appointmentService;

    @Autowired
    private AppointmentRepository appointmentRepository;

    @GetMapping("/users/{username}/appointments")
    public List<Appointment> getAllAppointments(@PathVariable String username) {
        //return appointmentRepository.findAll();
         return appointmentService.findAll();
    }

    @GetMapping("/users/{username}/appointments/{patientid}")
    public Appointment getByIdAppointment(@PathVariable String username, @PathVariable long  patientid) {
    	System.out.println(patientid);
        return appointmentService.findByPId(patientid);
        // return .findById(id);
    }
    @GetMapping("/users/{username}/appointments/bymaryam/{id}")
    public Appointment getAppointment(@PathVariable String username, @PathVariable long  id) {
    	System.out.println(id);
        return appointmentService.findById(id);
        // return .findById(id);
    }


    @PutMapping("/users/{username}/appointments")
    public ResponseEntity<Appointment> updateAppointment(@PathVariable String username, @RequestBody Appointment appointment) {
        Appointment updatedAppointment = appointmentService.save(appointment);
       // Appointment updatedAppointment = appointmentRepository.save(appointment);
        return new ResponseEntity<>(updatedAppointment, HttpStatus.OK);
    }

    @PostMapping("/users/{username}/appointments")
    public ResponseEntity<Void> createAppointment(@PathVariable String username, @RequestBody Appointment appointment) {
         Appointment createdAppointment = appointmentService.save(appointment);
     //   Appointment createdAppointment = appointmentRepository.save(appointment);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdAppointment.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping("/users/{username}/appointments/{id}")
    public ResponseEntity<Void> deleteAppointment(@PathVariable String username, @PathVariable long id) {
        // Appointment appointment = appointmentService.deleteById(id);

        // get appointment wanna delete it
        appointmentRepository.deleteById(id);

        return ResponseEntity.noContent().build();
        //return ResponseEntity.notFound().build();
    }
}
