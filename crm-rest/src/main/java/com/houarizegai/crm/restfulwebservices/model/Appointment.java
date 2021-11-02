package com.houarizegai.crm.restfulwebservices.model;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
public class Appointment {
    @Id
    @GeneratedValue
    private Long id;
    private Long patientID;
	private String patientName;
    private String speciality;
    private String age;
   
    private Date appointmentDt;
    private String msg;
    private String gsm;
    private String gender;
    private String doctor;
    private String doctorNote;
    
	public Appointment() {

    }
	
 


    public Appointment(Long id, Long patientID, String patientName, String speciality, String age, Date appointmentDt,
			String msg, String gsm, String gender, String doctor,  String doctorNote) {
		
		this.id = id;
		this.patientID = patientID;
		this.patientName = patientName;
		this.speciality = speciality;
		this.age = age;
		this.appointmentDt = appointmentDt;
		this.msg = msg;
		this.gsm = gsm;
		this.gender = gender;
		this.doctor = doctor;
		this.doctorNote = doctorNote;
	}




	public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                 ", patientID='" + patientID + '\'' +
                ", patientName='" + patientName + '\'' +
                  ", speciality='" + speciality + '\'' +
                ", age='" + age + '\'' +
                ", appointmentDt='" + appointmentDt + '\'' +
                 ", msg='" + msg + '\'' +
                 ", gsm='" + gsm + '\'' +
                 ", gender='" + gender + '\'' +
                 ", doctor='" + doctor + '\'' +
                  ", doctorNote='" + doctorNote + '\'' +
                '}';
    }

	public String getGsm() {
		return gsm;
	}

	public void setGsm(String gsm) {
		this.gsm = gsm;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

    public String getPatientName() {
		return patientName;
	}
	public void setPatientName(String patientName) {
		this.patientName = patientName;
	}
	public String getSpeciality() {
		return speciality;
	}
	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
	public String getAge() {
		return age;
	}
	public void setAge(String age) {
		this.age = age;
	}
	public Date getAppointmentDt() {
		return appointmentDt;
	}
	public void setAppointmentDt(Date appointmentDt) {
		this.appointmentDt = appointmentDt;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public String getDoctor() {
		return doctor;
	}
	public void setDoctor(String doctor) {
		this.doctor = doctor;
	}
	public Long getPatientID() {
		return patientID;
	}
	public void setPatientID(Long patientID) {
		this.patientID = patientID;
	}




	public String getDoctorNote() {
		return doctorNote;
	}




	public void setDoctorNote(String doctorNote) {
		this.doctorNote = doctorNote;
	}
}