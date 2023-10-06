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
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public jamSession create(jamSession jam) {
		// TODO Auto-generated method stub
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
