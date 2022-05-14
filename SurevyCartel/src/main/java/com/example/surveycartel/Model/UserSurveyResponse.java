package com.example.surveycartel.Model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "userSurveyResponse")
@JsonIgnoreProperties({ "hibernateLazyInitializer" })
public class UserSurveyResponse implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	Long userSurveyResponseId;
	private Long questionId;
	private String userEmail;
	Boolean surveyResponse;
	private Long surveyId;  

	public UserSurveyResponse() {
	}

	public UserSurveyResponse(Long userSurveyResponseId, Long questionId, String userEmail, Boolean surveyResponse, Long surveyId) {
		super();
		this.userSurveyResponseId = userSurveyResponseId;
		this.questionId = questionId;
		this.userEmail = userEmail;
		this.surveyResponse = surveyResponse;
		this.surveyId =surveyId;
	}

	public Long getUserSurveyResponseId() {
		return userSurveyResponseId;
	}

	public void setUserSurveyResponseId(Long userSurveyResponseId) {
		this.userSurveyResponseId = userSurveyResponseId;
	}

	public Long getQuestionId() {
		return questionId;
	}

	public void setQuestionId(Long questionId) {
		this.questionId = questionId;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public Boolean getSurveyResponse() {
		return surveyResponse;
	}

	public void setSurveyResponse(Boolean surveyResponse) {
		this.surveyResponse = surveyResponse;
	}

	public Long getSurveyId() {
		return surveyId;
	}

	public void setSurveyId(Long surveyId) {
		this.surveyId = surveyId;
	}
	@Override
	public String toString() {
		return "UserSurveyResponse [userSurveyResponseId=" + userSurveyResponseId + ", questionId=" + questionId
				+ ", userEmail=" + userEmail + ", surveyResponse=" + surveyResponse + "]";
	}

	
}