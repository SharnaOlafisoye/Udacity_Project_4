/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const sections = document.querySelectorAll("section");
const navBarList = document.getElementById("navbar_list");
const menuBar = document.querySelector(".navbar_menu");

const pageHeader = document.querySelector(".page_header");
//Apply styling to the page header
pageHeader.classList.add(".page_header");
pageHeader.style.background = "#fff";
pageHeader.style.position = "fixed";
pageHeader.style.top = "0";
pageHeader.style.width = "100%";
pageHeader.style.zIndex = "6";

//Query for navigation bar list
const menuBarList = document.querySelectorAll("#navbar_list");
// Add menu__link class to all the links
// const navBarLinks = navBarList.querySelectorAll("a");
// navBarLinks.forEach((link) => {
//   link.classList.add("menu__link");
// });
// Build the nav by creating and appending elements to the navigation menu

const sectionLi = document.createElement("li");

sections.forEach((section) => {
  const sectionLi = document.createElement("li");
  navBarList.appendChild(sectionLi);
  const aEl = document.createElement("a");
  aEl.innerText = section.dataset.nav;
  aEl.href = `#${section.id}`;
  aEl.classList.add(".menu__link");
  sectionLi.appendChild(aEl);
});
/**
 *
 * End Global Variables
 * Start Helper Functions
 *
 */

// No helper functions defined in this code

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// Add active class to menu link and corresponding section when near top of viewport



function setActiveSection() {
  sections.forEach((section) => {
    const sectionRect = section.getBoundingClientRect();
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.offsetHeight;
    const navLink = document.querySelector(`a[href="#${section.id}"]`);
    console.log('navLink:',navLink);
    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      section.classList.add("your-active-class");
      navLink.classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      navLink.classList.remove("active");
    }
  });
}



window.addEventListener("scroll", setActiveSection);
console.log(scroll.target);

// Select the navbar and create a new button element
const navbar = document.querySelector('#navbar');
const toggleButton = document.createElement('button');

// Add text and classes to the button
toggleButton.textContent = 'Menu';
toggleButton.classList.add('navbar-toggle', 'collapsed');

// Add the button to the navbar
navbar.appendChild(toggleButton);

// Add a click event listener to the button that toggles the navbar
toggleButton.addEventListener('click', () => {
  navbar.classList.toggle('show-nav');
});
