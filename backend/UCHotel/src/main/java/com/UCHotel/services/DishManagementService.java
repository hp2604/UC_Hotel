package com.UCHotel.services;

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
	
	private Dish dtoToDish (DishDto dto)
	{
		Dish dish=new Dish();
		dish.setDishName(dto.getDishName());
		dish.setCategory(dto.getCategory());
		dish.setDescription(dto.getDescription());
		dish.setPrice(dto.getPrice());
		dish.setTime(dto.getTime());
		dish.setAvail(dto.getAvail());
		return dish;
	}
	

}
