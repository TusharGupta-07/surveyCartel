package com.example.surveycartel.Service.ServiceImpl;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.surveycartel.Model.User;
import com.example.surveycartel.Model.UserRole;
import com.example.surveycartel.Repository.RoleRepository;
import com.example.surveycartel.Repository.UserRepository;
import com.example.surveycartel.Service.UserService;
import com.example.surveycartel.exceptionhandler.UserNotFoundException;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserRepository userRepository;
	@Autowired
	private RoleRepository roleRepository;
	
	@Lazy
	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	public UserServiceImpl(UserRepository userRepository) {
		super();
		this.userRepository = userRepository;
	}

	@Override
	public User save(User user, Set<UserRole> userRoles) throws UserNotFoundException{
		// TODO Auto-generated method stub
		
				
		User local = this.userRepository.findByEmail(user.getEmail());
		
		if(local != null)
		{
			System.out.println("User Found");
			throw new UserNotFoundException();
		}
		
		else {
			for(UserRole ur:userRoles)
			{
				roleRepository.save(ur.getRole());
			}
			
			user.getUserRoles().addAll(userRoles);
			user.setPassword(passwordEncoder.encode(user.getPassword()));


		}
//		User newUser = new User(user.getFullName(), 
//				user.getMobileNo(), 
//				user.getEmail(), 
//				passwordEncoder.encode(user.getPassword()), 
//				user.getOrganization(),
//				user.getProfession(),
//				
//				)
		
		
//				Arrays.asList(new Role("ROLE_USER")));
		
		
		return this.userRepository.save(user);
	}

	public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

//	
//	@Override
//	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
//		User user = userRepository.findByEmail(username);
//		if(user == null)
//		{
//			throw new UsernameNotFoundException("User Not Found");
//		}
//		
//		return new org.springframework.security.core.userdetails.User(user.getEmail(), user.getPassword(), mapRolesToAuthorities(user.getRoles()));
//	}
//	
//	private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Role> roles)
//	{
//		return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
//		
//	}

	@Override
	public Boolean deleteUser(Long id) {

		this.userRepository.deleteById(id);
		return true;
		
	}

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		
			
				User user = this.userRepository.findByEmail(email);
				
				
				if(user==null) {
					System.out.println("User not found");
					throw new UsernameNotFoundException("No user found !! ");
				}
				
				System.out.println(user);
				return user;


	}

	@Override
	public Integer updateUser(User user, String email) {

		return userRepository.setUserInfoByEmailId(user.getFullName(),user.getMobileNo(), user.getOrganization(), user.getProfession(), user.getEmail());
	}





}
