// Задание 1
// В HTML есть список категорий ul#categories.
// Напиши скрипт, который выполнит следующие операции.

// Посчитает и выведет в консоль количество категорий в ul#categories,
//  то есть элементов li.item. Получится 'В списке 3 категории.'.
const categoriesItems = document.querySelector('#categories');
console.log(categoriesItems);
const elementsItem = document.querySelectorAll('.item')
console.log(elementsItem);
console.log(elementsItem.length);

// Для каждого элемента li.item в списке ul#categories, найдет и выведет
//  в консоль текст заголовка элемента (тега h2) и количество элементов в
//   категории (всех вложенных в него элементов li).
console.log(elementsItem[0].firstElementChild.textContent);

// Например для первой категории получится:

// Категория: Животные
// Количество элементов: 4

