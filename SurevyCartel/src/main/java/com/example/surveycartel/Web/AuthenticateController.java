package com.example.surveycartel.Web;

import java.security.Principal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.surveycartel.Config.JwtUtil;
import com.example.surveycartel.Model.JwtRequest;
import com.example.surveycartel.Model.JwtResponse;
import com.example.surveycartel.Model.User;
import com.example.surveycartel.Service.UserService;
import com.example.surveycartel.exceptionhandler.UserNotFoundException;

@RestController
@CrossOrigin("*")
public class AuthenticateController {

	
	@Autowired
	private AuthenticationManager authenticationManager;
	
	@Autowired
	private UserService userService;
	
	
	@Autowired
	private JwtUtil jwtUtil;
	
	
	//generate token
	@PostMapping("/generate-token")
	public ResponseEntity<?> generateToken(@RequestBody JwtRequest jwtRequest) throws Exception{
		try {
			authenticate(jwtRequest.getEmail(),jwtRequest.getPassword());
			
		}catch(UserNotFoundException e) {
			e.printStackTrace();
			throw new Exception("User not found ");
		}
		
		// authenticate
		
		UserDetails userDetails = this.userService.loadUserByUsername(jwtRequest.getEmail());
		String token = this.jwtUtil.generateToken(userDetails);
		return ResponseEntity.ok(new JwtResponse(token));
		
	}
	
	
	private void authenticate(String email,String password) throws Exception {
		try {
			
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(email,password));
	
		}catch(DisabledException e) {
			throw new Exception("USER DISABLED" + e.getMessage());
		}catch(BadCredentialsException e) {
			throw new Exception("Invalid Credentials " + e.getMessage());
		}
	}
	// return the details of current user
	@GetMapping("/current-user")
	public User getCurrentUser(Principal principal) {
		System.out.println("Hello :---> " + (User)this.userService.loadUserByUsername(principal.getName()));
		return ((User)this.userService.loadUserByUsername(principal.getName()));
	}
	
}