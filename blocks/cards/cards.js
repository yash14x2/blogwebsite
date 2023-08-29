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
  
  // Remove the existing content of the block
  block.textContent = '';

  // Create a new carousel wrapper div
  const carouselWrapper = document.createElement('div');
  carouselWrapper.className = 'carousel-wrapper';

  // Append the ul (with the generated li elements) to the carousel wrapper
  carouselWrapper.append(ul);

  // Create a new div to wrap the carousel wrapper
  const outerWrapper = document.createElement('div');
  outerWrapper.className = 'outer-wrapper';

  // Append the carousel wrapper to the outer wrapper
  outerWrapper.append(carouselWrapper);

  // Append the outer wrapper to the block
  block.append(outerWrapper);

  // Set styles for the carousel wrapper
  carouselWrapper.style.width = "100%"; // Set to desired width
  carouselWrapper.style.height = "100%"; // Set to desired height
  carouselWrapper.style.overflow = "hidden"; // Apply overflow hidden

  // Add more styles as needed for the outerWrapper and other elements
}

const pictureElements = document.querySelectorAll('.default-content-wrapper picture');

// Loop through each <picture> element and add the "slide" class
pictureElements.forEach((picture) => {
  picture.classList.add('slide');
});
