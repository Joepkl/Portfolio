console.log("Rescale the website to see responsiveness!")

// Verschijnen skills animatie
let skills = document.querySelector('#skills')

setInterval(() => {
    if(skills.textContent === 'UX / UI designer'){
        setTimeout(function test(){
            skills.textContent = 'Frontend developer'
        },3000)
    }
})

setInterval(() => {
    if(skills.textContent === 'Frontend developer'){
        setTimeout(function test(){
            skills.textContent = 'Graphic designer'
        },3000)
    }
})

setInterval(() => {
    if(skills.textContent === 'Graphic designer'){
        setTimeout(function test(){
            skills.textContent = 'UX / UI designer'
        },3000)
    }
})


skills.classList.add('animatie')



// Scrollbased animatie 1
function scrollAnimatie1(){
    const reveals = document.querySelectorAll('.scrollAnimatie1')
    reveals.forEach(element =>{
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("animatie1");
        } 
        else {
            element.classList.remove("animatie1");
      }
    })
}

window.addEventListener("scroll", scrollAnimatie1);

// To check the scroll position on page load
scrollAnimatie1();


// Scrollbased animatie 2
function scrollAnimatie2(){
    const reveals = document.querySelectorAll('.work')
    reveals.forEach(element =>{
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 50;
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add("animatie2");
        } 
        else {
            element.classList.remove("animatie2");
      }
    })
}

window.addEventListener("scroll", scrollAnimatie2);

// To check the scroll position on page load
scrollAnimatie2();



// Contact form animation
const sendButton = document.querySelector('button')

function changeText(){
    sendButton.textContent = 'Send'
}

function changeText2(){
    sendButton.textContent = 'Send me a message'
}

sendButton.addEventListener('mouseover', changeText)
sendButton.addEventListener('mouseleave', changeText2)
