package com.houarizegai.crm.restfulwebservices.controller;


import com.houarizegai.crm.restfulwebservices.model.contact;
import com.houarizegai.crm.restfulwebservices.repository.ContactRepository;
import com.houarizegai.crm.restfulwebservices.service.contactService;
import com.houarizegai.crm.restfulwebservices.service.contactService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ContactController {

    @Autowired
    private contactService contactService;

    @Autowired
    private ContactRepository contactRepository;

    @GetMapping("/users/{username}/contacts")
    public List<contact> getAllcontacts(@PathVariable String username) {
        //return contactRepository.findAll();
         return contactService.findAll();
    }

 
    @GetMapping("/users/{username}/contacts/bymaryam/{id}")
    public contact getcontact(@PathVariable String username, @PathVariable long  id) {
    	System.out.println(id);
        return contactService.findById(id);
        // return .findById(id);
    }


    @PutMapping("/users/{username}/contacts")
    public ResponseEntity<contact> updatecontact(@PathVariable String username, @RequestBody contact contact) {
        contact updatedcontact = contactService.save(contact);
       // contact updatedcontact = contactRepository.save(contact);
        return new ResponseEntity<>(updatedcontact, HttpStatus.OK);
    }

    @PostMapping("/users/{username}/contacts")
    public ResponseEntity<Void> createcontact(@PathVariable String username, @RequestBody contact contact) {
         contact createdcontact = contactService.save(contact);
     //   contact createdcontact = contactRepository.save(contact);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdcontact.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }

    @DeleteMapping("/users/{username}/contacts/{id}")
    public ResponseEntity<Void> deletecontact(@PathVariable String username, @PathVariable long id) {
        // contact contact = contactService.deleteById(id);

        // get contact wanna delete it
    	contactService.deleteById(id);

        return ResponseEntity.noContent().build();
        //return ResponseEntity.notFound().build();
    }
}
