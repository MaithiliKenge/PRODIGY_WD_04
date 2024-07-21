var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Full Stack Developer"], // Array of strings to type out
    typeSpeed: 100, // Speed of typing each character (in milliseconds)
    backSpeed: 100, // Speed of deleting each character (in milliseconds)
    backDelay: 1000, // Delay before starting to delete (in milliseconds)
    loop: true // Whether to loop the typing animation indefinitely
});
// The Typed.js library targets the element with the class .text and starts typing out the strings specified in the strings array.



document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.progress-line span').forEach(span => {
        span.style.transform = 'scaleX(1)'; // This will trigger the progress bar animation
    });
});
