package com.skilldistillery.jamSession.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.jamSession.entities.jamSession;

public interface JamRepository extends JpaRepository<jamSession, Integer> {
	jamSession searchById(int jamId);
	boolean existsById(int jamId);

}
