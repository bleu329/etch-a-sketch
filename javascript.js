var squares = 16;
var wh = 25;
var color='black';

$(document).ready(function() {
  createGrid();
});

function createGrid() {
  var tableRow = "<tr></tr>"
  var div = '<div class="gray"/>'
  for(var i=0;i<squares;i++) {
    $("table").append(tableRow);
  }
  for(var i=0;i<squares;i++) {
    $("tr").append(div);
  }
  $('div').css('width', wh);
  $('div').css('height', wh);
  $('#prow').text("Current number of squares in each row: " + squares.toString());
}

$(document).on('mouseenter', 'div', function() {
  swcolor = color;
  if(color === 'random') {
    swcolor = getRandomColor();
  }
  $(this).css('background-color', swcolor);
});

$('#reset').on('click', function() {
  $('div').css('background-color', 'gray');
  do {
    squares = prompt("How many squares do you want in each row? (max 100)");
  } while(squares>100)
  wh = 400/squares.toString() + 'px';
  $('table').empty();
  createGrid();
});

$('#black').on('click', function() {
  color = 'black';
});

$('#red').on('click', function() {
  color = 'red';
});

$('#green').on('click', function() {
  color = 'green';
});

$('#yellow').on('click', function() {
  color = 'yellow';
});

$('#blue').on('click', function() {
  color = 'blue';
});

$('#random').on('click', function() {
  color = 'random';
});

function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
    color += letters[Math.round(Math.random() * 15)];
  }
  return color;
}
