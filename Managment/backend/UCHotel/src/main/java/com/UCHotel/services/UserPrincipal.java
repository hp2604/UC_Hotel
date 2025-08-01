package com.UCHotel.services;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.UCHotel.dto.UserDto;



public class UserPrincipal implements UserDetails {
	private UserDto dto;
	public UserPrincipal(UserDto dto)
	{
		this.dto=dto;

	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return Collections.singleton(new SimpleGrantedAuthority("admin"));
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return dto.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return dto.getUsername();
	}

}
