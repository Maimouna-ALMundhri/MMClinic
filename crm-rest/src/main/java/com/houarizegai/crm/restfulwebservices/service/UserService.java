package com.houarizegai.crm.restfulwebservices.service;


import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.houarizegai.crm.restfulwebservices.dto.UserDto;
import com.houarizegai.crm.restfulwebservices.model.Users;

@Service
public class UserService {
    private static List<Users> allUsers;
    private static long idCounter = 0;

    static {
    	allUsers = new LinkedList<>(Arrays.asList(
                new Users(++idCounter,"ahmed","0000","patient"),
                new Users(++idCounter,"admin","0000","admin"),
                new Users(++idCounter,"doctor","0000","doctor")
      
                
        ));
    }

    public List<Users> findAll() {
        return allUsers;
    }

    public Users save(UserDto Users) {
    	  System.out.println(Users.toString());
    	  Users temp =new Users(++idCounter,Users.getUsername(),Users.getPassword(),Users.getRole());
        if(temp.getId() < 1) {
            Users.setId(++idCounter);
          
            allUsers.add(temp);
        } else {
            deleteById(Users.getId());
            allUsers.add(temp);
        }

        return temp;
    }

    public Users deleteById(long id) {
        Users Users = findById(id);

        if(Users == null) return null;

        if(allUsers.remove(Users))
            return Users;
        return null;
    }

    public Users findById(long id) {
        for(Users Users : allUsers)
            if(Users.getId() == id)
                return Users;
        return null;
    }
    public Users findByUsername(String username) {
        for(Users Users : allUsers) {
        	System.out.println(Users.toString());
            if(Users.getUserName().equals(username))
                return Users;
        }
        return null;
    }
    public boolean checkUser(String username, String password) {
    	Users temp = findByUsername(username);
    	if(temp != null) {
    		System.out.println(temp.getPassword() + "====="+ password);
    		if(temp.getPassword().equals(password)) {
    			System.out.println("TRUEEEEEE");
    			return true;
    		}
    		else {
    			return false;
    		}
    	}
    	else {
    		return false;
    	}
    	
    }
    
}