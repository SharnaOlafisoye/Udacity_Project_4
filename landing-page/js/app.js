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
const menuBar = document.getElementById("navbar_menu");
console.log(navBarList);
console.log(menuBar);

// Build the nav by creating and appending elements to the navigation menu
sections.forEach((section) => {
  const sectionLi = document.createElement("li");
  navBarList.appendChild(sectionLi);
  const aEl = document.createElement("a");
  aEl.innerText = section.dataset.nav;
  aEl.href = `#${section.id}`;
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
const sections = document.querySelectorAll('section');
const navBarList = document.getElementById('navbar_list');

// Build the nav by creating and appending elements to the navigation menu
sections.forEach((section) => {
  const navItem = document.createElement('li');
  navItem.innerHTML = `<a href="#${section.id}">${section.dataset.nav}</a>`;
  navBarList.appendChild(navItem);
});

// Add active class to menu link and corresponding section when near top of viewport
function setActiveSection() {
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.offsetHeight;
    const navLink = document.querySelector(`a[href="#${section.id}"]`);
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      section.classList.add('your-active-class');
      navLink.classList.add('your-active-class');
    } else {
      section.classList.remove('your-active-class');
      navLink.classList.remove('your-active-class');
    }
  });
}

window.addEventListener('scroll', setActiveSection);



