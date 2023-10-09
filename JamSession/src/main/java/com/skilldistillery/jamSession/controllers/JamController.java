package com.skilldistillery.jamSession.controllers;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	public List<jamSession> listJams(HttpServletResponse resp) {
		return jamService.getAllJams();
	}
	
	@GetMapping("jams/{jamId}")
	public jamSession retrieveJamSession(@PathVariable int jamId, HttpServletResponse resp) {
		jamSession jam = jamService.retrieveJamSession(jamId);
		if (jam == null ) {
			resp.setStatus(404);			
		}
		return jam;
	}
	
	@PostMapping("jams")
	public jamSession create(@RequestBody jamSession newJam, HttpServletResponse res, HttpServletRequest req) {
		jamSession createdJam = null;
		try {
			createdJam = jamService.create(newJam);
			res.setStatus(201);
			res.setHeader("Location", "http://localhost:8085/api/jams" + createdJam.getId());
			StringBuffer url = req.getRequestURL();
			url.append("/").append(createdJam.getId());
			res.setHeader("Location", url.toString());
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		return createdJam;
	}
	
	@PutMapping("jams/{jamId}")
	public jamSession updatePost(@PathVariable Integer jamId, @RequestBody jamSession updatingJam, HttpServletResponse res) {
		jamSession updatedJam = null;
		try {
			updatedJam = jamService.update(jamId, updatingJam);
			if (updatedJam == null) {
				res.setStatus(404);
			}
		} catch (Exception e) {
			res.setStatus(400);
			e.printStackTrace();
		}
		return updatedJam;
	}
	
	@DeleteMapping("jams/{jamId}")
	public void delete(@PathVariable Integer jamId, HttpServletResponse res) {
		if(jamId == null) {
			res.setStatus(404);
		}
		try {
			jamService.delete(jamId);
				res.setStatus(204);
			
		} catch (Exception e) {
			e.printStackTrace();
			res.setStatus(400);
		}
		
	}

}
