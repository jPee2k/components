const app = () => {
  const container = document.querySelector('#app.container');
  const data = {
    colors: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'],
    width: container.clientWidth,
    height: container.clientHeight,
    itemSize: 20,
    gap: 2,
  };

  const calculateItemsCount = () => {
    data.colCount = Math.floor(data.width / (data.itemSize + data.gap));
    data.rowCount = Math.floor(data.height / (data.itemSize + data.gap));
    data.count = data.colCount * data.rowCount;
  };

  const addStyles = () => {
    container.style.gap = `${data.gap}px`;
    container.style.gridTemplateColumns = `repeat(${data.colCount}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${data.rowCount}, 1fr)`;
  };

  const getRandomClass = () => {
    const index = Math.floor(Math.random() * data.colors.length);
    return data.colors[index];
  };

  const renderItems = () => {
    const result = [];
    for (let i = 0; i < data.count; i += 1) {
      const el = document.createElement('div');
      el.style.width = `${data.itemSize}px`;
      el.style.height = `${data.itemSize}px`;
      el.classList.add('item');
      result.push(el);
    }

    container.replaceChildren(...result);
  };

  container.addEventListener('mouseover', (evt) => {
    if (evt.target.classList.contains('item') && !evt.target.classList.contains('transparent')) {
      const className = getRandomClass();
      evt.target.classList.add(className);
      setTimeout(() => {
        evt.target.classList.remove(className);
        evt.target.classList.add('transparent');
      }, 2000);
    }
  }, false);

  window.addEventListener('resize', () => {
    data.width = container.clientWidth;
    data.height = container.clientHeight;

    calculateItemsCount();
    addStyles();
    renderItems();
  });

  calculateItemsCount();
  addStyles();
  renderItems();
};

app();
