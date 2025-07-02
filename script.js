 const gallery = document.getElementById('gallery');
  const slideLeft = document.getElementById('slideLeft');
  const slideRight = document.getElementById('slideRight');

  slideLeft.addEventListener('click', () => {
    gallery.scrollBy({ left: -300, behavior: 'smooth' });
  });

  slideRight.addEventListener('click', () => {
    gallery.scrollBy({ left: 300, behavior: 'smooth' });
  });