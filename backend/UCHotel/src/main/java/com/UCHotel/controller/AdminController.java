package com.UCHotel.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.UCHotel.dto.DishDto;
import com.UCHotel.entity.Dish;
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
	
	
	@GetMapping("/dish/{category}")
	public ResponseEntity<?> getDishes(@PathVariable String category)
	{
		List<Dish> dish=service.getDish(category);
		if(dish.isEmpty())
		{
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Dish not Found");			
		}
		else
			return ResponseEntity.status(HttpStatus.FOUND).body(dish);
	}

}
