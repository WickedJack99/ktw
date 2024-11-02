// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('../../html/navbars/footer-nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('.footer-nav').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer-nav:', error));
});
