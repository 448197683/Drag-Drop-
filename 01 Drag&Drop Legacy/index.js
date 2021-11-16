const box = document.querySelector('#box');

let offset = { x: 0, y: 0 };
let isDragging = false;

box.addEventListener('mousedown', (e) => {
  isDragging = true;
  offset.x = e.offsetX;
  offset.y = e.offsetY;
});

box.addEventListener('mouseup', (e) => {
  isDragging = false;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging === true) {
    box.style.transform = `translate(${e.pageX - offset.x}px,${
      e.pageY - offset.y
    }px)`;
  }
});
