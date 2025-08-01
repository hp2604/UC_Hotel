package com.UCHotel.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.UCHotel.dto.UserDto;



@Service
public class UserDetailServices implements UserDetailsService {
	@Autowired
	private AuthenticationService user;

	private UserDto dto=null;


	@Override
	public UserDetails loadUserByUsername(String username)throws UsernameNotFoundException  {
	 dto=user.getUser(username);
	 if(dto==null)
	 {
		 throw new UsernameNotFoundException("User not found");
	 }
	return org.springframework.security.core.userdetails.User.builder()
			.username(dto.getUsername())
			.password(dto.getPassword())
			.roles("admin")
			.build();
	}

}
