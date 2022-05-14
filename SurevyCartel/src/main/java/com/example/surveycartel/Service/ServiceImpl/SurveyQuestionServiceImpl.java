package com.example.surveycartel.Service.ServiceImpl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.surveycartel.Model.SurveyQuestion;
import com.example.surveycartel.Repository.SurveyQuestionRepository;
import com.example.surveycartel.Service.SurveyQuestionService;



@Service
public class SurveyQuestionServiceImpl implements SurveyQuestionService {
	@Autowired
	SurveyQuestionRepository surveyQuestionRepository;

	@Override
	public SurveyQuestion saveSurveyQuestion(SurveyQuestion surveyQuestion) {

		return surveyQuestionRepository.save(surveyQuestion);
	}

	@Override
	public List<SurveyQuestion> getAllSurveyQuestion(Long surveyId) {

		return surveyQuestionRepository.findAll().stream().filter(sc -> sc.getSurveyId().equals(surveyId))
				.collect(Collectors.toList());
	}

	@Override
	public List<SurveyQuestion> getSurveyQuestionById(Long surveyId) {
		
		return surveyQuestionRepository.findAll().stream().filter(sc -> sc.getSurveyId().equals(surveyId))
				.collect(Collectors.toList());

//		return surveyQuestionRepository.getById(surveyId);
	}

	@Override
	public Integer updateSurveyQuestion(SurveyQuestion surveyQuestion, Long questionId) {
		return surveyQuestionRepository.setSurveyQuestionInfoById(surveyQuestion.getSurveyId(), surveyQuestion.getQuestionTitle(),
				surveyQuestion.getQuestionDescription(), questionId);
	}

	@Override
	public Boolean deleteSurveyQuestion(Long questionId) {
		try {
			surveyQuestionRepository.deleteById(questionId);
			return true;
		}catch(Exception e) {
			return false;
		}
	}
}