package com.example.surveycartel.Service;

import java.util.List;

import com.example.surveycartel.Model.UserSurveyResponse;


public interface UserSurveyResponseService {
	public UserSurveyResponse saveUserSurveyResponse(UserSurveyResponse userSurveyResponse);

	public List<UserSurveyResponse> getAllUserSurveyResponse(Long surveyId);
	public List<UserSurveyResponse> getAllUserSurveyResponseQuestionById(Long questionId);


	public UserSurveyResponse getUserSurveyResponseById(Long userSurveyResponseId);

	public Integer updateUserSurveyResponse(UserSurveyResponse userSurveyResponse,
			Long userSurveyResponseId);
	
	public Boolean deleteUserSurveyResponse(Long userSurveyResponseId);
	
	public Boolean isUserHasAnswered(String userEmail, Long surveyId);
	
	public  Integer calcNoOfResponses(Long surveyId);
	
	
}
