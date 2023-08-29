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





  // Add more styles as needed for the outerWrapper and other elements
}


  // Create a new outer wrapper div
  const outerWrapper = document.createElement('div');
  outerWrapper.className = 'outer-wrapper';

  // Move the existing content to the outer wrapper
  while (block.firstChild) {
    outerWrapper.appendChild(block.firstChild);
  }

  // Append the outer wrapper to the block
  block.appendChild(outerWrapper);

  // Set styles for the outer wrapper
  outerWrapper.style.width = "100%"; // Set to desired width
  outerWrapper.style.height = "500px"; // Set to desired height
  outerWrapper.style.position = "relative";
  outerWrapper.style.overflow = "hidden";

  // Apply additional styles to the outer wrapper if needed

  // Add more styles as needed for the inner content

  // Select the .default-content-wrapper element
  const defaultContentWrapper = outerWrapper.querySelector(".default-content-wrapper");

  // Loop through each <picture> element and add the "slide" class



const pictureElements = document.querySelectorAll('.default-content-wrapper picture');

// Loop through each <picture> element and add the "slide" class
pictureElements.forEach((picture) => {
  picture.classList.add('slide');
});
