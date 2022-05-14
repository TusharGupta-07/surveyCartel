 package com.example.surveycartel.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.example.surveycartel.Model.User;

@Repository
@Transactional
public interface UserRepository extends JpaRepository<User, Long>{
	User findByEmail(String email);
	
	@Modifying
	@Query("update User u2 set u2.fullName = ?1, u2.mobileNo = ?2 , u2.organization = ?3, u2.profession = ?4 where u2.email = ?5")
	Integer setUserInfoByEmailId(String fullName, String mobileNo, String organization, String profession, String email);
	
}
