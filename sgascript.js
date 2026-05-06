"use strict";
/*	Javascript 7th edition
	Case study 
	Week 2 - Adding a mathematical equation
	
	Author: Emma Janousek
	Date: 3/5/26
	
	Filename: sgascript.js
*/
// Call the function when the script loads
displaySystemInfo();
// Adding a mathematical equation/button
let count = 0;

const countDisplay = document.getElementById("count");
const mainBtn = document.getElementById("button"); // The "Add your name!" button
const dropdown = document.getElementById("dropdown-content");


function updateDisplay() {
    countDisplay.textContent = count;
}

if (mainBtn && dropdown) {
    mainBtn.addEventListener("click", function() {
        dropdown.classList.toggle("show");
        this.classList.toggle('btn-clicked');
    });
}

const nameInput = document.getElementById("myInput");
const submitBtn = document.getElementById("submitName");

if (submitBtn) { 
	submitBtn.addEventListener("click", function() {
		try {
			const nameInput = document.getElementById("myInput");
			const name = nameInput.value.trim();
	
			if (name === "") {
			throw new Error("Validation Error: Please enter your name first!")
			}		
			count++;
			updateDisplay();
		
			window.alert("Thank you, " + name + "! Your submission was successful.");		
		
			dropdown.classList.remove("show");
		
		} catch (err) {
			console.error(err.message);
			window.alert(err.message);
		}
	});
}




function validateContactForm() {
    try {
        const name = document.getElementById("myInput").value.trim();
        const email = document.getElementById("userEmail").value.trim();
        
        if (name === "") throw new Error("Name is required!");
        if (email === "") throw new Error("Email is required!");

        // --- Create the Object ---
        let formData = {
            userName: name,
            userEmail: email,
            interests: [] // This will hold the checkbox selections
        };

        // Select all checked checkboxes
        const checkedBoxes = document.querySelectorAll('input[name="interest"]:checked');
        
        // Loop through and push values into the object's array property
        checkedBoxes.forEach((checkbox) => {
            formData.interests.push(checkbox.value);
        });

        if (formData.interests.length === 0) {
            throw new Error("Please select at least one checkbox interest!");
        }

        // --- Debugging the Object ---
        console.log("Full Data Object:", formData);
        console.log("Interests from Object:", formData.interests);
        
        alert("Success! Data stored for: " + formData.userName);
        
        return true; 
    } catch (err) {
        alert(err.message);
        return false; 
    }
}


window.onclick = function(event) {
	if (!event.target.matches('#button') && !event.target.closest('#dropdown-content')) {
		if (dropdown.classList.contains('show')) {
			dropdown.classList.remove('show');
		}
	}
}



// Button dropdown
const btn = document.getElementById("dropBtn");
const content = document.getElementById("dropdown-content");

// Toggle menu on click
btn.addEventListener("click", () => {
  content.classList.toggle("show");
});

// Optional: Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('dropBtn')) {
    if (content.classList.contains('show')) {
      content.classList.remove('show');
    }
  }
}


// if-else statement for mobile "hamburger" menu
function menu() {
	var navlinks = document.getElementById("nav-links");
	var menuicon = document.getElementById("icon");
	if (navlinks.style.display === "block") {
		navlinks.style.display = "none";
	} else {
		navlinks.style.display = "block";
	}
}

// Function to display Navigator and Screen information
function displaySystemInfo() {
    const browserDisplay = document.getElementById("user-browser");
    const screenDisplay = document.getElementById("user-screen");

    // Using the navigator object
    const browserName = navigator.appName;
    const browserVersion = navigator.appVersion;
    const platform = navigator.platform;

    // Using the screen object
    const screenWidth = screen.width;
    const screenHeight = screen.height;
    const colorDepth = screen.colorDepth;

    if (browserDisplay && screenDisplay) {
        browserDisplay.textContent = `Browser: ${platform} using ${browserName}`;
        screenDisplay.textContent = `Screen Resolution: ${screenWidth} x ${screenHeight} (Color Depth: ${colorDepth}-bit)`;
    }
}


// SGA Form