package com.UCHotel.repo;

import java.util.ArrayList;

import org.springframework.data.jpa.repository.JpaRepository;

import com.UCHotel.entity.Dish;

public interface DishRepo extends JpaRepository<Dish,String>{
	
	public ArrayList<Dish> findByCategory(String category);
	
	
}
