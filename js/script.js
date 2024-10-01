// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Select the mobile menu toggle button and the mobile menu items
    const toggleButton = document.querySelector('.navbar__mobile-menu-toggle');
    const mobileMenu = document.querySelector('.navbar__mobile-menu-items');

    // Add click event to toggle mobile menu visibility
    toggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });

    /* video modal */
    const modal = document.getElementById('videoModal');
    const videoButton = document.querySelector('.preview__video-button');
    const closeButton = document.querySelector('.modal__close-button');
    const videoPlayer = document.getElementById('videoPlayer');

    /* open modal when clicked */

    videoButton.addEventListener('click', function () {
       
        modal.style.display = 'block';


        videoPlayer.src = 'https://www.youtube.com/embed/8sXRyHI3bLw';

        closeButton.addEventListener('click', function () {
            modal.style.display = 'none';
            videoPlayer.src = '';
        });

        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                modal.style.display = 'none';
                videoPlayer.src = '';
            }
        });
    });

});


// Add scroll event to change navbar style
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');

    // Add or remove class based on scroll position
    if (window.scrollY > 0) {
        navbar.classList.add('navbar--scroll');
    } else {
        navbar.classList.remove('navbar--scroll');
    }
});
