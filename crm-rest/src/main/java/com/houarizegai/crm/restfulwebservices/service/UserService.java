package com.houarizegai.crm.restfulwebservices.service;

import com.houarizegai.crm.restfulwebservices.model.Patient;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

@Service
public class UserService {
    private static List<Patient> Patients;
    private static long idCounter = 0;

    static {
    	Patients = new LinkedList<>(Arrays.asList(
                new Patient(++idCounter, "Maryam","male","m@m.com","99999999","60"),
                new Patient(++idCounter, "Maimuona","male","m@m.com","99999999","12")
           
        ));
    }

    public List<Patient> findAll() {
        return Patients;
    }

    public Patient save(Patient Patient) {
        if(Patient.getId() < 1) {
        	Patient.setId(++idCounter);
            Patients.add(Patient);
        } else {
            deleteById(Patient.getId());
            Patients.add(Patient);
        }

        return Patient;
    }

    public Patient deleteById(long id) {
    	Patient Patient = findById(id);

        if(Patient == null) return null;

        if(Patients.remove(Patient))
            return Patient;
        return null;
    }

    public Patient findById(long id) {
        for(Patient Patient : Patients)
            if(Patient.getId() == id)
                return Patient;
        return null;
    }
}
