import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  ul.className = 'cards-carousel';
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

  // Now add the carousel wrapper and navigation buttons
  const carouselWrapper = document.createElement('div');
  carouselWrapper.className = 'carousel-wrapper';
  carouselWrapper.append(ul);

  const prevButton = document.createElement('button');
  prevButton.className = 'prev-btn';
  prevButton.textContent = 'Previous';

  const nextButton = document.createElement('button');
  nextButton.className = 'next-btn';
  nextButton.textContent = 'Next';

  // Add the navigation buttons to the carousel wrapper
  carouselWrapper.append(prevButton, nextButton);

  // Finally, append the carousel wrapper to the block
  block.append(carouselWrapper);
}
