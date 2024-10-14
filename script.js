// Get modal element
var modal = document.getElementById("loginModal");

// Get open modal button
var btn = document.getElementById("loginBtn");

// Get close button (x)
var span = document.getElementsByClassName("close")[0];

// Listen for open click
btn.onclick = function() {
    modal.style.display = "block";
}

// Listen for close click
span.onclick = function() {
    modal.style.display = "none";
}

// Close modal if clicked outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
