package com.UCHotel.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.UCHotel.entity.User;

public interface UserRepo extends JpaRepository<User,String> {
	public User findByUsername(String username);

}
