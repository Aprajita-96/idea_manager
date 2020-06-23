package com.ibm.idea.ideamanager.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.PrePersist;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "ideas")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Idea {

	@Id
    private int id;
	
	@Column(name="global_client_name")
	private String globalClientName;

	@Column(name="portfolio")
	private String portfolio;

	@Column(name="team")
	private String team;
	
	@Column(name="application_name")
	private String applicationName;
	
	@Column(name="category")
	private String category;
	
	@Column(name="category_others")
	private String categoryOthers;
	
	@Column(name="idea_name")
	private String ideaName;
	
	@Column(name="details")
	private String ideaDetails;
	
	@Column(name="audience")
	private String intendedAudience;
	
	@Column(name="client_cost_reduction")
	private Double costReductionToClient;
	
	@Column(name="ibm_cost_reduction")
	private Double costReductionToIBM;
	
	@Column(name="revenue_to_ibm")
	private Double revenueToIBM;
	
	@Column(name="client_IBM_cost_reduction_in_hrs")
	private Integer costReductionToClientORIBMInHRS;
	
	@Column(name="comments")
    private String comments;
	
	@Column(name="createdBy")
	private String createdBy;

	@Column(name="createDate")
	private Date createDate;
	
	@PrePersist
	void preInsert() {
	   if (this.createDate == null)
	       this.createDate = new Date(new java.util.Date().getTime());
	}
}
