console.log('script.js loaded');

window.addEventListener('load', function(e) {
	console.log('document loaded');
	init();
})

function init() {
	let showLog = document.getElementById('showLogButton');
	showLog.addEventListener('click', function(e) {
		let logDiv = document.getElementById('jamLogDiv');
		logDiv.textContent = "";
		let formDiv = document.getElementById('newJamFormDiv');
		formDiv.textContent = "";
		loadAllJams();


	})
	let newJam = document.getElementById('addJamButton');
	newJam.addEventListener('click', function(e) {
		let jamDiv = document.getElementById('jamLogDiv');
		jamDiv.textContent = "";
		let formDiv = document.getElementById('newJamFormDiv');
		formDiv.textContent = "";
		displayJamForm();

	})
	
	let editJam = document.getElementById('editJamButton');
	editJam.addEventListener('click', function(e) {
		let jamDiv = document.getElementById('jamLogDiv');
		jamDiv.textContent = "";
		let formDiv = document.getElementById('updateJamDiv');
		displayUpdateJamForm(formDiv);
	})

	document.addEventListener('click', function(e) {
		let target = e.target.closest("#add");
		if (target) {
			e.preventDefault();
			console.log('(add) EventListener heard!');

			let jamSession = {
				title: target.parentElement.title.value,
				date: target.parentElement.date.value,
				startDate: target.parentElement.startDate.value,
				finishDate: target.parentElement.finishDate.value,
				songLink: target.parentElement.songLink.value,
				siteLink: target.parentElement.siteLink.value,
				gear: target.parentElement.gear.value,
				bpm: target.parentElement.bpm.value,
				description: target.parentElement.description.value,
				imgUrl: document.newJamForm.imgUrl.value
			}
			createJam(jamSession);
		}
	})
/*
	document.addEventListener('click', function(e) {
		let target = e.target.closest('#updateJam');
		if (target) {
			console.log('(update) EventListener heard!');
			let jamId = e.taget.perentElement.previousElementSibling.firstElementChild.id;
			console.log(jamId);
			getJam(jamId);

		}
	})
*/	
	let deleteJam = document.getElementById('deleteJamButton');
	deleteJam.addEventListener('click', function(e) {
		let target = e.target.closest("#delete");
		if (target) {
			e.preventDefault();
			console.log('(delete) EventListener heard!');
			let jamId = e.taget.perentElement.previousElementSibling.firstElementChild.id;
			console.log(jamId);
			deleteJam(jamId);
		}
	})
	
	document.addEventListener('click', function(e) {
		let target = e.target.closest("#update");
		if (target) {
			e.preventDefault();
			console.log('update event listener heard!')
			console.log(target.id.value)
			let updatedJam = {
				
				title: target?.parentElement?.title?.value,
				date: target?.parentElement?.date?.value,
				startDate: target?.parentElement?.startDate?.value,
				finishDate: target?.parentElement?.finishDate?.value,
				songLink: target?.parentElement?.songLink?.value,
				siteLink: target?.parentElement?.siteLink?.value,
				gear: target?.parentElement?.gear?.value,
				bpm: target?.parentElement?.bpm?.value,
				description: target?.parentElement?.description?.value,
				imgUrl: document?.newJamForm?.imgUrl?.value
					
					}
					updateJam(updatedJam);
		}			
	})
}	

function createJam(jam) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/jams');
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let createdJam = JSON.parse(xhr.responseText);
				createdJam.textContent = "";
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
				updatedJam.textContent = "";
				let formDiv = document.getElementById('updateJamFormDiv');
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


function deleteJam(jam) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/jams/' + jam.id);

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				console.log('delete worked')
				let logDiv = document.getElementById('jamLogDiv');
				logDiv.textContent = "";
				let formDiv = document.getElementById('newJamFormDiv');
				formDiv.textContent = "";
				loadAllJams();
			} else {
				displayError("Delete Failed: " + xhr.status);
			}
		}
	}
	xhr.send();
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
	th3.textContent = "Start Date";
	tr.appendChild(th3);

	let th4 = document.createElement('th');
	th4.textContent = "BPM";
	tr.appendChild(th4);

	let tbody = document.createElement('tbody');
	table.appendChild(tbody);

	for (let i = 0; i < jamLog.length; i++) {
		let tr = document.createElement('tr');

		tr.setAttribute('id', jamLog[i].id);
		tr.addEventListener('click', function(e) {
			let jamId = e.target.parentElement.id;
			console.log(jamId);
			getJam(jamId);
		})

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


function getJam(jamId) {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/jams/' + jamId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let jamJson = xhr.responseText;
				let jamDetails = JSON.parse(jamJson);
//				createJamObject(jam);
				displayJam(jamDetails);
				
			}
			else {
				displayError('Jam not found.');
			}
		}
	}
	xhr.send();
}


function displayJam(jamDetails) {
	let dataDiv = document.getElementById('jamDataDiv');
	dataDiv.textContent = '';
	
	let h6 = document.createElement('h6');
	h6.textContent = jamDetails.id;
	dataDiv.appendChild(h6);

	let h1 = document.createElement('h1');
	h1.textContent = jamDetails.title;
	dataDiv.appendChild(h1);

	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);

	let li = document.createElement('li');
	li.textContent = "Start Date: " + jamDetails.startDate;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = "Finish Date: " + jamDetails.finishDate;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = "Song Link: " + jamDetails.songLink;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = "Site Link: " + jamDetails.siteLink;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = "Instruments/Equipment: " + jamDetails.gear;
	ul.appendChild(li);
	
	li = document.createElement('li');
	li.textContent = "BPM: " + jamDetails.bpm;
	ul.appendChild(li);

	let desc = document.createElement("blockquote");
	desc.textContent = "Description: " + jamDetails.description;
	dataDiv.appendChild(desc);

	let images = document.createElement("input");
	images.textContent = "Images: " + jamDetails.imgUrl;
	dataDiv.appendChild(images);

}


function displayJamForm() {
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
			<label for="imageUrl">Images:</label>
			<input id="imageUrl" type="url" name="imageUrl"/>
			<br>
			<button id="add" class="btn btn-secondary">Add</button>
			<button id="cancel" class="btn btn-danger">Cancel</button>
		</form>`;
	div.innerHTML = newJamForm;

}

function displayUpdateJamForm(jam) {
	console.log('update form');
//	let divId = "jamDetails" + jam.id;
	let div = document.getElementById('updateJamDiv');
	let updateForm =
		`<h2>Edit Session Details</h2>
	<form name="updateJamForm">
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
			<label for="imageUrl">Images:</label>
			<input id="imageUrl" type="url" name="imageUrl"/>
			<br>
			<br>
			<button id="update" class="btn btn-secondary">Update</button>
			<button id="cancel" class="btn btn-danger">Cancel</button>
		</form>`;
	div.innerHTML = updateForm;

}



