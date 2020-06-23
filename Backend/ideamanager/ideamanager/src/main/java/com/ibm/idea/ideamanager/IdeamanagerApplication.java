package com.ibm.idea.ideamanager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;

@Configuration
@SpringBootApplication
@EnableAutoConfiguration
public class IdeamanagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(IdeamanagerApplication.class, args);
	}

}
