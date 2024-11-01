// Select all elements with the class 'container' and 'image-container'
const containers = document.querySelectorAll('.container, .image-container');

// Add mouseover and mouseout events to each container
containers.forEach(container => {
    container.addEventListener('mouseover', () => {
        container.classList.add('bobbing');
    });
    
    container.addEventListener('mouseout', () => {
        container.classList.remove('bobbing');
    });
});
