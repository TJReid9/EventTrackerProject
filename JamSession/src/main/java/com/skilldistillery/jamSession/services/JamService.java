package com.skilldistillery.jamSession.services;

import java.util.List;

import com.skilldistillery.jamSession.entities.jamSession;

public interface JamService {
	
	List<jamSession> getAllJams();
	jamSession retrieveJamSession(int jamId);
	jamSession create(jamSession jam);
	jamSession update(int jamId, jamSession updatingJam);
	boolean delete(int jamId);

}
