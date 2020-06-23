package com.ibm.idea.ideamanager.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ibm.idea.ideamanager.entity.Idea;
import com.ibm.idea.ideamanager.entity.User;
import com.ibm.idea.ideamanager.objects.Login;
import com.ibm.idea.ideamanager.repository.IdeaReporsitory;
import com.ibm.idea.ideamanager.repository.UserReporsitory;

@CrossOrigin(origins = "*")
@RestController
public class LoginController {

	@Autowired
	private UserReporsitory userRepository;

	@Autowired
	private IdeaReporsitory ideaRepository;
	
	@PostMapping(path = "/login", consumes = "application/json")
	public String login(@RequestBody Login login) {
		System.out.println(login);
		return "{\"result\":\"success\"}";
		/*User user = userRepository.findById(login.getUserId()).get();
		if(!user.getPassword().equals(login.getPassword())) {
			return "{\"result\":\"failure\"}";
		}
		else {
			return "{\"result\":\"success\"}";			
		}*/
	}

	
	@PostMapping(path = "/addIdea", consumes = "application/json")
	public String addIdea(@RequestBody Idea idea) {
		System.out.println(idea);
		
		Integer maxId = this.ideaRepository.max();
		if(maxId==null)
			maxId=Integer.valueOf(0);
		idea.setId(maxId+1);
		
		ideaRepository.save(idea);
		return "{\"result\":\"success\"}";
	}
	
	@GetMapping(path = "/listIdea")
	public List<Idea> listIdea() {
		
		List<Idea> ideas = new ArrayList<Idea>();
		
		Iterable<Idea> ideaIt = this.ideaRepository.findAll();
		ideaIt.forEach(ideas::add);

		return ideas;
	}
}
