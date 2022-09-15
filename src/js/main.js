var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close')

$('#button').on('click', function () {
  modal.classList.add('modal_active');
  console.log('clicked');
});

close.addEventListener('click', function () {
  modal.classList.remove('modal_active');
});