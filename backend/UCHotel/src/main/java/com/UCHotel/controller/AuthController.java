package com.UCHotel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.UCHotel.dto.UserDto;
import com.UCHotel.services.UserServiceImpl;
import com.UCHotel.util.JwtService;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins=" http://localhost:5173")
public class AuthController {
	@Autowired
	private AuthenticationManager manager ;
	
	@Autowired
	private JwtService jwt;
	
	@Autowired
	private UserServiceImpl user;
	
	
	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody UserDto dto){
		try
		{
			Authentication auth=manager.authenticate(new UsernamePasswordAuthenticationToken(dto.getUsername(),dto.getPassword()));
			if(auth.isAuthenticated())
			{
				final String token=jwt.generateToken(dto.getUsername());
			
				return ResponseEntity.status(HttpStatus.ACCEPTED).body(token);
			}
			else
			{
			
				return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Password or Email");
			}
	     }
		catch(Exception e)
		{
			System.out.println("Error occured");
			e.printStackTrace();
			return  ResponseEntity.status(HttpStatus.FORBIDDEN).body("error"+ e);
			
		}
	}
	@PostMapping("/signup")
	public ResponseEntity<?> signup(@RequestBody UserDto dto)
	{
		try
		{
			UserDto userdto=user.createUser(dto);
			return ResponseEntity.status(HttpStatus.CREATED).body(" Account Created Successfull ");
		}
		catch (Exception e)
		{
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Something Went Wrong");
		}
	}
	

}
