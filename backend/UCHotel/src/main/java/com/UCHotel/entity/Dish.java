package com.UCHotel.entity;

import org.springframework.stereotype.Component;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Component
@Entity
@Data
public class Dish {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int dishNo;
	
	private String category;
	
	@Column(nullable=false)
	private String description,dishName,avail;
	
	@Column(nullable=false)
	private int price,time;
	
	
	
}
