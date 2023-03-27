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

// Build the nav by creating and appending elements to the navigation menu
sections.forEach((section) => {
  const sectionLi = document.createElement("li");
  sectionLi.innerText = section.dataset.nav;
  navBarList.appendChild(sectionLi);
});
/**
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
//function that goes to the top of the document
function goToTop() {
  Button.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  });
}



// Add 'active' class to menu link and corresponding section when near top of viewport
function setActiveSection() {
  const scrollPosition = window.pageYOffset;
  // loop through all sections
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (
      scrollPosition >= sectionTop - sectionHeight * 0.25 &&
      scrollPosition < sectionTop + sectionHeight - sectionHeight * 0.25
    ) {
      const navbar_menu = document.querySelector(
        `a[href="#${section.getAttribute("id")}"]`
      );

      if (!section.classList.contains("active")) {
        section.classList.add("active");
      }
      if (navbar_menu && !navbar_menu.classList.contains("active")) {
        navbar_menu.classList.add("active");
      }
    } else {
      const navbar_menu = document.querySelector(
        `a[href="#${section.getAttribute("id")}"]`
      );
      console.log(navbar_menu);

      if (section.classList.contains("active")) {
        section.classList.remove("active");
      }
      if (navbar_menu && navbar_menu.classList.contains("active")) {
        navbar_menu.classList.remove("active");
      }
    }
  });
}

window.addEventListener("scroll", setActiveSection);


//loop through the sections and create anchor elements for each section
sections.forEach((section) => {
  const navItem = document.createElement('a');  
  navItem.setAttribute('href', `#${section.id}`);
  navItem.textContent = section.dataset.nav;

  navbar_menu.appendChild(navItem);
});
// Use IntersectionObserver to add or remove the 'active' class
// Define a function to handle the changes observed by the IntersectionObserver
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const navbar_menu = document.querySelector(
        `a[href="#${entry.target.id}"]`
      );
      const element = document.querySelector(".some-selector");
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        if (element !== null) {
          element.classList.add("some-class");
        }
        navbar_menu.classList.add("active");
      } else {
        entry.target.classList.remove("active");
        if (navbar_menu) {
          navbar_menu.classList.remove("active");
        }
        if (element !== null) {
          element.classList.remove("some-class");
        }
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => {
  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", function () {
  // code to run when the DOM is loaded
});

/**
 * End Main Functions
 * Begin Events
 *
 */
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); //prevent links from scrolling to target
    const section = document.querySelector(link.hash);
    section.scrollIntoView({ behavior: "smooth" }); //when link clicked scrolls into target with smooth behavior
  });
});

window.addEventListener('scroll',() =>{
  const scrolled = window.scrollY;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  console.log(scrolled);
  
  function scrollToSection(section) {
    section.scrollIntoView();
  }
