const categories = document.querySelectorAll('.item');
console.log(categories);

let numbersArr = categories.length;
console.log('Number of Categories : ', numbersArr);

categories.forEach((item) => {
  console.log('category:', item.children[0].textContent);
  console.log('Elements:', item.children[1].children.length);
});

