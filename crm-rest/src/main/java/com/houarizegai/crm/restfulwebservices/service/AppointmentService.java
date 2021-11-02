package com.houarizegai.crm.restfulwebservices.service;

import com.houarizegai.crm.restfulwebservices.model.Appointment;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Date;
import java.util.LinkedList;
import java.util.List;

@Service
public class AppointmentService {
    private static List<Appointment> appointments;
    private static long idCounter = 0;
    private static Date today = new Date();

    static {
        appointments = new LinkedList<>(Arrays.asList(
        	
                new Appointment(++idCounter,10004L, "Ahmed", "eye", "12",today,"heeelp","12345678","M", "hamdoon","doctornote"),
                new Appointment(++idCounter,10005L, "m", "eye", "12",today,"heeelp","4234234","M", "hamdoon","4234234")

        ));
    }

    public List<Appointment> findAll() {
        return appointments;
    }

    public Appointment save(Appointment appointment) {
        if(appointment.getId() ==null) {
            appointment.setId(++idCounter);
            appointments.add(appointment);
        } else {
            deleteById(appointment.getId());
            appointments.add(appointment);
        }

        return appointment;
    }

    public Appointment deleteById(long id) {
        Appointment appointment = findById(id);

        if(appointment == null) return null;

        if(appointments.remove(appointment))
            return appointment;
        return null;
    }

    public Appointment findById(long id) {
        for(Appointment appointment : appointments)
            if(appointment.getId() == id)
                return appointment;
        return null;
    }

    public Appointment findByPId(long id) {
        for(Appointment appointment : appointments)
            if(appointment.getPatientID()==id)
                return appointment;
        return null;
    }
}
