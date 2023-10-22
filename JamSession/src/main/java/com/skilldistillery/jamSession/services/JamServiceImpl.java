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
			original.setStartDate(updatingJam.getStartDate());
			original.setFinishDate(updatingJam.getFinishDate());
			original.setSongLink(updatingJam.getSongLink());
			original.setSiteLink(updatingJam.getSiteLink());
			original.setGear(updatingJam.getGear());
			original.setBpm(updatingJam.getBpm());
			original.setDescription(updatingJam.getDescription());
			original.setImgUrl(updatingJam.getImgUrl());
						
		}
		return jamRepo.saveAndFlush(original);
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
