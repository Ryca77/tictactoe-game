$(document).ready(function() {

var turn = 'X'

$('li div').on('click', function() {
	if($(this).text() === "") {
		console.log(turn);
		$(this).append(turn);
	}
	else {
		alert('Click on an empty square!')
	}
});

$('.game').on('click', function() {
	if(turn === 'X') {
		turn = 'O'
	}
	else {
		turn = 'X'
	}
});



});



/*var turn = X
if turn = x make turn = o
	if turn = o*/