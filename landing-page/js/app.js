/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
*/
let sectionsEle = document.querySelectorAll("section");
let ulEle = document.getElementById("navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


sectionsEle.forEach(element => {
    let liEle = document.createElement("li");
    let aEle = document.createElement("a");
    aEle.href = `#${element.id}`;
    aEle.classList.add("menu__link");
    aEle.textContent = element.dataset.nav;
    aEle.addEventListener("click", (e) => {
        e.preventDefault();
        element.scrollIntoView({
            behavior: "smooth"
        })
    })
    liEle.appendChild(aEle);
    ulEle.appendChild(liEle);
});




// Add class 'active' to section when near top of viewport

function toggleActiveClass() {
    sectionsEle.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const link = document.querySelector(`a[href="#${section.id}"]`);
        if (sectionTop <= 300 && sectionTop > 0) {
            section.classList.add("your-active-class");
            link.classList.add("active");
        }
        else {
            section.classList.remove("your-active-class");
            link.classList.remove("active");
        }

    })
}

window.addEventListener("scroll", toggleActiveClass);




// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


