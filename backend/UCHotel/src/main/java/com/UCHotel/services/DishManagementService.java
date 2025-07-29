package com.UCHotel.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.UCHotel.dto.DishDto;
import com.UCHotel.entity.Dish;
import com.UCHotel.repo.DishRepo;

import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class DishManagementService {
	
	private Dish dish;
	@Autowired
	private DishRepo repo;
	
	// Add Dish Service
	@Transactional
	public boolean addDish(DishDto d)
	{
		boolean status=false;
		this.dish= dtoToDish(d);
		if(this.dish!=null)
		{
			repo.save(dish);
			status=true;
			log.info("Dish Saved SuccessFully ");
			
		}
        log.error("Dish not Saved");
		return status;
	}
	
	
	// Get All Dish Service
	public ArrayList<Dish> getDish(String category)
	{
		ArrayList<Dish> dishes=repo.findByCategory(category);
		log.info("Data Fetched");
		return dishes;
		
	}
	
	
	// Update Dish
	@Transactional
	public boolean updateDish(DishDto dto) {
		boolean status = false;
		 this.dish =dtoToDish(dto);
		Dish exisitingDish=repo.findByDishNo(dish.getDishNo());		
		if(exisitingDish==null)
		{
			log.error("Error in Fetchin Dish ");
		}
		else
		{ 
			exisitingDish.setDishName(dish.getDishName());
			exisitingDish.setPrice(dish.getPrice());
			exisitingDish.setTime(dish.getTime());
			exisitingDish.setDescription(dish.getDescription());
			exisitingDish.setAvail(dish.getAvail());
			exisitingDish.setCategory(dish.getCategory());
			repo.save(exisitingDish);
			 status=true;
			 log.info("Data Updated ");
		}
		
		return status;
	}
	
	//Delete Dish
	public boolean deleteDish(int id)
	{
		boolean status=false;
		Dish dish=repo.findByDishNo(id);
		if(dish==null) {
		   log.error("Invalid Dish Id");
		}
		else
		{
			repo.delete(dish);
			log.info("Dish Deleted");
			status =true;
		}
		return status;
		
	}
	
	// Dto into dish
	private Dish dtoToDish (DishDto dto)
	{
		Dish dish=new Dish();
		dish.setDishNo(dto.getDishNo());
		dish.setDishName(dto.getDishName());
		dish.setCategory(dto.getCategory());
		dish.setDescription(dto.getDescription());
		dish.setPrice(dto.getPrice());
		dish.setTime(dto.getTime());
		dish.setAvail(dto.getAvail());
		return dish;
	}
	
	

}
