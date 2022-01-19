package com.houarizegai.crm.restfulwebservices.controller;

import com.houarizegai.crm.restfulwebservices.model.Patient;
import com.houarizegai.crm.restfulwebservices.repository.PatientRepository;
import com.houarizegai.crm.restfulwebservices.service.PatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class PatientController {

    @Autowired
    private PatientService patientService;

    @Autowired
    private PatientRepository patientRepository;

    @GetMapping("/users/{username}/patients")
    public List<Patient> getAllPatients(@PathVariable String username) {
//        return patientRepository.findAll();
         return patientService.findAll();
    }

    @GetMapping("/users/{username}/patients/{id}")
    public Patient getPatient(@PathVariable String username, @PathVariable long id) {
//        return patientRepository.findById(id).get();
         return patientService.findById(id);
    }

    @PutMapping("/users/{username}/patients")
    public ResponseEntity<Patient> updatePatient(@PathVariable String username, @RequestBody Patient patient) {
         Patient updatedPatient = patientService.save(patient);
//        Patient updatedPatient = patientRepository.save(patient);
        return new ResponseEntity<>(updatedPatient, HttpStatus.OK);
    }

    @PostMapping("/users/{username}/patients")
    public ResponseEntity<Void> createPatient(@PathVariable String username, @RequestBody Patient patient) {
         Patient createdPatient = patientService.save(patient);
//        Patient createdPatient = patientRepository.save(patient);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdPatient.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping("/users/{username}/patients/{id}")
    public ResponseEntity<Void> deletePatient(@PathVariable String username, @PathVariable long id) {
        // Patient patient = patientService.deleteById(id);

        // get patient wanna delete it
    	patientService.deleteById(id);

        return ResponseEntity.noContent().build();
        //return ResponseEntity.notFound().build();
    }
}
