// Array of gallery items
const galleryItems = [
    {
      filename: 'flowers-pink-large.jpg',
      alt: 'Pink Flowers',
      info: 'Pink flowers in a garden.',
    },
    {
      filename: 'flowers-purple-large.jpg',
      alt: 'Purple Flowers',
      info: 'Purple flowers blooming in a field.',
    },
    {
      filename: 'flowers-red-large.jpg',
      alt: 'Red Flowers',
      info: 'Vibrant red flowers in a bouquet.',
    },
    {
      filename: 'flowers-white-large.jpg',
      alt: 'White Flowers',
      info: 'Elegant white flowers against a green backdrop.',
    },
    {
      filename: 'flowers-yellow-large.jpg',
      alt: 'Yellow Flowers',
      info: 'Bright yellow flowers in a sunny garden.',
    },
  ];
  
  // Get the thumbnail container element
  const thumbnailContainer = document.querySelector('ul');
  
  // Get the main image figure and figcaption elements
  const mainImageFigure = document.querySelector('.main-image');
  const mainImageCaption = document.querySelector('.main-image figcaption');
  
  // Build the thumbnail list dynamically
  galleryItems.forEach(function (item, index) {
    // Create a new list item element
    const listItem = document.createElement('li');
  
    // Create a new image element
    const imageElement = document.createElement('img');
    imageElement.src = 'images/' + item.filename;
    imageElement.alt = item.alt;
  
    // Create a new figcaption element for the additional information
    const figcaption = document.createElement('figcaption');
    figcaption.textContent = item.info;
  
    // Append the image element and figcaption to the list item
    listItem.appendChild(imageElement);
    listItem.appendChild(figcaption);
  
    // Add click event listener to the list item
    listItem.addEventListener('click', function () {
      // Update the main image with the clicked thumbnail
      const mainImage = document.querySelector('.main-image img');
      mainImage.src = imageElement.src;
      mainImage.alt = imageElement.alt;
  
      // Update the caption with the alt attribute of the thumbnail
      mainImageCaption.textContent = item.info;
  
      // Remove the 'selected' class from all thumbnails
      const thumbnails = document.querySelectorAll('ul li');
      thumbnails.forEach(function (thumbnail) {
        thumbnail.classList.remove('selected');
      });
  
      // Add the 'selected' class to the clicked thumbnail
      listItem.classList.add('selected');
    });
  
    // Append the list item to the thumbnail container
    thumbnailContainer.appendChild(listItem);
  });
  