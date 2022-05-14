package com.example.surveycartel.Service;

import java.util.List;

import com.example.surveycartel.Model.SurveyQuestion;


public interface SurveyQuestionService {
	public SurveyQuestion saveSurveyQuestion(SurveyQuestion surveyQuestion);
	public List<SurveyQuestion> getAllSurveyQuestion(Long surveyId);
	public List<SurveyQuestion> getSurveyQuestionById(Long surveyId);
	public Integer updateSurveyQuestion(SurveyQuestion surveyQuestion,Long surveyQuestionId);
	public Boolean deleteSurveyQuestion(Long surveyQuestionId);
}
