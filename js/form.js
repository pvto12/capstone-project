//form functionality and re-routing
function getSavedList(key){
	return JSON.parse(localStorage.getItem(key)) || [];
}

function saveList(key, list){
	localStorage.setItem(key, JSON.stringify(list));
}

function Form(){
	let salutation = document.getElementById("salutation").value;
	let firstName = document.getElementById("firstname").value;
	let lastName = document.getElementById("lastname").value;
	let gender = document.getElementById("gender").value;
	let dob = document.getElementById("DOB").value;
	
	let dobDate = new Date(dob);
	let dobMonth = dobDate.getMonth() + 1;
	let dobDay = dobDate.getDate();

	let today = new Date();
	let todayMonth = today.getMonth() + 1;
	let todayDay = today.getDate();


	let record ={
		salutation: salutation,
		firstName: firstName,
		lastName: lastName,
		gender:gender,
		dob: dob
	};

	let redirectPage = "";
	let listName = "";

	if (dobMonth === todayMonth && dobDay === todayDay){
		listName = "present";
		redirectPage = "./html/birthdays.html";
	}
	else if (dobMonth > todayMonth || (dobMonth === todayMonth && dobDay > todayDay)){
		listName = "upcoming";
		redirectPage = "./html/upcoming.html";
	}
	else {
		listName = "archive";
		redirectPage = "./archive.html";
	}

	let list = getSavedList(listName);
    if (!list.some(item => item.firstName === record.firstName && item.lastName === record.lastName && item.dob === record.dob)) {
	list.push(record);
	saveList(listName, list);
    }

    alert("Success!!!\nPlease wait...");
    window.location.href = redirectPage;
}


function loadData(listName){
    let list = JSON.parse(localStorage.getItem(listName)) || [];
    let container = document.getElementById("dataContainer");
    
    if (list.length === 0){
        container.innerHTML = "<p>No records yet.</p>";
        return;
    }

    container.innerHTML = list.map(item => `
        <div class="record">
            <p><strong>Name:</strong> ${item.salutation} ${item.firstName} ${item.lastName}</p>
            <p><strong>Gender:</strong> ${item.gender}</p>
            <p><strong>Date of Birth:</strong> ${item.dob}</p>
        </div>
    `).join("");
}

document.addEventListener("DOMContentLoaded", function(){
    const form = document.getElementById("birthday-wishes");
    if (form){
    form.addEventListener("submit", function(event){
        event.preventDefault();
        Form();
    });
    }
	if (window.location.pathname.includes("birthdays.html")){
		loadData("present");
	}
	if (window.location.pathname.includes("upcoming.html")){
		loadData("upcoming");
	} 
	if (window.location.pathname.includes("archive.html")){
		loadData("archive");
	}
})

//clearing data
function clearAllData(){
    localStorage.removeItem("present");
    localStorage.removeItem("upcoming");
    localStorage.removeItem("archive");
    alert("All entry has been cleared!");
    location.reload(); 
}

