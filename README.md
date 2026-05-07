<img width="149" height="147" alt="logo" src="https://github.com/user-attachments/assets/6c57d689-ce96-482d-962a-54163b1017c9" />
<img width="321" height="428" alt="halloween" src="https://github.com/user-attachments/assets/9e810bc6-6886-451f-b8ce-bb2f2add7b19" />
<img width="408" height="306" alt="flag-football" src="https://github.com/user-attachments/assets/0e147594-e05e-4541-a8d4-8f3cdda74bd2" />
<img width="459" height="612" alt="donuts" src="https://github.com/user-attachments/assets/4311fc4a-80ed-42ff-b487-53c4c1347d03" />
<img width="302" height="403" alt="zombies" src="https://github.com/user-attachments/assets/ef6d94c0-0c9d-4528-b7f3-978a5d1555bc" />
<img width="403" height="302" alt="zombie-hawk" src="https://github.com/user-attachments/assets/bef91483-7e29-40e1-ba47-9bb9e6f49a34" />
<img width="288" height="384" alt="hayride" src="https://github.com/user-attachments/assets/cb77a268-ae92-49cb-a2f7-e7ea4906c17a" />
[sgacss.css](https://github.com/user-attachments/files/27487281/sgacss.css)
/*	Javascript 7th edition
	Case study
	
	Author: Emma Janousek
	Date: 3/5
	
	Filename: sgacss.css
*/

/* Reset Rules */
html, body, h1, h2, h3, footer, nav, ul, li, a, div, p {
	margin: 0;
	padding: 0;
	border: 0;
}

/* Colors
off-white: #e6e1cc
YC blue: #012947
YC/light yellow: #ebc334
dark yellow: #a68200
light blue: #013f6e
*/

/* General styles */
/* style rules for header */
header h1, h2 {
	background-color: #012947;
	text-align: left;
	color: #e6e1cc;
	font-family: "Roboto Condensed", sans-serif;
	font-style: italic;
}

/* style rules for body */
body {
	background-color: #e6e1cc;
}

/* style rules for images */
img {
	max-width: 100%;
	display: block;
}

/* styles for nav bars */
nav {
	background-color: #012947;
	font-family: "Roboto Condensed", sans-serif;
	font-size: 1.25em;
}

/* styles for main */

main {
	padding: 2%;
}

main h3 {
	font-size: 1.8em;
	padding: 1.5%;
	font-family: "Roboto Condensed", sans-serif;
}

main p {
	font-size: 1.2em;
	font-family: "Roboto Condensed", sans-serif;
}

a {
	color: #013f6e;
	text-decoration: none;
	font-family: "Roboto Condensed", sans-serif;
	
}

a:hover {
	color: #a68200;
	text-decoration: none;
	font-style: italic;
}

/* Style rules for button */
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #e6e1cc;
  min-width: 160px;
  box-shadow: 4px 4px 6px #013f6e;
  z-index: 1;
}

/* Show class to be toggled by JS */
.dropdown-content.show {
  display: block;
}

/* comments textbox */
#sga-form label {
    display: block;      
    margin-top: 10px;    
    margin-bottom: 5px;
}

#userMessage {
    display: block;
}

/* Style rules for footer */
footer {
	display: block;
	font-family: "Roboto Condensed", sans-serif;
	text-align: center;
	padding: 2%;
}

/* Style rules for mobile */
/* styles rules for mobile header */
img.mobile-logo {
	display: block;
	justify-content: center;
}



/* style rules for mobile nav */
.tab-desk {
	display: none;
}

.mobile-nav nav li a {
	padding: 0.5em;
	display: block;
	color: #e6e1cc;
	text-decoration: none;
}

.nav-links {
	color: #ebc334;
}


/* Tablet and Desktop viewport */
@media screen and (min-width: 630px) , print {
	/* style rules for header */
	.mobile-header {
		display: none;
	}
	
	header h1 {
		padding-top: 2%;
		padding-left: 2%;
		padding-right: 2%;
		padding-bottom: 0%;
	}

	header h2 {
		padding-top: 1%;
		padding-left: 2%;
		padding-right: 2%;
		padding-bottom: 2%;
	}

	.logo {
		display: flex;
		gap: 10px;
		float: left;
	}
	
	/* style rules for nav bars */
	.tab-desk {
		display: block;
	}
	
	.mobile-nav {
		display: none;
	}
	
	nav li {
		display: inline-block;
		
	}
	nav li a {
		padding: 0.5em;
		display: block;
		color: #e6e1cc;
		text-decoration: none;
	}

	nav ul {
		list-style-type: none;
		text-align: left;
	}

	nav li a:hover {
		color: #e6e1cc;
		background-color: #012947;
		font-style: italic;
		color: #ebc334;
	}
	
	/* Signatures and button */
	#signatures-count, #count {
		text-align: center;
	}
	
	.center-button, .button {
		text-align: center;
		font-size: 1.25em;
		display: block;
		color: #e6e1cc;
		padding: 2%;
	}
	
	.btn-clicked {
		background-color: #012947;
		color: #ebc334;
	}
	
	/* figures and captions as a grid */
	figure {
		border: 2px solid #012947;
		max-width: 275px;
		margin: 2% auto;
	}

	figcaption {
		padding: 2%;
		border-top: 2px solid #012947;
	}
	
	#grid {
		display: grid;
		grid-template-columns: auto auto auto;
		grid-gap: 10px;
		padding: 2%;
	}
	
	.football {
		max-height: 380px;
		max-width: 400px
	}
	
	.halloween {
		max-height: 450;
	}
	
	.container {
		text-align: center;
	}
	
	/* styles for first page large links */
	
	.whats-up {
		display: flex;
		list-style-type: none;
		font-size: 2em;
		font-weight: bold;
		float: inline-block;
		gap: 20px;
	}
	
	.first {
		border: 2.5px dashed #a68200;
		padding: 2%;
		border-radius: 10px;
		
	}
	
	.second {
		border: 2.5px dashed #a68200;
		padding: 2%;
		border-radius: 10px;
		margin-left: 1%;
		margin-right: 2%;
	}
	
	.first:hover {
		box-shadow: 4px 4px 6px #013f6e;
		border: 2.5px dashed #ebc334;
		padding: 2%;
		border-radius: 10px;
		
	}
	
	.second:hover {
		box-shadow: 4px 4px 6px #013f6e;
		border: 2.5px dashed #ebc334;
		padding: 2%;
		border-radius: 10px;
	}
	
	
}
