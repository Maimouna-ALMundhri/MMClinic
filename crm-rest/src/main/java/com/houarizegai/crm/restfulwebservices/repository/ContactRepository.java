package com.houarizegai.crm.restfulwebservices.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.houarizegai.crm.restfulwebservices.model.contact;

@Repository
public interface ContactRepository extends JpaRepository<contact, Long> {

}