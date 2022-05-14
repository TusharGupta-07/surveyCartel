package com.example.surveycartel.Service;

import java.util.List;

import com.example.surveycartel.Model.Survey;


public interface SurveyService {
	public Survey saveSurvey(Survey survey);

	public List<Survey> getAllSurvey();

	public Survey getSurveyById(Long surveyId);

	public Integer updateSurvey(Survey survey, Long surveyId);
	
	public Boolean deleteSurvey(Long surveyId);
	
	public Survey expireSurvey(Long surveyId);
	
//	public Boolean isSurveyExpired(String surveyDate, Long surveyId);
}
