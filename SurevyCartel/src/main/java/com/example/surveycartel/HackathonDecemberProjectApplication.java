package com.example.surveycartel;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class HackathonDecemberProjectApplication{// implements CommandLineRunner{
	
//	@Autowired
//	private UserService userService;
//	
//	@Autowired
//	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		
		

//		Mail mail = new Mail();
//		mail.setMailFrom("testing.purpose8080@gmail.com");
//		mail.setMailTo("shipu251999@gmail.com");
//		mail.setMailSubject("Spring Boot - Email testing");
//		mail.setMailContent("Testing Successfull, fuck and enjoy");

		SpringApplication.run(HackathonDecemberProjectApplication.class, args);
//		ApplicationContext ctx = SpringApplication.run(HackathonDecemberProjectApplication.class, args);
//		MailService mailService = (MailService) ctx.getBean("mailService");
//		mailService.sendMail(mail);
//		
		
//		ApplicationContext ctx = SpringApplication.run(HackathonDecemberProjectApplication.class, args);
//		MailService mailService = (MailService) ctx.getBean("mailService");
		
	}

//	@Override
//	public void run(String... args) throws Exception {
//		User user = new User();
//		user.setFullName("Taran");
//		user.setMobileNo("1234567890");
//		user.setProfession("Fsd");
//		user.setPassword(this.bCryptPasswordEncoder.encode("abc"));
//		user.setEmail("abc@gmail.com");
//		user.setOrganization("lkfjasljfasda");
//		
//		Role role1 = new Role();
//		role1.setRoleId(44L);
//		role1.setRoleName("ADMIN");
//		
//		Set<UserRole> userRoleSet = new HashSet<>();
//		UserRole userRole = new UserRole();
//		userRole.setRole(role1);
//		userRole.setUser(user);
//		
//		userRoleSet.add(userRole);
//		user.setUserRoles(userRoleSet);
//		
//		User user1 = this.userService.save(user);
//		System.out.println(user1.getUsername());		
//	}

}
