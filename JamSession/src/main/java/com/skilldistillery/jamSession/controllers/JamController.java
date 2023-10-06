package com.skilldistillery.jamSession.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.skilldistillery.jamSession.entities.jamSession;
import com.skilldistillery.jamSession.services.JamService;

@RestController
@RequestMapping("api")
public class JamController {
	
	@Autowired
	private JamService jamService;
	
	@GetMapping("jams")
	public List<jamSession> listJams() {
		return jamService.getAllJams();
	}

}
