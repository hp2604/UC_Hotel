package com.UCHotel.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.UCHotel.dto.DishDto;
import com.UCHotel.entity.Dish;
import com.UCHotel.repo.DishRepo;

@Component
public class DishManagementService {
	
	private Dish dish;
	@Autowired
	private DishRepo repo;
	
	// Add Dish Service
	public boolean addDish(DishDto d)
	{
		boolean status=false;
		this.dish= dtoToDish(d);
		if(this.dish!=null)
		{
			repo.save(dish);
			status=true;
			
		}

		return status;
	}
	
	
	// Get All Dish Service
	public ArrayList<Dish> getDish(String category)
	{
		ArrayList<Dish> dishes=repo.findByCategory(category);
		return dishes;
		
	}
	
	private Dish dtoToDish (DishDto dto)
	{
		Dish dish=new Dish();
		dish.setDish_no(dto.getDish_no());
		dish.setDishName(dto.getDishName());
		dish.setCategory(dto.getCategory());
		dish.setDescription(dto.getDescription());
		dish.setPrice(dto.getPrice());
		dish.setTime(dto.getTime());
		dish.setAvail(dto.getAvail());
		return dish;
	}
	

}
