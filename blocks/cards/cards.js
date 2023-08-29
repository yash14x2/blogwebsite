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

const pictureElements = document.querySelectorAll('.default-content-wrapper picture');

// Loop through each <picture> element and add the "slide" class
pictureElements.forEach((picture) => {
  picture.classList.add('slide');
});


// Select the .default-content-wrapper element
const defaultContentWrapper = document.querySelector(".default-content-wrapper");

// Set styles for the element
defaultContentWrapper.style.width = "60%";
defaultContentWrapper.style.height = "500px";
defaultContentWrapper.style.position = "relative";


// Add more styles as needed





// Select the .default-content-wrapper element

// Add more styles as needed
// Get all elements with the class "slide"
const slides = document.getElementsByClassName("slide");

// Loop through each slide and apply styles
for (let i = 0; i < slides.length; i++) {
  slides[i].style.width = "100%";
  slides[i].style.height = "100%";
  slides[i].style.position = "absolute";
}


