/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
document.addEventListener("DOMContentLoaded", function() {  
goToTop()
});
/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll('section'); 
const container = document.querySelectorAll('.landing_container');
const navBarList = document.getElementById('navBar_list'); 
const ul = document.getElementsById('.ul'); 


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// Remove all menu links


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
ul.section.appendChild(section1);
ul.section.appendChild(section2);
ul.section.appendChild(section3); 
ul.section.appendChild(section4);

// build the nav
const section = [
  {title: 'Section1', id: 'Section 1'},
   {title: 'Section2', id: 'Section 2'},} 
   {title: 'Section3', id: 'Section 3'}, }
   {title: 'Section4', id: 'Section 4'} }
  ];
document.querySelector("landing_container").insertAdjacentHTML("beforeend",section);
function build_navBar(section) {
  const listItem =document.createElement('li');
  const navBarItem = document.createElement('a');
  navBarItem.classList.add('navBar_item');
  navBarItem.textContent = section.title;
  navBarItem.href = `#${section.id} `class = "menu_link">$(section.dataset.nav)</a>navBar.insertAdjacentHTML(beforeend),listItem;
  listItem.appendChild(navBarItem);
  navBarList.appendChild(listItem);
  return listItem;
}

function buildNavBar() {
  const navBarList = document.createElement('ul');
  navBarList.classList.add('navBar_list');
  sections.forEach(section => {
    const navBarItem = buildNavBarItem(section);
    navBarList.appendChild(navBarItem);
  });
  return navBarList;
}
// Attaches the navigation bar to the DOM when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const navBar = buildNavBar();
  const navBarContainer = document.querySelector('.navBar_container');
  navBarContainer.appendChild(navBar);
});
  })
}
const title = section.data-navBarList.title;
  
  // Add menu links
  for (let i = 0; i < numberOfListItems; i++) {
    const menuLink = document.createElement('li');
    menuLink.classList.add('menu_link');
    menuLink.innerHTML = `<a href="#${i}">${sections[i].id}</a>`;
    navBarList.appendChild(menuLink);

    menuLink.addEventListener("click", (event) => {
      event.preventDefault();
      const section = document.getElementById(event.target.innerHTML);
    });

  sections.forEach(function (section, index) {
    const menuLink = document.createElement('li');
    menuLink.classList.add('menu_link');
    menuLink.innerHTML = `<a href="#${index}">${section.id}</a>`;
    menuLinks.push(menuLink);
  });
function scrolly() {
  const scrollTarget = document.getElementById(section.id);
  scrollTarget.scrollIntoView({behavior:'smooth'});
}
//add an even listener to the link so that it calls the scrolly function 
const menuLinks = document.querySelectorAll('.menu_links');
menuLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    scrolly();
  });
});

function highlight() {
  const menuLinks = document.querySelectorAll('.menu_links');
  menuLinks.forEach(link => {
    link.classList.remove('active');
  });
  const currentLink = document.getElementById(this.innerHTML);
  currentLink.classList.add('active');
}
}
  // Add menu links
  for (let i = 0; i < numberOfListItems; i++) {
    const menuLink = document.createElement('li');
    menuLink.classList.add('menuLink');



// Loop through each section and update the corresponding menu link
function setActiveSection() {("#navBar");
for (let i = 0; i < sections.length; i++) {
  const section = sections[i];
  const menuLink = document.querySelector(`a[href="#${section.id}"]`);
  
  const rect = section.getBoundingClientRect();
  const isInView = rect.top >=0 && rect.top <= window.innerHeight * 0.5;
  if (isInView) {
    menuLink.classList.add('active');
  } else {
    menuLink.classList.remove('active');
  }
}
}
window.addEventListener('scroll'setActiveSection);
  // Set the link's href attribute to "#sectionX", where X is the section's index + 1
  menuLink.setAttribute("href", `#section${i + 1}`);
  // Set the link's text content to "Section X", where X is the section's index + 1
  menuLink.textContent = `Section ${i + 1}`;
  navBar.appendChild(menuLink);
}



// Define an array of navigation items
const navItems = [
  { label: 'List1', value: 'List_1' },
  { label: 'List2', value: 'List_2' },
  { label: 'List3', value: 'List_3' },
  { label: 'List4', value: 'List_4' }
];

// Loop through the navItems array and create a new list item for each one
navItems.forEach(item => {
  const li = document.createElement('li');
  li.setAttribute('data-nav', item.value);
  const a = document.createElement('a');
  a.setAttribute('href', '#');
  a.style.color = 'navy';
  a.innerText = item.label;
  li.appendChild(a);
  navBarList.appendChild(li);
});


// Add class 'active' to section when near top of viewport

li.addEventListener('click', (e) => {
  e.preventDefault();
  const targetSection = document.getElementById(item.value);
  targetSection.scrollIntoView({behavior: 'smooth'});
});

// check if the navigation item's section is in the viewport and add or remove the active class accordingly
window.addEventListener('scroll', () => {
  const inViewport = rect.top <= rect.top <= window.innerHeight && rect.bottom >= 0;
  for(let i=0; i <sections.length; i++) {;  
    const section = sections[i];
  const rect = section.getBoundingClientRect();
  const li = navBarList.querySelector(`[data-nav="${section.id}"]`);
  if (inViewport) {
    section.classList.add('active');
    li.classList.add('active');
  } else {
    section.classList.remove('active');
    li.classList.remove('active');
  }
}
});


// Define a function to handle the 'scroll' event
function handleScroll() {
  const sections = document.querySelectorAll('section');
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const li = document.querySelector(`li[data-nav]="${section.id}"]`);

    const inViewport = isElementInViewport(section);
    // Add or remove the 'active' class based on whether the section is in the viewport
    if (inViewport) {
      li.classList.add('active');
    } else {
      li.classList.remove('active');
    }
  }
}

// Listen for the 'scroll' event on the window and call the 'handleScroll' function
window.addEventListener('scroll', handleScroll);


// Use IntersectionObserver to add or remove the 'active' class
// Define a function to handle the changes observed by the IntersectionObserver
function changeActive(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}

// Create an IntersectionObserver that calls the 'changeActive' function with a threshold of 0.5
const observer = new IntersectionObserver(changeActive, {
  threshold: 0.5
});

// Loop through each section and observe it with the IntersectionObserver
sections.forEach(section => {
  observer.observe(section[i]);
});

for(const section of sections) {
  observer.observe(section);
}

// Scroll to anchor ID using scrollTO event
navBar.addEventListener('click',function(evnt) {
  evnt.preventDefault();
  const target = evnt.target;
  const anchor = target.getAttribute('href');
  const selected = document.querySelector(anchor);
  const targetOffset = target.getBoundingClientRect();
  const targetTop = targetOffset.top;
  const targetLeft = targetOffset.left;
  const targetHeight = targetOffset.height;
  const targetWidth = targetOffset.width;
  const targetBottom = targetTop + targetHeight;
  const targetRight = targetLeft + targetWidth;
  const targetScrollTop = window.pageYOffset;
  const targetScrollLeft = window.pageXOffset;
  evnt.preventDefault();
  console.log(evnt.target.href);
  selected.scrollIntoView({behavior:"smooth"});
  // });
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Scroll to top
topScroll.addEventListener('click', function(){
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  });
});

// Build menu 

// Scroll to section on link click

// Set sections as active
