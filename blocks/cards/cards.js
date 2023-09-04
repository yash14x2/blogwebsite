import { createOptimizedPicture } from '../../scripts/lib-franklin.js';


export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-card-image';
      else div.className = 'cards-card-body';
    });
    ul.append(li);
  });
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}





const prevButton = document.createElement('button');
prevButton.textContent = "prev"
prevButton.onclick = goprve;
prevButton.classList.add("prevbutton");

// Get the element with the "slider-wrapper" class
const slideWrapper = document.querySelector(".slider-wrapper");

// Append the previous button element to the slideWrapper
slideWrapper.appendChild(prevButton);


const nextbutton = document.createElement('button');
nextbutton.classList.add("nextbutton");
nextbutton.textContent = "next";
nextbutton.onclick = gonext

// Get the element with the "slider-wrapper" class


// Append the previous button element to the slideWrapper
slideWrapper.appendChild(nextbutton);



const pictureElements = document.querySelectorAll('.default-content-wrapper picture img');

// Loop through each <picture> element and add the "slide" class
pictureElements.forEach((picture) => {
  picture.classList.add('slide');
});


const defaultContentWrapper = document.querySelector(".section.slider-wrapper .default-content-wrapper");
defaultContentWrapper.style.width =   "100%";
defaultContentWrapper.style.height =   "500px";
defaultContentWrapper.style.position =   "relative";
defaultContentWrapper.style.margin =   "auto";
defaultContentWrapper.style.overflow = "hidden";


prevButton.style.position = "absolute"
prevButton.style.left = "43%"


nextbutton.style.position = "absolute"
nextbutton.style.left = "50%"


const slides = document.querySelectorAll(".slide");
var counter = 0;

// Loop through each slide and apply styles 
for (let i = 0; i < slides.length; i++) {
  slides[i].style.width = "100%";
  slides[i].style.height = "100%";
  slides[i].style.position = "absolute";
  
  slides[i].style.transition = "1s";
}



slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
  slide.style.top = "30px"; // You should specify a unit for the top value, like "px"
});



const slideimage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}

function goprve() {
  console.log("prev");
  counter--
  slideimage()
}

function gonext() {
  console.log("next");
  counter++
  slideimage()
}

document.addEventListener("DOMContentLoaded", function () {
  // import { tns } from "./node_modules/tiny-slider/src/tiny-slider";

var newsCardWrapper = document.querySelector('.tekno-news-cards-wrapper');
var ulElements = newsCardWrapper.querySelectorAll('.cards-wrapper ul');
ulElements.forEach(function(ulElement) {
  ulElement.classList.add('news-card-slider');
});


  const slider = tns({
    container: '.news-card-slider',
    loop: true,
    items: 1,
    slideBy: 'page',
    nav: false,    
    autoplay: true,
    speed: 400,
    autoplayButtonOutput: false, 
    controls: false,
    mouseDrag: true,
    lazyload: true,
  });
  
});
