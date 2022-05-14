package com.example.surveycartel.Repository;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.surveycartel.Model.UserSurveyResponse;

@Transactional
public interface UserSurveyResponseRepository extends JpaRepository<UserSurveyResponse, Long> {
	@Modifying
	@Query("update UserSurveyResponse u5 set u5.surveyResponse = ?1 where u5.userSurveyResponseId = ?2")
	Integer setUserSurveyResponseInfoById(Boolean surveyResponse, Long userSurveyResponseId);
}
