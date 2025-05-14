window.onload = function () {
    loadHTML("homepage-section","homepage.html");
    loadHTML("level-design-section","level-design.html");
    loadHTML("projects-section", "projects.html");
    loadHTML("resume-section", "resume.html");""
    loadHTML("contact-section","contact.html")
    loadHTML("social-navbar-section","social.html");
  };
  
function loadHTML(id, file) {
fetch(file)
    .then(response => {
    if (!response.ok) throw new Error(`Failed to load ${file}`);
    return response.text();
    })
    .then(html => {
    document.getElementById(id).innerHTML = html;
    })
    .catch(error => console.error(error));
}



// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function toggleMenu() {
    const navLinks = document.querySelector('#navbar ul');
    navLinks.classList.toggle('show');
}
document.addEventListener("DOMContentLoaded", function () {
    const devlogButtons = document.querySelectorAll(".devlog-btn");

    devlogButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            const devlogPage = event.target.getAttribute("href");
            
            // Check if devlog page exists, otherwise redirect to a default message
            fetch(devlogPage, { method: "HEAD" })
                .then(response => {
                    if (response.status === 404) {
                        event.preventDefault();
                    }
                })
                .catch(() => {
                    alert("Devlog coming soon!");
                    event.preventDefault();
                });
        });
    });
});

