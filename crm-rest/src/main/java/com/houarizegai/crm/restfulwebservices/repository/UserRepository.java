package com.houarizegai.crm.restfulwebservices.repository;

import com.houarizegai.crm.restfulwebservices.model.Users;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {
}
