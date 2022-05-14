package com.example.surveycartel.Model;

import java.util.Collection;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
//@Getter @Setter
@Table(name = "user", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class User implements UserDetails{

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@Column(name="full_name")
	private String fullName;
	
	@Column(name="mobile_no")
	private String mobileNo;
	
	private String email;
	private String password;
	
//	@Column(name="home_address")
//	private String homeAddress;
	
	private String organization;
	
	private String profession;
	
	private boolean enabled = true;
	

	
	
	
//	//User table is connected with role table for -> if the user is admin or regular user
//	@ManyToMany(fetch=FetchType.EAGER, cascade=CascadeType.ALL)
//	@JoinTable(
//			name="users_roles",
//			joinColumns=@JoinColumn(
//					name="user_Id", referencedColumnName="id"
//					),
//			inverseJoinColumns = @JoinColumn(
//					name="role_id", referencedColumnName="id"
//					)
//			)
//	private Collection<Role> roles;

	 @OneToMany(cascade = CascadeType.ALL,fetch=FetchType.EAGER,mappedBy="user")
	    @JsonIgnore
	    private Set<UserRole> userRoles = new HashSet<>();

	public User(){
		
	}
	



	
	public User(String fullName, String mobileNo, String email, String password, String organization, String profession,
			boolean enabled, Set<UserRole> userRoles) {
		this.fullName = fullName;
		this.mobileNo = mobileNo;
		this.email = email;
		this.password = password;
		this.organization = organization;
		this.profession = profession;
		this.enabled = enabled;
		this.userRoles = userRoles;
	}






	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}



	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getOrganization() {
		return organization;
	}

	public void setOrganization(String organization) {
		this.organization = organization;
	}

	public String getProfession() {
		return profession;
	}

	public void setProfession(String profession) {
		this.profession = profession;
	}

	public Set<UserRole> getUserRoles() {
		return userRoles;
	}

	public void setUserRoles(Set<UserRole> userRoles) {
		this.userRoles = userRoles;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		Set<Authority> set = new HashSet<>();
		
		this.userRoles.forEach(userRole -> {
			set.add(new Authority(userRole.getRole().getRoleName()));
		});
		
		return set;
	}
	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return email;
	}
	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}
	@Override
	public boolean isEnabled() { 
		// TODO Auto-generated method stub
		return true;
	}
	
	
	
	
}
