// Attaching event listeners to trigger functions once the page finishes loading
document.addEventListener('DOMContentLoaded', function () {

  // Declaring constants to prevent repetitive image element retrieval
  const displayImage = document.getElementById('current-image');
  const imageTitle = document.getElementById('image-title');
  const thumbnailsList = document.getElementById('thumbnails-list');
  
  const imageCollection = [
  {
  file: 'flowers-yellow',
  caption: 'Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany',
  },
  {
  file: 'flowers-red',
  caption: 'Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany',
  },
  {
  file: 'flowers-white',
  caption: 'Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany',
  },
  {
  file: 'flowers-purple',
  caption: 'Sentmaring Park, Münster, North Rhine-Westphalia, Germany',
  },
  {
  file: 'flowers-pink',
  caption: 'Market in Münster, North Rhine-Westphalia, Germany',
  },
  ];
  
  // Initializing the current image index as zero
  let currentImageIndex = 0;
  
  // Function to set the current image to be displayed
  function setCurrentImage(image) {
  displayImage.src = `images/${image.file}-large.jpg`;
  imageTitle.textContent = image.caption;
  }
  
  // Function to add thumbnail images to the list for display
  function addThumbnails() {
  for (let i = 0; i < imageCollection.length; i++) {
  const image = imageCollection[i];
  const listItem = document.createElement('li');
  const thumbnail = document.createElement('img');
 
    thumbnail.src = `images/${image.file}-small.jpg`;
    thumbnail.alt = image.caption;
    thumbnail.width = 240;
    thumbnail.height = 160;
  
    // Setting the active and inactive classes for the thumbnail images
    if (i === currentImageIndex) {
      thumbnail.classList.add('active');
    } else {
      thumbnail.classList.add('inactive');
    }
  
    thumbnail.addEventListener('click', function () {
      currentImageIndex = i;
      setCurrentImage(image);
      updateThumbnails();
    });
  
    listItem.appendChild(thumbnail);
    thumbnailsList.appendChild(listItem);
  }
  }
  
  // Function to update the active and inactive status of thumbnails
  function updateThumbnails() {
  const thumbnails = thumbnailsList.getElementsByTagName('img');
  for (let i = 0; i < thumbnails.length; i++) {
  if (i === currentImageIndex) {
  thumbnails[i].classList.add('active');
  thumbnails[i].classList.remove('inactive');
  } else {
  thumbnails[i].classList.add('inactive');
  thumbnails[i].classList.remove('active');
  }
  }
  }
  
  // Function to initialize the gallery by setting the current image and adding thumbnails
  function initializeGallery() {
  setCurrentImage(imageCollection[currentImageIndex]);
  addThumbnails();
  }
  
  // Calling the initializeGallery function when the DOM is loaded
  initializeGallery();
  });
