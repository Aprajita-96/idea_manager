package com.ibm.idea.ideamanager.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.ibm.idea.ideamanager.entity.Idea;

@Repository
public interface IdeaReporsitory extends CrudRepository<Idea, String> {

	@Query(value = "SELECT max(id) FROM Idea")
	public Integer max();
}
