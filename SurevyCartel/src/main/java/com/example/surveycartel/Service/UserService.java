package com.example.surveycartel.Service;

import java.util.Set;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.example.surveycartel.Model.SurveyQuestion;
import com.example.surveycartel.Model.User;
import com.example.surveycartel.Model.UserRole;
import com.example.surveycartel.exceptionhandler.UserNotFoundException;



public interface UserService extends UserDetailsService{
	
	public User save(User user, Set<UserRole> userRoles) throws UserNotFoundException;

	public User findByEmail(String email);

	public Boolean deleteUser(Long id);
	
	public Integer updateUser(User user, String email);

}
