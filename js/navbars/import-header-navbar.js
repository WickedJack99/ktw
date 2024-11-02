// script.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('../../html/navbars/header-nav.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('.header-nav').innerHTML = data;
        })
        .catch(error => console.error('Error loading header-nav:', error));
});
