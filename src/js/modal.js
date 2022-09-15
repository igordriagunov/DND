$(document).ready(function() {
  var button = document.querySelector('#button');
  var modal = document.querySelector('#modal');
  var close = document.querySelector('#close');

  button.on('click', function() {
    modal.removeClass('modal');
    modal.addClass('modal_active');
  });
  close.on('click', function() {
    modal.removeClass('modal_active');
  });
});