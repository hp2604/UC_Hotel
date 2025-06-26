package com.UCHotel.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.UCHotel.entity.Dish;

public interface DishRepo extends JpaRepository<Dish,String>{
	
	
}
