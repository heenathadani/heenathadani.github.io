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
                        alert("Devlog coming soon!");
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

