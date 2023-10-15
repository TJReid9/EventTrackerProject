console.log('script.js loaded');

window.addEventListener('load', function(e) {
	console.log('Page loaded');
	init();
});

function init() {

	loadAllJams();
	

	getJam();


//	document.jamLogDiv.addEventListener('click', function(e) {
//		e.preventDefault();
		
//	});




	document.newJamForm.addJamButton.addEventListener('click', function(e) {
		e.preventDefault();

		let newJam = {
			title: document.newJamForm.title.value,
			date: document.newJamForm.date.value,
			startTime: document.newJamForm.startTime.value,
			endTime: document.newJamForm.endTime.value,
			location: document.newJamForm.location.value,
			genre: document.newJamForm.genre.value,
			description: document.newJamForm.description.value,
//			image: document.newJamForm.imageUrl.value
		}
		addJam(newJam);
	});


	function loadAllJams() {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', 'api/jams');
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				if (xhr.status === 200) {
					let jamLog = JSON.parse(xhr.responseText);
					displayAllJams(jamLog);
				}
				else {
					displayError("Error Loading Jam Session: " + xhr.status);
				}
			}
		};
		xhr.send();
	}


	function displayAllJams(jamLog) {
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
		
		let tbody = document.createElement('tbody');
		table.appendChild(tbody);
		
		for (let i = 0; i < jamLog.length; i++) {
			let tr = document.createElement('tr');
			
			tr.setAttribute('id', jamLog[i].id);
			tr.addEventListener('click', getJam);
			
			let jamSession = Object.getOwnPropertyNames(jamLog[i]);
			
			for(let jamDetail of jamSession) {
				let td = document.createElement('td');
				td.textContent = jamLog[i][jamDetail];
				tr.appendChild(td);				
			}
			tbody.appendChild(tr);
		}
		logDiv.appendChild(table);
	}
}

function addJam(newJam) {
	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/jams');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 201) {
				let newJamUrl = xhr.getAllResponseHeaders('Content-type', 'application/json');
				console.log(newJamUrl)
				let createdJam = JSON.parse(xhr.responseText);
				displayJam(createdJam);
			}
			else {
				displayError("Error Adding Jam Session: " + xhr.status);
			}
		}
	}
	xhr.setRequestHeader('Content-type', 'application/json');
	let newJamJson = JSON.stringify(newJam);
	xhr.send(newJamJson);
}

function getJam(jamId) {
	console.log('In getJam: ' + jamId);
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/jams/' + jamId)

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let jamJson = xhr.responseText;
				let jam = JSON.parse(jamJson);
				displayJam(jam);
			}
			else {
				displayError('Film not found.');
			}
		}
		xhr.send();
	};

}

function displayError(message) {
	let dataDiv = document.getElementById('jamDataDiv');
	dataDiv.textContent = '';
	let h2 = document.createElement('h2');
	h2.textContent = message;
	dataDiv.appendChild(h2);
}

function displayJam(jam) {
	let dataDiv = document.getElementById('jamDataDiv');
	dataDiv.textContent = '';

	let h1 = document.createElement('h1');
	h1.textContent = jam.title;
	dataDiv.appendChild(h1);

	let ul = document.createElement('ul');
	dataDiv.appendChild(ul);

	let li = document.createElement('li');
	li.textContent = "Date: " + jam.sessionDate;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = "Start Time: " + jam.startTime;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = "End Time: " + jam.endTime;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = "Location: " + jam.location;
	ul.appendChild(li);

	li = document.createElement('li');
	li.textContent = "Genre: " + jam.musicGenre;
	ul.appendChild(li);

	let desc = document.createElement("blockquote");
	desc.textContent = "Description: " + jam.description;
	dataDiv.appendChild(desc);

	let images = document.createElement("input");
	images.textContent = "Images: " + jam.imageUrl;
	dataDiv.appendChild(images);
}




