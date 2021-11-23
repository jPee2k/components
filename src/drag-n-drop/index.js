const app = () => {
  const state = {
    drugNDrop: {
      counter: 0,
      draggableId: null,
    },
  };

  const items = document.querySelectorAll('.item[draggable="true"]');
  const placeholders = document.querySelectorAll('.placeholder');

  items.forEach((item) => {
    state.drugNDrop.counter += 1;
    const id = state.drugNDrop.counter;
    item.setAttribute('data-id', id.toString());

    item.addEventListener('dragstart', (evt) => {
      state.drugNDrop.draggableId = id;
      setTimeout(() => evt.target.classList.add('hide'), 0);

      placeholders.forEach((place) => {
        place.classList.add('target-place');
      });
    });

    item.addEventListener('dragend', (evt) => {
      state.drugNDrop.draggableId = null;
      evt.target.classList.remove('hide');

      placeholders.forEach((place) => {
        place.classList.remove('target-place');
      });
    });
  });

  placeholders.forEach((place) => {
    place.addEventListener('dragover', (evt) => {
      evt.preventDefault();
    });
    place.addEventListener('drop', (evt) => {
      const draggableItem = document.querySelector(`.item[data-id="${state.drugNDrop.draggableId}"]`);
      evt.currentTarget.append(draggableItem);
      evt.currentTarget.classList.remove('target-place');
    });
  });
};

app();
