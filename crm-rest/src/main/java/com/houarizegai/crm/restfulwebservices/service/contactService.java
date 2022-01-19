package com.houarizegai.crm.restfulwebservices.service;

import com.houarizegai.crm.restfulwebservices.model.contact;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

@Service
public class contactService {
    private static List<contact> contacts;
    private static long idCounter = 0;
    private static Date today = new Date();

    static {
    	contacts = new LinkedList<>(Arrays.asList(
        	
                new contact(++idCounter,"hamdon","hamdoon@g.com","99885544","hello admin"),
                new contact(++idCounter,"mari","mari@g.com","23242423","How are you"),
                new contact(++idCounter,"roo","roo@g.com","12312312","Where is Hamdoon"),
                new contact(++idCounter,"tamer hosni","tamer@g.com","2222331","Bye admin")
        ));
    }

    public List<contact> findAll() {
        return contacts;
    }

    public contact save(contact contact) {
        if(contact.getId() ==null) {
        	contact.setId(++idCounter);
        	contacts.add(contact);
        } else {
            deleteById(contact.getId());
            contacts.add(contact);
        }

        return contact;
    }

    public contact deleteById(long id) {
    	contact contact = findById(id);

        if(contact == null) return null;

        if(contacts.remove(contact))
            return contact;
        return null;
    }

    public contact findById(long id) {
        for(contact contact : contacts)
            if(contact.getId() == id)
                return contact;
        return null;
    }

  
}
