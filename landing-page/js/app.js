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


// Add 'active' class to menu link and corresponding section when near top of viewport
function setActiveSection() {
  const scrollPosition = window.pageYOffset;
  // loop through all sections
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    const navbar_menu = document.querySelector(`a[href="#${section.getAttribute("id")}"]`);


   // check if section is near top of viewport
   if (scrollPosition >= sectionTop - sectionHeight * 0.25 && scrollPosition < sectionTop + sectionHeight - sectionHeight * 0.25) {
    section.classList.toggle("your-active-class", true);
    navbar_menu.classList.toggle("your-active-class", true);
  } else {
    section.classList.toggle("your-active-class", false);
    navbar_menu.classList.toggle("your-active-class", false);
  }
});
}
      

      
     window.addEventListener("scroll", setActiveSection);

//loop through the sections and create anchor elements for each section
sections.forEach((section) => {
  const navItem = document.createElement("a");
  navItem.setAttribute("href", `#${section.id}`);
  navItem.textContent = section.dataset.nav;

  menuBar.appendChild(navItem);
  console.log(menuBar);

// Use IntersectionObserver to add or remove the 'active' class
//Register a callback to be called when each section enters and exits the viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const navbar_menu = document.querySelector(
        `a[href="#${entry.target.id}"]`
      );
      const element = document.querySelector(".some-selector");
      if (entry.isIntersecting) {
        entry.target.classList.add("your-active-class");
        if (element !== null) {
          element.classList.add("your-active-class");
        }
        navbar_menu.classList.add("your-active-class");
      } else {
        entry.target.classList.remove("your-active-class");
        if (navbar_menu) {
          navbar_menu.classList.remove("your-active-class");
        }
        if (element !== null) {
          element.classList.remove("your-active-class");
        }
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => {
  observer.observe(section);
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

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  const maxScrollPosition =
    document.documentElement.scrollHeight - window.innerHeight;
  console.log(scrolled);
});