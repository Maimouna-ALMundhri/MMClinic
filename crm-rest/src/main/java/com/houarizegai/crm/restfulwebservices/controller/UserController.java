package com.houarizegai.crm.restfulwebservices.controller;


import com.houarizegai.crm.restfulwebservices.dto.UserDto;
import com.houarizegai.crm.restfulwebservices.model.Users;
import com.houarizegai.crm.restfulwebservices.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

 

    @GetMapping("/users/{username}/login")
    public List<Users> getAllUsers(@PathVariable String username) {
        return userService.findAll();
        // return userService.findAll();
    }
    @GetMapping("/users/{username}/login/{usrname}/{pswrd}")
    public Boolean checkUser(@PathVariable String username, @PathVariable String usrname, @PathVariable String pswrd) {
    	return userService.checkUser(usrname, pswrd);
        // return userService.findAll();
    }

    @GetMapping("/users/{username}/login/{id}")
    public Users getUser(@PathVariable String username, @PathVariable long id) {
        return userService.findById(id);
        // return userService.findById(id);
    }

    @PutMapping("/users/{username}/login")
    public ResponseEntity<Users> updateUser(@PathVariable String username, @RequestBody UserDto users) {
        // User updatedUser = userService.save(user);
        Users updatedUser = userService.save(users);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    @PostMapping("/users/{username}/login")
    public ResponseEntity<Void> createUser(@PathVariable String username, @RequestBody UserDto users) {
        // User createdUser = userService.save(user);
    	System.out.println(users.toString());
        Users createdUser = userService.save(users);

        URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
                .path("/{id}").buildAndExpand(createdUser.getId()).toUri();

        return ResponseEntity.created(uri).build();
    }
    

    @DeleteMapping("/users/{username}/login/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable String username, @PathVariable long id) {
        // User user = userService.deleteById(id);

        // get user wanna delete it
        userService.deleteById(id);

        return ResponseEntity.noContent().build();
        //return ResponseEntity.notFound().build();
    }
}
