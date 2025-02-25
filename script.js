document.getElementById('contactForm').addEventListener('submit', function(event) {
    function toggleMenu() {
        var menu = document.getElementById("nav-menu");
        menu.classList.toggle("active");
    }
    
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        document.getElementById('contactForm').reset();
    } else {
        alert('Please fill in all fields.');
    }
});
