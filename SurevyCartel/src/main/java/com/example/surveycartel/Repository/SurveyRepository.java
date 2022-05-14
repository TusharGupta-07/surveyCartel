package com.example.surveycartel.Repository;

import java.sql.Date;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.example.surveycartel.Model.Survey;

@Transactional
public interface SurveyRepository extends JpaRepository<Survey, Long> {
	
	@Modifying
	@Query("update Survey u3 set u3.surveyTitle = ?1, u3.surveyDate = ?2, u3.surveyDescription = ?3, u3.expireStatus = ?4, u3.userEmail=?5 where u3.surveyId = ?6")
	Integer setSurveyInfoById(String surveyTitle, Date surveyDate, String surveyDescription,  Boolean expireStatus,String userEmail,
			Long surveyId);

}
 