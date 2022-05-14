package com.example.surveycartel.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.example.surveycartel.Service.UserService;

@SuppressWarnings("deprecation")
@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled=true)
public class SecurityConfiguration extends WebSecurityConfigurerAdapter{
	
	
	
	@Bean
	public BCryptPasswordEncoder passwordEncoder()
	{
		return new BCryptPasswordEncoder();
	}
	

//	@Bean
//	public PasswordEncoder passwordEncoder()
//	{
//		return NoOpPasswordEncoder.getInstance()
//;	}
	
	@Autowired
	private JwtAuthenticationEntryPoint unauthorizedHandler;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	JwtAuthenticationFilter jwtAuthenticationFilter;
	
	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception{
		return super.authenticationManagerBean();
	}
	
//	@Bean
//	public DaoAuthenticationProvider authenticationProvider()
//	{
//		DaoAuthenticationProvider auth = new DaoAuthenticationProvider();
//		auth.setUserDetailsService(userService).passwordEncoder(passwordEncoder);
//		auth.setPasswordEncoder(passwordEncoder());
//		return auth;
//	}
	
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception
	{
		
		auth.userDetailsService(this.userService).passwordEncoder(passwordEncoder());
//		auth.authenticationProvider(authenticationProvider());
	}
	
	@Override
	protected void configure(HttpSecurity http) throws Exception
	{
		http
		.csrf() 
		.disable()
		.cors()
		.disable()
		.authorizeRequests()
		.antMatchers("/generate-token","/user").permitAll()
		.antMatchers(HttpMethod.OPTIONS).permitAll()
		.anyRequest().authenticated()
		.and()
		.exceptionHandling().authenticationEntryPoint(unauthorizedHandler)
		.and()
		.sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
	
	http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
		
//		http.httpBasic().disable();
//		http.cors().and().csrf().disable();
//		
		
		
		
//		
//		http.authorizeRequests().antMatchers(
//				"/img/**",
//				"/js/**",
//				"/css/**").permitAll()
//		.anyRequest().authenticated()
//		.and()
//		.formLogin()
//		.permitAll()
//		.and()
//		.logout()
//		.invalidateHttpSession(true)
//		.clearAuthentication(true)
//		.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
//		.logoutSuccessUrl("/login?logout")
//		.permitAll();
//		
		
	}

	
}
