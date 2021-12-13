// alert("Testing testing js file");

// Nav Dropdown function
var dropdown = document.getElementsByClassName("dropdown-btn");
var icon = document.getElementById("icon");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
	let active = false;
	// checks if clicked dropdown element is active
    if(this.classList.contains("active")){
		active = true;
	}
	// hides all content blocks & deactivates dropdown buttons
    for (j = 0; j < dropdown.length; j++) {
	    dropdown[j].classList.remove("active");
	    dropdown[j].nextElementSibling.style.display = "none";
    }
	// if the element isn't active set it active
	if(!active){
	    this.classList.add("active");
	    this.nextElementSibling.style.display = "block";
    }
  });
}

// open mobile nav
function openNav() {
  document.getElementById("nav-links").style.display = "block";
  document.getElementById("hamgurger").style.display = "none";
  document.getElementById("close").style.display = "block";
  document.body.style.overflow = "hidden";

}

// close mobile nav
function closeNav() {
  document.getElementById("nav-links").style.display = "none";
  document.getElementById("hamgurger").style.display = "block";
  document.getElementById("close").style.display = "none";
  document.body.style.overflow = "auto";
}
