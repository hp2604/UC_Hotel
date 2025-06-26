package com.UCHotel.entity;

import org.springframework.stereotype.Component;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Component
@Entity
@Data
public class Dish {
	
	private String dishName;
	@Id
	private String category;
	@Column(nullable=false)
	private String description;
	@Column(nullable=false)
	private int price,time;
	@Column(nullable=false)
	private String avail;

}
