/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener("click", showMenu);
}

function showMenu() {
    navMenu.classList.add("show-menu");
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // when we click on each nav__link, we remove the show menu class
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content"),
    skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills__content skills__close";
    }

    if (itemClass === "skills__content skills__close") {
        this.parentNode.className = "skills__content skills__open";
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
    tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove("qualification__active");
        });
        target.classList.add("qualification__active");

        tabs.forEach((tab) => {
            tab.classList.remove("qualification__active");
        });
        tab.classList.add("qualification__active");
    });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
    modalBtns = document.querySelectorAll(".services__button"),
    modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
    modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener("click", () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove("active-modal");
        });
    });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

/*==================== TESTIMONIAL ====================*/
// let swiperTestimonial = new Swiper(".testimonial_container", {
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 48,

//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//         dynamicBullets: true,
//     },
//     breakpoints: {
//         568: {
//             slidePerView: 2,
//         },
//     },
// });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
    const verticalScrollPosition = window.verticalScrollPosition || window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute("id");

        if (verticalScrollPosition > sectionTop && verticalScrollPosition <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.add("active-link");
        } else {
            document
                .querySelector(".nav__menu a[href*=" + sectionId + "]")
                .classList.remove("active-link");
        }
    });
}

window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById("header");
    if (this.verticalScrollPosition >= 80) nav.classList.add("scroll-header");
    else nav.classList.remove("scroll-header");
}

window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
    const scrollUp = document.getElementById("scroll-up");
    if (this.verticalScrollPosition >= 560) scrollUp.classList.add("show-scroll");
    else scrollUp.classList.remove("show-scroll");
}

window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
// const themeButton = document.getElementById("theme-button");
// const darkTheme = "dark-theme";
// const iconTheme = "uil-sun";

// const selectedTheme = localStorage.getItem("selected-theme");
// const selectedIcon = localStorage.getItem("selected-icon");

// const getCurrentTheme = () =>
//     document.body.classList.contains(darkTheme) ? "dark" : "light";
// const getCurrentIcon = () =>
//     document.body.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// if (selectedTheme) {
//     document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
//         darkTheme
//     );
//     themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
//         iconTheme
//     );
// }

//activate / deactivate the theme manually with the button
// themeButton.addEventListener("click", () => {
//     //add or remove dark / icon theme
//     document.body.classList.toggle(darkTheme);
//     themeButton.classList.toggle(iconTheme);

//     //we save the theme and the current icon so that the user choose
//     localStorage.setItem("selected-theme", getCurrentTheme());
//     localStorage.setItem("selected-icon", getCurrentIcon());
// });

var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var SubjectError = document.getElementById('subject-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName()
{
    var name = document.getElementById('contact-name').value;
    if(name.length ==0)
    {
        nameError.innerHTML ='name is required'
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML ='write your full name';
        return false;
        
    }
    nameError.innerHTML = '<i class="uil uil-check-circle"></i>';
    return true;
}
function validateEmail()
{
    var email = document.getElementById('contact-email').value;
    if(email.length==0)
    {
        emailError.innerHTML ='email is required'
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
    {
        emailError.innerHTML ='Email is invalid'
        return false;
    }
    emailError.innerHTML = '<i class="uil uil-check-circle"></i>';
    return true;
}
function validateMessage()
{
    var message = document.getElementById('contact-message').value;
    var required =25;
    var left = required - message.length;
    if(left>0)
    {
        messageError.innerHTML = left +'more characters required';
        return false;
    }

    messageError.innerHTML= '<i class="uil uil-check-circle"></i>';
    return true;
}
function validateForm()
{
    if(!validateName() || !validateEmail() || !validateMessage())
    {
        submitError.style.display ='block';
        submitError.innerHTML = 'please fill the all field';
        setTimeout(function(){submitError.style.display ='none';}, 3000);
        return false;
    }
    
}

