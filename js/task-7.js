// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input)
//  и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании
//   ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const input = document.querySelector('#font-size-control')
// console.dir(input);
const span = document.querySelector('#text')
input.addEventListener('input', onInputRange);

function onInputRange(evens) {
  let startValueRenge = +evens.target.value;
  // console.log(startValueRenge);
  span.style.fontSize = `${startValueRenge + 50}%`
  // console.log(span);
}
