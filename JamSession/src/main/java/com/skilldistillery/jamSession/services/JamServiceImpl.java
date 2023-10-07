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
	public jamSession create(jamSession newJam) {
		if(newJam != null) {		
			return jamRepo.saveAndFlush(newJam);
		}
		return null;
	}

	@Override
	public jamSession update(int jamId, jamSession updatingJam) {
		jamSession original = jamRepo.searchById(jamId);
		if(original != null) {
			original.setTitle(updatingJam.getTitle());
			original.setCreateDate(updatingJam.getCreateDate());
			original.setLastUpdate(updatingJam.getLastUpdate());
			original.setSessionDate(updatingJam.getSessionDate());
			original.setStartTime(updatingJam.getStartTime());
			original.setEndTime(updatingJam.getEndTime());
			original.setLocation(updatingJam.getLocation());
			original.setMusicGenre(updatingJam.getMusicGenre());
			original.setDescription(updatingJam.getDescription());
			jamRepo.saveAndFlush(original);			
		}
		jamRepo.save(updatingJam);
		return original;
	}
	
	

	@Override
	public boolean delete(int jamId) {
		boolean deleted = false;
		if (jamRepo.existsById(jamId)) {
			jamRepo.deleteById(jamId);
			deleted = true;
		}
		return deleted;
	}
}
