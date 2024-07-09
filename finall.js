// scripts.js

// This script is optional and can be used to add more interactivity if needed.
// Currently, the hover effect is handled by CSS alone.

document.addEventListener('DOMContentLoaded', function () {
    const projectImages = document.querySelectorAll('.project-image');

    projectImages.forEach(image => {
        image.addEventListener('mouseenter', function () {
            image.querySelector('.project-description').style.right = '0';
            image.querySelector('.project-description').style.opacity = '1';
            image.querySelector('img').style.transform = 'translateX(-50%)';
        });

        image.addEventListener('mouseleave', function () {
            image.querySelector('.project-description').style.right = '-100%';
            image.querySelector('.project-description').style.opacity = '0';
            image.querySelector('img').style.transform = 'translateX(0)';
        });
    });
});


// background - 0B0C10 66FCF1
// GREY - #C5C6C7
// WRITING - 66FCF1 45A29E