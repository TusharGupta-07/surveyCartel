package com.example.surveycartel.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.example.surveycartel.Model.SurveyQuestion;


@Transactional
public interface SurveyQuestionRepository extends JpaRepository<SurveyQuestion, Long>{

	@Modifying
	@Query("update SurveyQuestion u2 set u2.surveyId = ?1, u2.questionTitle = ?2 , u2.questionDescription = ?3 where u2.questionId = ?4")
	Integer setSurveyQuestionInfoById(Long surveyId, String questionTitle, String questionDescription, Long questionId);
	
}
