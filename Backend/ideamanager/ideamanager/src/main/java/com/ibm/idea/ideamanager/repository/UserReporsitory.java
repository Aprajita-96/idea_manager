package com.ibm.idea.ideamanager.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ibm.idea.ideamanager.entity.User;

@Repository
public interface UserReporsitory extends CrudRepository<User, String> {

}
