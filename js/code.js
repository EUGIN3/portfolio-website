// Navbar animation.
// Start
let sections = document.querySelectorAll('section'); // Selecting the section element.
let navLinks = document.querySelectorAll('header nav a'); // Selecting the all the link element in header (navigation bar).

// Loop through the list of link and highligth the current section. 
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 480; // Change color when it reaches this offset.
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        let scroll = scrollY;   

        // Checking if the offset is reach.
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active'); // Remove the current active ID when the changing is trigger.
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active'); // Add the removed ID to the current part of the page that is showed.
            });

        
        // Remove active when it reaches the top of the page to reset the styling.
        } else if (scroll === 0) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
        }
    });
};

// Animation for navigation tall to short behavior when scroll.
window.addEventListener("scroll", function() {  
    var header = document.querySelector("header"); // Selecting the header element.
    // Toggle between sticky class to not when page is scrooll.
    header.classList.toggle("sticky", window.scrollY > 0); 
})
// End

// Dropdown menu for navigation when it reaches tablet.
// Start
const toggle_btn_icon = document.querySelector('.toggle_btn i');
const drop_down = document.querySelector('.dropdown-menu');

// Function for for closing the hamburger nav
function closeNav() {
    drop_down.classList.toggle('open');

    const is_open = drop_down.classList.contains('open')

    toggle_btn_icon.classList = is_open
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}
// End

// For visiting different pages.
// Start
function visitcv() {
    window.open('https://eugin3.github.io/online-resume/', '_blank');
}

function projectLink(project) {
    if (project == 'a') {
        window.open('https://github.com/EUGIN3/mp3-player', '_blank');
    } else if (project == 'b') {
        window.open('https://github.com/EUGIN3/youtube-mp3-mp4-downloader', '_blank');
    } else if (project == 'c') {
        window.open('https://github.com/EUGIN3/apartment-management', '_blank');
    } else if (project == 'd') {
        window.open('https://github.com/EUGIN3/shoe-collection-management-system', '_blank');
    } else if (project == 'e') {
        window.open('https://github.com/EUGIN3/ipt101-calculator-app', '_blank');
    } else if (project == 'f') {
        window.open('https://eugin3.github.io/ipt101-calculator-app/', '_blank');
    } else if (project == 'g') {
        window.open('https://github.com/EUGIN3/online-resume', '_blank');
    } else if (project == 'h') {
        window.open('https://eugin3.github.io/online-resume/', '_blank');
    }
}
// End

// For removing the content of textbox in contacts section.
// Start
function clearInput() {
    document.getElementById('contact-message').value = '';
}
// End