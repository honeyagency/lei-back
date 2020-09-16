var box = document.querySelector('#can');

window.addEventListener('focus', function() {
  box.classList.remove('running');
});

window.addEventListener('blur', function() {
  box.classList.add('running');
});