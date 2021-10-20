package com.houarizegai.crm.restfulwebservices.service;

import java.util.Arrays;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.houarizegai.crm.restfulwebservices.model.Patient;

@Service
public class PatientService {
    private static List<Patient> Patients;
    private static long idCounter = 0;

    static {
        Patients = new LinkedList<>(Arrays.asList(
                new Patient(++idCounter, "houari2", new Date(), "2admin@houarizegai.net","12345678","M"),
                new Patient(++idCounter, "omar2", new Date(), "2omar@houarizegai.net","12345678","M"),
                new Patient(++idCounter, "fatima2", new Date(), "2fatima@houarizegai.net","12345678","M")
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