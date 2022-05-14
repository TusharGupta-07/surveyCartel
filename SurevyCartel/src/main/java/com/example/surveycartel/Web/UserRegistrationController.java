package com.example.surveycartel.Web;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.surveycartel.Model.Mail;
import com.example.surveycartel.Model.Role;
import com.example.surveycartel.Model.SurveyQuestion;
import com.example.surveycartel.Model.User;
import com.example.surveycartel.Model.UserRole;
import com.example.surveycartel.Service.MailService;
import com.example.surveycartel.Service.UserService;

@CrossOrigin("*")
@RestController
@RequestMapping(value = "/user", method = { RequestMethod.GET, RequestMethod.POST })
public class UserRegistrationController {

	@Autowired
	private UserService userService;

	@Autowired
	private MailService mailService;
	public UserRegistrationController(UserService userService) {
		super();
		this.userService = userService;
	}

//	@GetMapping
//	public String OshowUserRegistrationForm(Model model)
//	{
//		model.addAttribute("user", new UserRegistrationDto());
//		return "registration";
//	}
//	
	@ExceptionHandler(Exception.class)
	@PostMapping("")
	public ResponseEntity<User> userRegistrationAccount(@RequestBody User user) throws Exception{
//
//		User newUser = this.userService.save(user);
		User existing = userService.findByEmail(user.getEmail());

		if (existing != null) {
			return ResponseEntity.status(HttpStatus.FOUND).build();

		}
		
		Set<UserRole> roles = new HashSet<>();
		Role role = new Role();
		role.setRoleId(45L);
		role.setRoleName("USER");
		
		UserRole userRole = new UserRole();
		userRole.setRole(role);
		userRole.setUser(user);
		
		roles.add(userRole);
		
		String userEmail = user.getEmail();
		
		Mail mail = new Mail();
		
		mail.setMailFrom("testing.purpose8080@gmail.com");
		mail.setMailTo(userEmail);
		mail.setMailSubject("Welcome " + user.getFullName());
		mail.setMailContent("Welcome " + user.getFullName() + " To Survey Cartel, You are now ready to login and create new Surveys."+" Your EmailId is -> "+user.getEmail());
		this.mailService.sendMail(mail);

		return ResponseEntity.ok(this.userService.save(user,roles));

//		return ResponseEntity.of(Optional.of(newUser));


//		User newUser = this.userService.save(registrationDto);
//		System.out.println(newUser);

//		return ResponseEntity.ok(this.userService.addUser(user));
	}
	
//	@GetMapping("/{email}")
//	public User getUser(@PathVariable("email") String Email) {
//		this.userService.findByEmail(email);
//	}

	@PutMapping("/update/{email}")
	public ResponseEntity<Integer> upadateUserByEmailId(@PathVariable("email") String email, @RequestBody User user) {
		return new ResponseEntity<Integer>(userService.updateUser(user, email),HttpStatus.OK);
	}
	
	
	@DeleteMapping("{userId}")
	public Boolean deleteUser(@PathVariable("userId") Long id)
	{
		this.userService.deleteUser(id);
		return true;
	}
}
