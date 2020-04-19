//Navbar 
let mobileNav = document.querySelector('.mobile--nav');
let burger = document.querySelector('.hamburger');
let close = document.querySelector('.x');
let navbar = document.querySelector('.navbar');

burger.addEventListener('click', (e) => {
    navbar.classList.toggle('hide')
    mobileNav.classList.toggle('show')
    close.classList.remove('click')
});

close.addEventListener('click', (e) => {
    navbar.classList.toggle('hide')
    mobileNav.classList.toggle('show')
    close.classList.add('click')
});

// Feature Section
let bookmark = document.getElementById('bookmark');
let search = document.getElementById('search');
let share = document.getElementById('share');

let image = document.querySelector('.feat--img');
let title = document.querySelector('.feat--title');
let description = document.querySelector('.feat--desc');

bookmark.addEventListener('click', (e) => {
    e.preventDefault();
    search.classList.remove('current');
    share.classList.remove('current');
    bookmark.classList.add('current');
    image.setAttribute('src', 'images/illustration-features-tab-1.svg');
    image.setAttribute('alt', 'Webpage mockup');
    title.innerText = `Bookmark in one click`;
    description.innerText = `Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.`;
});

search.addEventListener('click', (e) => {
    e.preventDefault();
    bookmark.classList.remove('current');
    share.classList.remove('current');
    search.classList.add('current');
    image.setAttribute('src', 'images/illustration-features-tab-2.svg');
    image.setAttribute('alt', 'Internet search mockup');
    title.innerText = `Intelligent search`
    description.innerText = `Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.`
})

share.addEventListener('click', (e) => {
    e.preventDefault();
    bookmark.classList.remove('current');
    search.classList.remove('current');
    share.classList.add('current');
    image.setAttribute('src', 'images/illustration-features-tab-3.svg');
    image.setAttribute('alt', 'Interacting mockup');
    title.innerText = `Share your bookmarks`
    description.innerText = `Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.`
})

//Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', (e) => {
        question.classList.toggle('faq-active');
        e.preventDefault();
    })
})

// Form validation
let form = document.querySelector('.form-control'),
    wrapper = form.querySelector('div'),
    email = wrapper.querySelector('input'),
    message = wrapper.querySelector('small');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailVal = email.value.trim();

    if (emailVal === '') {
        wrapper.classList.add('error')
        message.innerText = `Email cannot be blank`;
    } else if (!validateEmail(emailVal)) {
        wrapper.classList.add('error')
        message.innerText = `Whoops, make sure it's an email`;
    } else {
        wrapper.className = 'form-invalid-wrapper';
    }
})

function validateEmail(email) {
    let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valid.test(String(email).toLowerCase());
}