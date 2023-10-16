console.log('script.js loaded');

window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
})

function init() {
		loadAllJams();
	let displayLog = document.getElementById('jamLogDiv');
	displayLog.addEventListener('click', function(e) {
			
	
})
	let newJam = document.getElementById('addJamButton');
	newJam.addEventListener('click', function(e) {
		let jamDiv = document.getElementById('jamDataDiv');
		jamDiv.textContent = "";
		let formDiv = document.getElementById('newJamFormDiv');
		formDiv.textContent = "";
		displayNewJamForm();

	})

	document.addEventListener('click', function(e) {
		let target = e.target.closest("#add");
		if (target) {
			e.preventDefault();
			console.log('(add) EventListener heard!');


			let jamSession = {
				jamLog: target.parentElement.jamLog.value,
				title: target.parentElement.title.value,
				date: target.parentElement.date.value,
				startTime: target.parentElement.startTime.value,
				endTime: target.parentElement.endTime.value,
				location: target.parentElement.location.value,
				genre: target.parentElement.genre.value,
				description: target.parentElement.description.value
				//	imageUrl: document.newJamForm.imageUrl.value
			}
			createJam(jamSession);
		}
	})

	document.addEventListener('click', function(e) {
		let target = e.target.closest('#updateJam');
		if (target) {
			e.preventDefault();
			console.log('(update) EventListener heard!');
		}
	})

	document.addEventListener('click', function(e) {
		let target = e.target.closest("#deleteJam");
		if (target) {
			e.preventDefault
			console.log('(delete) EventListener heard!');
			let jamId = e.taget.perentElement.previousElementElementSibling.firstElementChild.id;
			console.log(jamId);
			deleteJam(jamId);
		}
	})






function createJam(jam) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/jams');
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let createdJam = JSON.parse(xhr.responseText);
				let formDiv = document.getElementById('newJamFormDiv');
				formDiv.textContent = "";
				loadAllJams();

			} else {
				displayError("Error Creating Jam Session: " + xhr.status);
			}
		}
	}
	let jamJson = JSON.stringify(jam);
	xhr.send(jamJson);
}


function updateJam(jam) {
	let xhr = new XMLHttpRequest();
	xhr.open('PUT', 'api/jams/' + jam.id);

	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201) {
				let updatedJam = JSON.parse(xhr.responseText);
				let formDiv = document.getElementById('newJamFormDiv');
				formDiv.textContent = "";
				loadAllJams();
			} else {
				displayError("Error updateding Jam Session: " + xhr.status);
			}
		}
	}
	let jamJson = JSON.stringify(jam);
	xhr.send(jamJson);
}


function deleteJam(jamId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/jams/' + jamId);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				console.log('delete worked')
				let jamDiv = document.getElementById('jamLogDiv');
				jamDiv.textContent = "";
				let formDiv = document.getElementById('newJamFormDiv');
				formDiv.textContent = "";
				loadAllJams();
			} else {
				//TODO
			}
		}
	}
	xhr.send();
}


function getJam(jamId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/jams/' + jamId);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let jamJson = xhr.responseText;
				let jamDetails = JSON.parse(jamJson);
				displayJam(jamDetails);
			}
			else {
				displayError('Jam not found.');
			}
		}
		xhr.send();
	};
}


function loadAllJams() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/jams');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let jamLog = JSON.parse(xhr.responseText);
				displayJamLog(jamLog);
			}
			else {
				displayError("Error Loading Jam Session: " + xhr.status);
			}
		}
	}
	xhr.send();
};

function displayError(message) {
	let dataDiv = document.getElementById('jamDataDiv');
	dataDiv.textContent = '';
	let h2 = document.createElement('h2');
	h2.textContent = message;
	dataDiv.appendChild(h2);
}


function displayJamLog(jamLog) {
	console.log('Display JamLog loaded')
	let logDiv = document.getElementById("jamLogDiv");
	logDiv.textContent = '';

	let table = document.createElement('table');

	let thead = document.createElement('thead')
	table.appendChild(thead);

	let tr = document.createElement('tr');
	thead.appendChild(tr);

	let th1 = document.createElement('th');
	th1.textContent = "ID";
	tr.appendChild(th1);

	let th2 = document.createElement('th');
	th2.textContent = "Title";
	tr.appendChild(th2);

	let th3 = document.createElement('th');
	th3.textContent = "Date";
	tr.appendChild(th3);

	let th4 = document.createElement('th');
	th4.textContent = "Location";
	tr.appendChild(th4);

	let tbody = document.createElement('tbody');
	table.appendChild(tbody);

	for (let i = 0; i < jamLog.length; i++) {
		let tr = document.createElement('tr');

		tr.setAttribute('id', jamLog[i].id);
		tr.addEventListener('click', getJam);

		let jamSession = Object.getOwnPropertyNames(jamLog[i]);

		for (let jamDetail of jamSession) {
			let td = document.createElement('td');
			td.textContent = jamLog[i][jamDetail];
			tr.appendChild(td);

			tbody.appendChild(tr);
		}
		logDiv.appendChild(table);
	}
}


function displayJam(jamDetails) {
	let dataDiv = document.getElementById('jamDataDiv');
	dataDiv.textContent = '';

	let h1 = document.createElement('h1');
	h1.textContent = jamDetails.title;
	dataDiv.appendChild(h1);

	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);

	let li = document.createElement('li');
	li.textContent = "Date: " + jamDetails.sessionDate;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = "Start Time: " + jamDetails.startTime;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = "End Time: " + jamDetails.endTime;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = "Location: " + jamDetails.location;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = "Genre: " + jamDetails.musicGenre;
	ul.appendChild(li);

	let desc = document.createElement("blockquote");
	desc.textContent = "Description: " + jamDetails.description;
	dataDiv.appendChild(desc);

	let images = document.createElement("input");
	images.textContent = "Images: " + jam.imageUrl;
	dataDiv.appendChild(images);

}

function displayNewJamForm() {
	let div = document.getElementById('newJamFormDiv');

	let newJamForm =
		`<h2>Add Jam Session</h2>
	<form name="newJamForm">
			<label for="title">Title</label>
			<input id="title" type="text" name="title">
			<br><br>
			<label for="date">Date:</label>
			<input id="date" type="date" name="date"/>
			<br><br>
			<label for="startTime">Start Time:</label>
			<input id="startTime" type="time" name="startTime"/>
			<br><br>
			<label for="endTime">End Time:</label>
			<input id="endTime" type="time" name="endTime"/>
			<br><br>
			<label for="location">Location:</label>
			<input id="location" type="text" name="location"/>
			<br><br>
			<label for="genre">Genre:</label>
			<input id="genre" type="text" name="genre"/>
			<br><br>
			<label for="description">Description:</label>
			<input id="description" type="text" name="description"/>
			<br><br>
			<label for="image">Images:</label>
			<input id="imageUrl" type="url" name="images"/>
			
			<input id="addJamButton" type="submit">
		</form>`;
	div.innerHTML = newJamForm;

}
}
