package com.UCHotel.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.graphql.GraphQlProperties.Http;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.UCHotel.dto.DishDto;
import com.UCHotel.services.DishManagementService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins=" http://localhost:5173")
public class AdminController {
	
	@Autowired
	DishManagementService service;
	
	
	@PostMapping("/dish")
	public ResponseEntity<?> adddish(@RequestBody DishDto dto){
		boolean result=service.addDish(dto);
		if(result!=false)
		{
			return ResponseEntity.status(HttpStatus.ACCEPTED).body("true");
		}
		else
		{
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(false);
		}
		
		
	}

}
