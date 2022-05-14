package com.example.surveycartel.Web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.surveycartel.Model.SurveyQuestion;
import com.example.surveycartel.Service.SurveyQuestionService;


@RestController
@RequestMapping("/surveyQuestion")
@CrossOrigin("*")
public class SurveyQuestionController {

	@Autowired
	private SurveyQuestionService surveyQuestionService;

	@PostMapping("{surveyId}")
	public ResponseEntity<SurveyQuestion> saveSurveyQuestion(@RequestBody SurveyQuestion surveyQuestion) {
		return new ResponseEntity<SurveyQuestion>(surveyQuestionService.saveSurveyQuestion(surveyQuestion),
				HttpStatus.CREATED);
	}

	@GetMapping("{surveyId}")
	public List<SurveyQuestion> getSurveyQuestionById(@PathVariable("surveyId") Long surveyId) {
		return surveyQuestionService.getAllSurveyQuestion(surveyId);
	}

//	@GetMapping("/surveyquestionid/{surveyQuestionId}")
//	public ResponseEntity<SurveyQuestion> getLoginByLoginId(@PathVariable("surveyQuestionId") Long surveyQuestionId) {
//		return new ResponseEntity<SurveyQuestion>(surveyQuestionService.getSurveyQuestionById(surveyQuestionId),
//				HttpStatus.OK);
//	}

	@PutMapping("{surveyQuestionId}")
	public ResponseEntity<Integer> updateSurveyQuestionById(@PathVariable("surveyQuestionId") Long surveyQuestionId,
			@RequestBody SurveyQuestion surveyQuestion) {
		return new ResponseEntity<Integer>(surveyQuestionService.updateSurveyQuestion(surveyQuestion, surveyQuestionId),
				HttpStatus.OK);
	}
	
	@DeleteMapping("{surveyQuestionId}")
	public ResponseEntity<Boolean> deleteSurveyByQuestionId(@PathVariable("surveyQuestionId") Long surveyQuestionId){
		return new ResponseEntity<Boolean>(surveyQuestionService.deleteSurveyQuestion(surveyQuestionId),HttpStatus.OK);
		
	}

}
