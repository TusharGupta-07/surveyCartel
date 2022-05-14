package com.example.surveycartel.Model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "surveyQuestion")
@JsonIgnoreProperties({ "hibernateLazyInitializer" })
public class SurveyQuestion implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long questionId;
	private Long surveyId;
	private String questionTitle = "Title";
	private String questionDescription;
	private String userEmail;

	public SurveyQuestion() {
		super();
		// TODO Auto-generated constructor stub
	}




	public SurveyQuestion(Long questionId, Long surveyId, String questionTitle, String questionDescription,
			String userEmail) {
		this.questionId = questionId;
		this.surveyId = surveyId;
		this.questionTitle = questionTitle;
		this.questionDescription = questionDescription;
		this.userEmail = userEmail;
	}




	public Long getQuestionId() {
		return questionId;
	}

	public void setQuestionId(Long questionId) {
		this.questionId = questionId;
	}

	public Long getSurveyId() {
		return surveyId;
	}

	public void setSurveyId(Long surveyId) {
		this.surveyId = surveyId;
	}

	public String getQuestionTitle() {
		return questionTitle;
	}

	public void setQuestionTitle(String questionTitle) {
		this.questionTitle = questionTitle;
	}

	public String getQuestionDescription() {
		return questionDescription;
	}

	public void setQuestionDescription(String questionDescription) {
		this.questionDescription = questionDescription;
	}

	@Override
	public String toString() {
		return "SurveyQuestion [questionId=" + questionId + ", surveyId=" + surveyId + ", questionTitle="
				+ questionTitle + ", questionDescription=" + questionDescription + "]";
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	
}