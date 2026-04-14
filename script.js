function showSection(id) {
    let sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = "none");

    document.getElementById(id).style.display = "block";
}

function logoutUser() {
    alert("You have been logged out!");
    window.location.href = "login.html";
}