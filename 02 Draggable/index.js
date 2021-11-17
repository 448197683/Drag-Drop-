const img = document.querySelector('img');
const items = document.querySelectorAll('.item');

let selecter = null;

items.forEach((item) => {
  item.addEventListener('dragenter', (e) => {
    selecter = e.target;
  });
  img.addEventListener('dragend', (e) => {
    if (selecter.className !== 'item') {
      return;
    }
    selecter.append(img);
  });
});
