const categories = document.querySelectorAll('.item');
console.log(categories);

let numbersArr = categories.length;
console.log('Number of Categories : ', numbersArr);

categories.forEach((item) => {
 console.log('category:', item.querySelector('h2').textContent);
  console.log('Elements:', item.querySelectorAll('li').length);
 });

