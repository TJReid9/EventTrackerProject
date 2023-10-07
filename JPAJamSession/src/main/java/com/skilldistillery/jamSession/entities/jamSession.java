package com.skilldistillery.jamSession.entities;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.Objects;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity

@Table(name="jam_session")
public class jamSession {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	private String title;
	
	@Column(name = "create_date")
	private LocalDateTime createDate;
	
	@Column(name = "last_update")
	private LocalDateTime lastUpdate;
	
	@Column(name = "session_date")
	private LocalDate sessionDate;
	
	@Column(name = "start_time")
	private LocalTime startTime;
	
	@Column(name = "end_time")
	private LocalTime endTime;
	
	private String location;
	
	@Column(name = "music_genre")
	private String musicGenre;
	
	private String description;
	//TODO Add other properties

	public jamSession() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public LocalDateTime getCreateDate() {
		return createDate;
	}

	public void setCreateDate(LocalDateTime createDate) {
		this.createDate = createDate;
	}

	public LocalDateTime getLastUpdate() {
		return lastUpdate;
	}

	public void setLastUpdate(LocalDateTime lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	public LocalDate getSessionDate() {
		return sessionDate;
	}

	public void setSessionDate(LocalDate sessionDate) {
		this.sessionDate = sessionDate;
	}

	public LocalTime getStartTime() {
		return startTime;
	}

	public void setStartTime(LocalTime startTime) {
		this.startTime = startTime;
	}

	public LocalTime getEndTime() {
		return endTime;
	}

	public void setEndTime(LocalTime endTime) {
		this.endTime = endTime;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getMusicGenre() {
		return musicGenre;
	}

	public void setMusicGenre(String musicGenre) {
		this.musicGenre = musicGenre;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		jamSession other = (jamSession) obj;
		return id == other.id;
	}

	@Override
	public String toString() {
		return "jamSession [id=" + id + ", title=" + title + ", createDate=" + createDate + ", lastUpdate=" + lastUpdate
				+ ", sessionDate=" + sessionDate + ", startTime=" + startTime + ", endTime=" + endTime + ", location="
				+ location + ", musicGenre=" + musicGenre + ", description=" + description + "]";
	}

}
