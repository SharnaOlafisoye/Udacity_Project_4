/**
 * Define Global Variables
 */
const sections = document.querySelectorAll("section");
const navBarList = document.getElementById("navbar_list");
const menuBar = document.querySelector(".navbar_menu");

const pageHeader = document.querySelector(".page_header");
// Remove the dot from the class name, since it's already a class
pageHeader.classList.add("page_header");
pageHeader.style.background = "#fff";
pageHeader.style.position = "fixed";
pageHeader.style.top = "0";
pageHeader.style.width = "100%";
pageHeader.style.zIndex = "6";


//Query for navigation bar list
// Remove the array brackets, since we only want a single element
const menuBarList = document.querySelector("#navbar_list");
// Add menu__link class to all the li elements, not the a elements
const navBarLinks = navBarList.querySelectorAll("li");
navBarLinks.forEach((link) => {
  link.classList.add("menu__link");
});

// Build the nav by creating and appending elements to the navigation menu
sections.forEach((section) => {
  const sectionLi = document.createElement("li");
  navBarList.appendChild(sectionLi);
  const aEl = document.createElement("a");
  aEl.innerText = section.dataset.nav;
  aEl.href = `#${section.id}`;
  // Remove the dot from the class name, since it's already a class
  aEl.classList.add("menu__link");
  sectionLi.appendChild(aEl);
  
});

/**
 * End Global Variables
 * Start Helper Functions
 */
// No helper functions defined in this code

/**
 * End Helper Functions
 * Begin Main Functions
 */
const navbarMenu = document.querySelector('.navbar_menu');

navbarMenu.addEventListener('click', function() {
  navbarMenu.style.backgroundColor = 'lightyellow';
});

// Add active class to menu link and corresponding section when near top of viewport
function setActiveSection() {
  sections.forEach((section) => {
    const sectionRect = section.getBoundingClientRect();
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.offsetHeight;
    // Select the li element instead of the a element
    const navLink = document.querySelector(`li a[href="#${section.id}"]`);
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
const tester = document.getElementsByClassName("navbar_list");
// alert
const mediaQuery = window.matchMedia('(max-width: 768px)')
if (mediaQuery.matches) {
  const navBarList = document.getElementById("navbar_list").style.backgroundColor ="grey";
}




