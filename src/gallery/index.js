const app = () => {
  const slides = document.querySelectorAll('#app .slide');

  const removeActiveClass = () => {
    const active = document.querySelector('#app .active');
    active.classList.remove('active');
  };

  slides.forEach((slide) => {
    slide.addEventListener('click', () => {
      removeActiveClass();

      slide.classList.add('active');
    });
  });
};

app();
