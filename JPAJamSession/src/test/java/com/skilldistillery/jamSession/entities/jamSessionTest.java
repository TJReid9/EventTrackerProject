package com.skilldistillery.jamSession.entities;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class jamSessionTest {
	
	private static EntityManagerFactory emf;
	private EntityManager em;
	private jamSession jam;

	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		emf = Persistence.createEntityManagerFactory("JPAJamSession");
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		emf.close();
	}

	@BeforeEach
	void setUp() throws Exception {
		em = emf.createEntityManager();
		jam = em.find(jamSession.class, 1);
	}

	@AfterEach
	void tearDown() throws Exception {
		em.close();
		jam = null;
	}

	@Test
	void test() {
		assertNotNull(jam);
		assertEquals("Jam at The Alley", jam.getTitle());
	}
	
	@Test
	void test_retrieveJamSession() {
		assertNotNull(jam);
		assertEquals("Jam at The Alley", jam.getTitle());
		assertTrue(jam.getId() > 0);
	}

}
