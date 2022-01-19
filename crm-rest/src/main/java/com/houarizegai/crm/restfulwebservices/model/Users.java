package com.houarizegai.crm.restfulwebservices.model;


import javax.persistence.*;

@Entity
public class Users {
    @Id
    @GeneratedValue
    private Long id;
    
    private String username;
	private String password;
	private String role;
	public Users () {
    	
    }
    public Users(Long id, String username, String password, String role) {
		
		this.id = id;
		this.username = username;
		this.password= password;
		this.role = role;
	}

    
    
	public String getUserName() {
		return username;
	}

	public void setUserName(String username) {
		this.username = username;
	}
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	  @Override
	    public String toString() {
	        return "User{" +
	                "id=" + id +
	                ", username=" + username +
	                ", password=" + password +
	               
	                '}';
	    }
   

   	}

