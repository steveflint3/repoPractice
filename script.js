document.querySelector('button').addEventListener('click', function() {
  const display = document.querySelector('#showInput');

  display.innerHTML = document.querySelector('input').value;
});
