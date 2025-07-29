package com.UCHotel.configuration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.UCHotel.services.UserDetailServices;
import com.UCHotel.util.JwtFilter;



@Configuration
@EnableWebSecurity
public class Config {
	@Autowired
	UserDetailServices userdetail;
	@Autowired
	JwtFilter jwtFilter;

	//Authentication Provider
	@SuppressWarnings("deprecation")
	@Bean
	public AuthenticationProvider authentication() {
		@SuppressWarnings("deprecation")
		DaoAuthenticationProvider provider=new DaoAuthenticationProvider();
		provider.setUserDetailsService(userdetail);
		provider.setPasswordEncoder(new BCryptPasswordEncoder());
		return provider;

	}
	@Bean
	 public CorsConfigurationSource corsConfigurationSource() {
	        CorsConfiguration config = new CorsConfiguration();
	        config.setAllowedOrigins(List.of("http://localhost:5173"));
	        config.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
	        config.setAllowedHeaders(List.of("*"));
	        config.setAllowCredentials(true); // Allow Authorization headers or cookies

	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        source.registerCorsConfiguration("/**", config);
	        return source;
	    }


	//Security Config
	@Bean
	public SecurityFilterChain chain (HttpSecurity http) throws Exception
	{
		http.csrf(csrf->csrf.disable())
			.authorizeHttpRequests(auth -> auth.requestMatchers("/admin/**").hasRole("admin")
					.anyRequest().permitAll()			   )
			 .formLogin(login -> login.disable())     
		        .httpBasic(basic -> basic.disable()) 
			.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
			.addFilterBefore(jwtFilter,UsernamePasswordAuthenticationFilter.class)
			.cors(cors -> {cors.configurationSource(corsConfigurationSource());});
		return http.build();

	}


	//Authentication
	@Bean
	public AuthenticationManager auth(AuthenticationConfiguration config) throws Exception
	{
		return config.getAuthenticationManager();
	}


}
