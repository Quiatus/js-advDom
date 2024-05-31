'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header')
const nav = document.querySelector('.nav')
const tabs = document.querySelectorAll('.operations__tab')
const tabsContainer = document.querySelector('.operations__tab-container')
const tabsContent = document.querySelectorAll('.operations__content')

const openModal = (e) => {
  e.preventDefault()
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// navigation scrolling / event delgation
/*  
document.querySelectorAll('.nav__link').forEach(link => link.addEventListener('click', (e) => {
  e.preventDefault()
  const id = e.target.getAttribute('href')
  document.querySelector(id).scrollIntoView({behavior: 'smooth'})
}))

Above example is not practical in large scope applications, as it can lead to performance issues.
Since events uses bubbling, we can use event delegation instead:

1. add event listener to common parent of all elements
2. determine what element originated the event
*/

document.querySelector('.nav__links').addEventListener('click', (e) => {
  e.preventDefault()
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  }
})

// cookies

const message = document.createElement('div')
message.classList.add('cookie-message')
message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>'

message.style.backgroundColor = '#37383d'
message.style.width = '100vw'
message.style.padding = '0.5rem'

header.append(message)

document.querySelector('.btn--close-cookie').addEventListener('click', () => message.remove())

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 30 + 'px'

//document.documentElement.style.setProperty('--color-primary', 'orange') // targets root elemen

// Smooth scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to')
const section1 = document.querySelector('#section--1')

btnScrollTo.addEventListener('click', (e) => {
  //const s1coords = section1.getBoundingClientRect()
  
  // instant
  //window.scrollTo(s1coords.left, s1coords.top + window.scrollY)

  // old way
  // window.scrollTo({
  //   left: s1coords.left, 
  //   top: s1coords.top + window.scrollY,
  //   behavior: "smooth"
  // })

  // new way
  section1.scrollIntoView({behavior: 'smooth'})
})

// tabs

tabsContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operations__tab')

  if (!clicked) return

  tabs.forEach(t => t.classList.remove('operations__tab--active'))
  clicked.classList.add('operations__tab--active')

  tabsContent.forEach(t => t.classList.remove('operations__content--active'))
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
})

// link fade 

const fadeLink = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target
    const siblings = link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')
    
    siblings.forEach(s => {if (s !== link) s.style.opacity = this})
    logo.style.opacity = this
  }
}

nav.addEventListener('mouseover', fadeLink.bind(0.5))
nav.addEventListener('mouseout', fadeLink.bind(1))

// sticky navigation



/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////

//document.querySelector('h1').addEventListener('mouseenter', (e) => alert('heading'))

// old way:
// const h1 = document.querySelector('h1')
// h1.onmouseenter = (e) => alert(e)

// event bubbling and capturing

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
//   console.log(e.target, e.currentTarget)
// })

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
//   console.log(e.target, e.currentTarget)

//   //e.stopPropagation()  // stops event propagation to parent elements
// })

// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor()
//   console.log(e.target, e.currentTarget)
// }, true) // this sets to listening for the event in capturing phase, so it will triggers first. Not commonly used


// dom traversing

// const h1 = document.querySelector('h1')
// console.log(h1.querySelectorAll('.highlight'))
// console.log(h1.childNodes) // Node
// console.log(h1.children) // HTML collection
// console.log(h1.firstElementChild)
// console.log(h1.lastElementChild)
// console.log(h1.firstChild)
// console.log(h1.lastChild)

// // parents

// console.log(h1.parentNode)
// console.log(h1.parentElement)
// console.log(h1.parentElement)

// h1.closest('.header').style.background = 'var(--gradient-secondary)' // selects the closest element that matches the parameter

// h1.closest('h1').style.background = 'var(--gradient-primary)'

// // sideways

// console.log(h1.previousElementSibling)
// console.log(h1.nextElementSibling)
// console.log(h1.nextSibling)
// console.log(h1.parentElement.children)

