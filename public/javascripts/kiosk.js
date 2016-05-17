var btnOpen = document.querySelector('#open')
  , btnClose = document.querySelector('#close')

  , btnJoStart = document.querySelector('#john-start')
  , btnJoRent = document.querySelector('#john-rent')
  , btnJoEnd = document.querySelector('#john-end')
  , lblJoMsg = document.querySelector('#john-msg')

  , btnJaStart = document.querySelector('#jane-start')
  , btnJaRent = document.querySelector('#jane-rent')
  , btnJaEnd = document.querySelector('#jane-end')
  , lblJaMsg = document.querySelector('#jane-msg')

  , closedMsg = 'Kiosk is closed'
  , rentMsg = 'choose movie on the left and click rent. click end when finished'

  , collection = [
            "The Shawshank Redemption",
            "The Godfather",
            "The Godfather: Part II",
            "Pulp Fiction",
            "The Good, the Bad and the Ugly",
            "12 Angry Men",
            "Schindler’s List",
            "The Dark Knight",
            "The Lord of the Rings: The Return of the King",
            "Fight Club",
            "Star Wars: Episode V - The Empire Strikes Back",
            "One Flew Over the Cuckoo’s Nest",
            "The Lord of the Rings: The Fellowship of the Ring",
            "Inception",
            "Goodfellas",
            "Star Wars",
            "Seven Samurai",
            "The Matrix",
            "Forrest Gump",
            "City of God"];

$(document).ready(function () {
  $(btnOpen).prop('disabled', false);
  $(btnClose).prop('disabled', true);
  init();
});

// kiosk
$(btnOpen).click(function () {
  $(btnClose).prop('disabled', false);
  $(btnOpen).prop('disabled', true);
  $(lblJoMsg).html('');
  $(lblJaMsg).html('');
});

$(btnClose).click(function () {
  init();
  $(btnOpen).prop('disabled', false);
  $(btnClose).prop('disabled', true);
});

// john
$(btnJoStart).click(function () {
  if ($(btnOpen).is(':disabled')) {
    $(btnJoStart).prop('disabled', true);
    $(btnJaStart).prop('disabled', true);
    $(btnJoRent).prop('disabled', false);
    $(btnJoEnd).prop('disabled', false);
    $(lblJoMsg).html(rentMsg);
  } else {
    $(lblJoMsg).html(closedMsg);
  }
});

$(btnJoRent).click(function () {

});

$(btnJoEnd).click(function () {
  init()
});

// jane
$(btnJaStart).click(function () {
  if ($(btnOpen).is(':disabled')) {
    $(btnJaStart).prop('disabled', true);
    $(btnJoStart).prop('disabled', true);
    $(btnJaRent).prop('disabled', false);
    $(btnJaEnd).prop('disabled', false);
    $(lblJaMsg).html(rentMsg);
  } else {
    $(lblJaMsg).html(closedMsg);
  }
});

$(btnJaRent).click(function () {
});

$(btnJaEnd).click(function () {
  init();
});

function init() {
  $(btnJoStart).prop('disabled', false);
  $(btnJoRent).prop('disabled', true);
  $(btnJoEnd).prop('disabled', true);

  $(btnJaStart).prop('disabled', false);
  $(btnJaRent).prop('disabled', true);
  $(btnJaEnd).prop('disabled', true);

  $(lblJoMsg).html('');
  $(lblJaMsg).html('');
}
