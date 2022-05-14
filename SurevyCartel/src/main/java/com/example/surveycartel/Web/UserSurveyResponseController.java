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

import com.example.surveycartel.Model.UserSurveyResponse;
import com.example.surveycartel.Service.UserSurveyResponseService;


@CrossOrigin("*")
@RestController
@RequestMapping("/userSurveyResponse")
public class UserSurveyResponseController {
	@Autowired
	private UserSurveyResponseService userSurveyResponseService;

	@PostMapping
	public ResponseEntity<UserSurveyResponse> saveUserResponse(@RequestBody UserSurveyResponse userSurveyResponse) {
		return new ResponseEntity<UserSurveyResponse>(
				userSurveyResponseService.saveUserSurveyResponse(userSurveyResponse), HttpStatus.CREATED);
	}

	@GetMapping("{surveyId}")
	public List<UserSurveyResponse> getAllUserSurveyResponseBySurveyId(@PathVariable("surveyId") Long surveyId) {
		return userSurveyResponseService.getAllUserSurveyResponse(surveyId);
	}
	
	
	@GetMapping("/checkUserHasAnswered/{userEmail}/{surveyId}")
	public Boolean getIsUserHasAnswered(@PathVariable("userEmail") String userEmail, @PathVariable("surveyId") Long surveyId) {
		return userSurveyResponseService.isUserHasAnswered(userEmail, surveyId);
	}
	
	@GetMapping("getNoOfResponse/{surveyId}")
	public Integer getNoOfResponses(@PathVariable("surveyId") Long surveyId)
	{
		return userSurveyResponseService.calcNoOfResponses(surveyId);
	}
	
	@GetMapping("/questionId/{questionId}")
	public List<UserSurveyResponse> getResponseByQuestionId(@PathVariable("questionId") Long questionId) {
		return userSurveyResponseService.getAllUserSurveyResponseQuestionById(questionId);
	}

	@GetMapping("/userSurveyResponseid/{userSurveyResponseId}")
	public ResponseEntity<UserSurveyResponse> getLoginByLoginId(
			@PathVariable("userSurveyResponseId") Long userSurveyResponseId) {
		return new ResponseEntity<UserSurveyResponse>(
				userSurveyResponseService.getUserSurveyResponseById(userSurveyResponseId), HttpStatus.OK);
	}

	@PutMapping("{userSurveyResponseId}")
	public ResponseEntity<Integer> updateLogin(@PathVariable("userSurveyResponseId") Long userSurveyResponseId,
			@RequestBody UserSurveyResponse userSurveyResponse) {
		return new ResponseEntity<Integer>(
				userSurveyResponseService.updateUserSurveyResponse(userSurveyResponse, userSurveyResponseId),
				HttpStatus.OK);
	}
	
	@DeleteMapping("{userSurveyResponseId}")
	public ResponseEntity<Boolean> deleteLogin(@PathVariable("userSurveyResponseId") Long userSurveyResponseId){
		return new ResponseEntity<Boolean>(userSurveyResponseService.deleteUserSurveyResponse(userSurveyResponseId),HttpStatus.OK);
		
	}
	
	

}
