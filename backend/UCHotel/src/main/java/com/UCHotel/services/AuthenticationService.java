package com.UCHotel.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

import com.UCHotel.dto.UserDto;
import com.UCHotel.entity.User;
import com.UCHotel.repo.UserRepo;



@Component
public class AuthenticationService {

	private User user;

	@Autowired
	private UserRepo repo;

	private BCryptPasswordEncoder encoder=new BCryptPasswordEncoder();
	
	
	// Create User Service
	public UserDto createUser(UserDto u) {
		this.user =dtoToUser(u);
		String pass=encoder.encode(user.getPassword());
		user.setPassword(pass);
		User savedUser=	repo.save(user);
		UserDto userdto=userToDto(savedUser);
		return userdto;
	}
	
	
	// Get User Service 
	public UserDto getUser(String username) {
		this.user=repo.findByUsername(username);
		UserDto dto=userToDto(user);
		return dto;
		
	}
	
	// Convert User into dto
	public UserDto userToDto(User user)
	{
		UserDto userdto=new UserDto();
		userdto.setUsername(user.getUsername());
		userdto.setPassword(user.getPassword());
		

		return userdto;
	}

	// Dto to user
	public User dtoToUser(UserDto userdto)
	{
		User user=new User();
		user.setUsername(userdto.getUsername());
		user.setPassword(userdto.getPassword());

		return user;
	}
	
	


}
