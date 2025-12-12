// firebase configuraton
// import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
// import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBWjrhKby3-z5I6XTZ_RnjLqVGfwx2j_8E",
  authDomain: "capstone-project-d45ed.firebaseapp.com",
  projectId: "capstone-project-d45ed",
  storageBucket: "capstone-project-d45ed.firebasestorage.app",
  messagingSenderId: "822973326470",
  appId: "1:822973326470:web:b5bee4f5916d097b415d07",
  measurementId: "G-W5JDPH5F6S"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);




//form functionality and re-routing
function getSavedList(key) {
	return JSON.parse(localStorage.getItem(key)) || [];
}

function saveList(key, list) {
	localStorage.setItem(key, JSON.stringify(list));
}

async function Form() {
	let salutation = document.getElementById("salutation").value;
	let firstName = document.getElementById("firstname").value;
	let lastName = document.getElementById("lastname").value;
	let gender = document.getElementById("gender").value;
	let dob = document.getElementById("dob").value;
	let hobby = document.getElementById("hobby").value;
	let quote = document.getElementById("quote").value;
	let dept = document.getElementById("department").value;
	let bio = document.getElementById("bio").value;


	let dobDate = new Date(dob);
	let dobMonth = dobDate.getMonth() + 1;
	let dobDay = dobDate.getDate();

	let today = new Date();
	let todayMonth = today.getMonth() + 1;
	let todayDay = today.getDate();

	let record = {salutation, firstName, lastName, gender, dob, hobby,
		quote, dept, bio
	};

	let redirectPage = "";
	let listName = "";

	if (dobMonth === todayMonth && dobDay === todayDay) {
		listName = "present";
		redirectPage = "./html/birthdays.html";
	} else if (
		dobMonth > todayMonth ||
		(dobMonth === todayMonth && dobDay > todayDay)
	) {
		listName = "upcoming";
		redirectPage = "./html/upcoming.html";
	} else {
		listName = "archive";
		redirectPage = "./archive.html";
	}

	await addDoc(collection(db, listName), record);

	// let list = getSavedList(listName);
	// if (!list.some((item) => 
	// 		item.firstName === record.firstName && 
	// 		item.lastName === record.lastName && item.dob === record.dob)) 
	// {
	// 	list.push(record);
	// 	saveList(listName, list);
	// }

    alert("Your input was successful");
    window.location.href = redirectPage;
}

async function loadData(listName) {
	// let list = JSON.parse(localStorage.getItem(listName)) || [];
	let container = document.getElementById("dataContainer");
	let querySnapshot =await getDocs(collection(db, listName));
	if (querySnapshot.empty){
		container.innerHTML = "<p>No records yet.</p>";
		return;
	}
	// if (list.length === 0) {
	// 	container.innerHTML = "<p>No records yet.</p>";
	// 	return;
	// }

	// container.innerHTML = list.map((item) => `
    //     <div class="record">
    //         <p><strong>Name:</strong> ${item.salutation} ${item.firstName} ${item.lastName}</p>
    //         <p><strong>Gender:</strong> ${item.gender}</p>
    //         <p><strong>Date of Birth:</strong> ${item.dob}</p>
    //         <p><strong>Hobby:</strong> ${item.hobby}</p>
    //         <p><strong>Quote:</strong> ${item.quote}</p>
    //         <p><strong>Department:</strong> ${item.dept}</p>
    //         <p><strong>Short Bio:</strong> ${item.bio}</p>
    //     </div>
    // `).join("");

	let html = "";
	querySnapshot.forEach((doc) => {
		const item = doc.data();
		html += `
		<div class="record">
            <p><strong>Name:</strong> ${item.salutation} ${item.firstName} ${item.lastName}</p>
            <p><strong>Gender:</strong> ${item.gender}</p>
            <p><strong>Date of Birth:</strong> ${item.dob}</p>
            <p><strong>Hobby:</strong> ${item.hobby}</p>
            <p><strong>Quote:</strong> ${item.quote}</p>
            <p><strong>Department:</strong> ${item.dept}</p>
            <p><strong>Short Bio:</strong> ${item.bio}</p>
        </div>
		`;
	});
	container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function () {
	const form = document.getElementById("birthday-wishes");
	if (form) {
		form.addEventListener("submit", function (event) {
			event.preventDefault();
			Form();
		});
	}
	if (window.location.pathname.endsWith("birthdays.html")) {
		loadData("present");
	}
	if (window.location.pathname.endsWith("upcoming.html")) {
		loadData("upcoming");
	}
	if (window.location.pathname.endsWith("archive.html")) {
		loadData("archive");
	}
});

//clearing data
// document.addEventListener("DOMContentLoaded", function () {
// 	const clearBtn = document.getElementById("clear-data-btn");

// 	if (clearBtn) {
// 		clearBtn.addEventListener("click", clearAllData);
// 	}
// });
// function clearAllData() {
// 	localStorage.removeItem("present");
// 	localStorage.removeItem("upcoming");
// 	localStorage.removeItem("archive");
// 	alert("All entry has been cleared!");
// 	location.reload();
// }


document.addEventListener("DOMContentLoaded", function () {
	const clearBtn = document.getElementById("clear-data-btn");

	if (clearBtn) {
		clearBtn.addEventListener("click", clearAllData);
	}
});

async function clearAllData() {
    const collections = ["present", "upcoming", "archive"];
    
    for (const colName of collections) {
        const colRef = collection(db, colName);
        const snapshot = await getDocs(colRef);

        for (const docSnap of snapshot.docs) {
            await deleteDoc(doc(db, colName, docSnap.id));
        }
    }

    alert("All entries have been cleared from Firebase!");
    location.reload();
}
