package com.example.surveycartel.Model;

import java.io.Serializable;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "survey")
@JsonIgnoreProperties({ "hibernateLazyInitializer" })
public class Survey implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long surveyId;
	private String surveyTitle;
	private Date surveyDate;

	private String surveyDescription;
	private Boolean expireStatus;
	private String userEmail;

	public Survey() {
		super();
		expireStatus = true;
	}

	


	public Survey(String surveyTitle, Date surveyDate, String surveyDescription, Boolean expireStatus,
			String userEmail) {
		this.surveyTitle = surveyTitle;
		this.surveyDate = surveyDate;
		this.surveyDescription = surveyDescription;
		this.expireStatus = expireStatus;
		this.userEmail = userEmail;
	}




	public Long getSurveyId() {
		return surveyId;
	}

	public void setSurveyId(Long surveyId) {
		this.surveyId = surveyId;
	}

	public String getSurveyTitle() {
		return surveyTitle;
	}

	public void setSurveyTitle(String surveyTitle) {
		this.surveyTitle = surveyTitle;
	}

	public Date getSurveyDate() {
		return surveyDate;
	}

	public void setSurveyDate(Date surveyDate) {
		this.surveyDate = surveyDate;
	}

	public String getSurveyDescription() {
		return surveyDescription;
	}

	public void setSurveyDescription(String surveyDescription) {
		this.surveyDescription = surveyDescription;
	}

	public Boolean getExpireStatus() {
		return expireStatus;
	}

	public void setExpireStatus(Boolean expireStatus) {
		this.expireStatus = expireStatus;
	}

	@Override
	public String toString() {
		return "Survey [surveyId=" + surveyId + ", surveyTitle=" + surveyTitle + ", surveyDate=" + surveyDate
				+ ", surveyDescription=" + surveyDescription + ", expireStatus=" + expireStatus + "]";
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}
	
}