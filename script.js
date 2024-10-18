// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').replace('#', '');
        document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
    });
});

// // Add event listener to navigation links
// document.querySelectorAll('nav a').forEach(link => {
//     link.addEventListener('click', event => {
//         event.preventDefault();
//         const sectionId = link.getAttribute('href').replace('#', '');
//         document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
//     });
// });

// // Add event listener to navigation links
// document.querySelectorAll('nav a').forEach(link => {
//     link.addEventListener('click', event => {
//         event.preventDefault();
//         const sectionId = link.getAttribute('href').replace('#', '');
//         document.querySelector(`#${sectionId}`).scrollIntoView({ behavior: 'smooth' });
//     });
// });
