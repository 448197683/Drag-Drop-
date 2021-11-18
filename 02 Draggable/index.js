const img = document.querySelector('img');
const items = document.querySelectorAll('.item');

let selecter = null;

items.forEach((item) => {
  item.addEventListener('dragenter', (e) => {
    selecter = e.target;
    selecter.style.background = `blue`;
    selecter.style.border = `dotted`;
  });
  item.addEventListener('dragleave', (e) => {
    selecter.style.background = `white`;
    selecter.style.border = `5px solid`;
  });
  img.addEventListener('dragend', (e) => {
    if (selecter.className !== 'item') {
      return;
    }
    selecter.append(img);
  });
});
