package com.example.surveycartel.Service.ServiceImpl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.surveycartel.Model.Survey;
import com.example.surveycartel.Model.UserSurveyResponse;
import com.example.surveycartel.Repository.SurveyRepository;
import com.example.surveycartel.Repository.UserSurveyResponseRepository;
import com.example.surveycartel.Service.SurveyService;
import com.example.surveycartel.Service.UserSurveyResponseService;


@Service
public class SurveyServiceImpl implements SurveyService {
	@Autowired
	SurveyRepository surveyRepository;

	@Autowired
	UserSurveyResponseRepository userSurveyResponseRepository;
	
	@Autowired
	UserSurveyResponseService userSurveyResponseService;
	
	
//	SurveyService surveyService;
	@Override
	public Survey saveSurvey(Survey survey) {
		return surveyRepository.save(survey);
	}

	@Override
	public List<Survey> getAllSurvey() {
		List<Survey> surveyList = surveyRepository.findAll();
		
//		for(Survey survey : surveyList)
//		{
//			userSurveyResponseService.isUserHasAnswered(survey.getUserEmail(), survey.getSurveyId());
//		}
		
		return surveyList;
		
		
	}
	// Bydate(getallsurverByDate)

	@Override
	public Survey getSurveyById(Long surveyId) {
		return surveyRepository.getById(surveyId);
	}

	// Create a update survey status method
	@Override
	public Integer updateSurvey(Survey survey, Long surveyId) {
		return surveyRepository.setSurveyInfoById(survey.getSurveyTitle(), survey.getSurveyDate(),
				survey.getSurveyDescription(), survey.getExpireStatus(), survey.getUserEmail(),surveyId);
	}

	@Override
	public Boolean deleteSurvey(Long surveyId) {
		try {
			surveyRepository.deleteById(surveyId);
			return true;
		}catch(Exception e) {
			return false;
		}
		
	}

	@Override
	public Survey expireSurvey(Long surveyId) {

		Survey surveyData = surveyRepository.getById(surveyId);

			if(surveyData.getSurveyId().equals(surveyId)) {
				if(surveyData.getExpireStatus() == true)
				{
					surveyData.setExpireStatus(false);
				}
			}
			updateSurvey(surveyData, surveyId);
		
		return surveyData;
		
	}

	
//	@Override
//	public Boolean isSurveyExpired(String surveyDate, Long surveyId) {
//		
//		List<Survey> surveyList = surveyRepository.findAll();
//		
//		
//		for(Survey survey : surveyList)
//		{
//			if(survey.getSurveyDate().equals(surveyDate) && survey.getSurveyId().equals(surveyId)) {
//				
//			}
//		}
//		return null;
//	}
}
