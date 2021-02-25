const inputWrapper = document.querySelector('#controls');
const inputValue = inputWrapper.firstElementChild;
const btnToСreate = inputValue.nextElementSibling;
const btnToClear = btnToСreate.nextElementSibling;
const boxesWrapper = document.querySelector('#boxes');

console.log(inputValue);
console.log(boxesWrapper);
console.log(btnToСreate);
console.log(btnToClear);

let amount;
inputValue.addEventListener('input', onVelueBoxes);

function onVelueBoxes(evens) {
  amount = +evens.target.value;
  return amount;
}

btnToСreate.addEventListener('click', function () {
  const boxes = createBoxes(amount);
  boxesWrapper.append(...boxes);
});

function createBoxes(amount) {
  boxesWrapper.innerHTML = '';
  return [...Array(amount)]
    .map((_, idx) => ++idx)
    .map(i => {
      const newDivBoxes = document.createElement('div');
      newDivBoxes.style.backgroundColor = `${
        '#' +
        (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
      }`;
      newDivBoxes.style.width = `${(i - 1) * 10 + 30}px`;
      newDivBoxes.style.height = `${(i - 1) * 10 + 30}px`;
      newDivBoxes.style.marginTop = `${30}px`;

      return newDivBoxes;
    });
}
btnToClear.addEventListener('click', function () {
  boxesWrapper.innerHTML = '';
});
