const app = () => {
  let activeSlideIndex = 0;

  const upBtn = document.querySelector('.up-button');
  const downBtn = document.querySelector('.down-button');
  const sidebar = document.querySelector('.sidebar');
  const container = document.querySelector('.container');
  const slider = document.querySelector('.main-slide');
  const slides = slider.querySelectorAll('div');

  const itemsCount = slides.length;
  sidebar.style.top = `-${(itemsCount - 1) * 100}vh`;

  const changeSlide = (direction) => {
    const height = container.clientHeight;

    if (direction === 'up') {
      activeSlideIndex += 1;
      if (activeSlideIndex === itemsCount) {
        activeSlideIndex = 0;
      }
    }

    if (direction === 'down') {
      activeSlideIndex -= 1;
      if (activeSlideIndex < 0) {
        activeSlideIndex = itemsCount - 1;
      }
    }

    slider.style.transform = `translateY(-${height * activeSlideIndex}px)`;
    sidebar.style.transform = `translateY(${height * activeSlideIndex}px)`;
  };

  upBtn.addEventListener('click', () => {
    changeSlide('up');
  });

  downBtn.addEventListener('click', () => {
    changeSlide('down');
  });
};

app();
