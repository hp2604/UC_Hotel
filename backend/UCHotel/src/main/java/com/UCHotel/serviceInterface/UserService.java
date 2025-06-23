package com.UCHotel.serviceInterface;

import com.UCHotel.dto.UserDto;

public interface UserService {
	
	public UserDto getUser(String username);
	
	public UserDto createUser(UserDto u);

}
