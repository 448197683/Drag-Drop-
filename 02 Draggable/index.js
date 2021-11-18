const img = document.querySelector('img');
const items = document.querySelectorAll('.item');

let selecter = null;

items.forEach((item) => {
  item.addEventListener('dragenter', (e) => {
    selecter = e.target;
    selecter.style.background = `blue`;
    selecter.style.border = `3px dotted black`;
  });
  item.addEventListener('dragleave', (e) => {
    selecter.style.background = `white`;
    selecter.style.border = `1px solid black`;
  });
  img.addEventListener('dragend', (e) => {
    if (selecter.className !== 'item') {
      return;
    }
    selecter.append(img);
  });
});
