const input = document.getElementById('validation-input');
input.addEventListener('blur', () => {
  const expectedLength = parseInt(input.getAttribute('data-length'));
  const actualLength = input.value.length;

  if (actualLength === expectedLength) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});
