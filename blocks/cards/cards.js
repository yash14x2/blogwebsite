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
prevButton.textContent = "prev";
prevButton.onclick = goprve;
prevButton.classList.add("prevbutton");

// Get the element with the "slider-wrapper" class
const slideWrapper = document.querySelector(".slider-wrapper");

// Append the previous button element to the slideWrapper
slideWrapper.appendChild(prevButton);

const nextButton = document.createElement('button');
nextButton.classList.add("nextbutton");
nextButton.textContent = "next";
nextButton.onclick = gonext;

// Append the previous button element to the slideWrapper
slideWrapper.appendChild(nextButton);

const pictureElements = document.querySelectorAll('.default-content-wrapper picture img');

// Loop through each <picture> element and add the "slide" class
pictureElements.forEach((picture) => {
  picture.classList.add('slide');
});

const defaultContentWrapper = document.querySelector(".section.slider-wrapper .default-content-wrapper");
defaultContentWrapper.style.width = "100%";
defaultContentWrapper.style.height = "500px";
defaultContentWrapper.style.position = "relative";
defaultContentWrapper.style.margin = "auto";
defaultContentWrapper.style.overflow = "hidden";

const slides = [...document.getElementsByClassName("slide")]; // Convert HTMLCollection to array

// Loop through each slide and apply styles 
for (let i = 0; i < slides.length; i++) {
  slides[i].style.width = "100%";
  slides[i].style.height = "100%";
  slides[i].style.position = "absolute";
  // slides[i].style.transition = "absolute";
}

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
  slide.style.top = "30";
});

function goprve() {
  console.log("prev");
}

function gonext() {
  console.log("next");
}
