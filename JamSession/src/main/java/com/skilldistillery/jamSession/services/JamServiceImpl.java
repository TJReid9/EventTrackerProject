package com.skilldistillery.jamSession.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skilldistillery.jamSession.entities.jamSession;
import com.skilldistillery.jamSession.repositories.JamRepository;

@Service
public class JamServiceImpl implements JamService {
	
	@Autowired
	private JamRepository jamRepo;

	@Override
	public List<jamSession> getAllJams() {
		return jamRepo.findAll();
	}

	@Override
	public jamSession retrieveJamSession(int jamId) {
		if(! jamRepo.existsById(jamId)) {
			return null;		
		}
		return jamRepo.searchById(jamId);
	}

	@Override
	public jamSession create(int jamId, jamSession newJam) {
		jamSession jam = jamRepo.searchById(jamId);
		if(jam != null) {
			newJam.setId(jamId);
			return jamRepo.saveAndFlush(newJam);
		}
		return null;
	}

	@Override
	public jamSession update(int jamId, jamSession updatingJam) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean delete(int jamId) {
		// TODO Auto-generated method stub
		return false;
	}

}
