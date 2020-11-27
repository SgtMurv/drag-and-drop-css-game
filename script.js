// Find the DOM nodes:
let darkModeToggleButton = document.getElementById("dark-mode-toggle")

// Dark Mode toggle
darkModeToggleButton.addEventListener('click',()=>{
	document.body.classList.toggle("dark-mode");
})
