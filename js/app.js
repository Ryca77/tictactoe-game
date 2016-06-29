$(document).ready(function() {

var turn = 'X'
var turns = []

$('li div').on('click', function() {
	enterTurn($(this));
	switchTurn();
	checkWin();
});

//enter turn value in empty squares//
function enterTurn(square) {
	if(square.text() === "") {
		console.log(turn);
		square.append(turn);
		}
	else {
		alert('Click on an empty square!')
		}
	}

//switch between X and O//
function switchTurn() {
	if(turn === 'X') {
		turn = 'O'
		}
	else {
		turn = 'X'
		}
	}

//check for win or tie//
function checkWin() {
	if ($('.sqOneTurn').text() === 'X' && $('.sqTwoTurn').text() === 'X' && $('.sqThreeTurn').text() === 'X') {
		alert('X Wins!')
		}
	else if ($('.sqFourTurn').text() === 'X' && $('.sqFiveTurn').text() === 'X' && $('.sqSixTurn').text() === 'X') {
		alert('X Wins!')
		}
	else if ($('.sqSevenTurn').text() === 'X' && $('.sqEightTurn').text() === 'X' && $('.sqNineTurn').text() === 'X') {
		alert('X Wins!')
		}
	else if ($('.sqOneTurn').text() === 'X' && $('.sqFourTurn').text() === 'X' && $('.sqSevenTurn').text() === 'X') {
		alert('X Wins!')
		}
	else if ($('.sqTwoTurn').text() === 'X' && $('.sqFiveTurn').text() === 'X' && $('.sqEightTurn').text() === 'X') {
		alert('X Wins!')
		}
	else if ($('.sqThreeTurn').text() === 'X' && $('.sqSixTurn').text() === 'X' && $('.sqNineTurn').text() === 'X') {
		alert('X Wins!')
		}
	else if ($('.sqOneTurn').text() === 'X' && $('.sqFiveTurn').text() === 'X' && $('.sqNineTurn').text() === 'X') {
		alert('X Wins!')
		}
	else if ($('.sqThreeTurn').text() === 'X' && $('.sqFiveTurn').text() === 'X' && $('.sqSevenTurn').text() === 'X') {
		alert('X Wins!')
		}
	else if ($('.sqOneTurn').text() === 'O' && $('.sqTwoTurn').text() === 'O' && $('.sqThreeTurn').text() === 'O') {
		alert('O Wins!')
		}
	else if ($('.sqFourTurn').text() === 'O' && $('.sqFiveTurn').text() === 'O' && $('.sqSixTurn').text() === 'O') {
		alert('O Wins!')
		}
	else if ($('.sqSevenTurn').text() === 'O' && $('.sqEightTurn').text() === 'O' && $('.sqNineTurn').text() === 'O') {
		alert('O Wins!')
		}
	else if ($('.sqOneTurn').text() === 'O' && $('.sqFourTurn').text() === 'O' && $('.sqSevenTurn').text() === 'O') {
		alert('O Wins!')
		}
	else if ($('.sqTwoTurn').text() === 'O' && $('.sqFiveTurn').text() === 'O' && $('.sqEightTurn').text() === 'O') {
		alert('O Wins!')
		}
	else if ($('.sqThreeTurn').text() === 'O' && $('.sqSixTurn').text() === 'O' && $('.sqNineTurn').text() === 'O') {
		alert('O Wins!')
		}
	else if ($('.sqOneTurn').text() === 'O' && $('.sqFiveTurn').text() === 'O' && $('.sqNineTurn').text() === 'O') {
		alert('O Wins!')
		}
	else if ($('.sqThreeTurn').text() === 'O' && $('.sqFiveTurn').text() === 'O' && $('.sqSevenTurn').text() === 'O') {
		alert('O Wins!')
		}
	else if ($('.sqOneTurn').text() !== "" && $('.sqTwoTurn').text() !== "" && $('.sqThreeTurn').text() !== "" 
		&& $('.sqFourTurn').text() !== "" && $('.sqFiveTurn').text() !== "" && $('.sqSixTurn').text() !== "" 
		&& $('.sqSevenTurn').text() !== "" && $('.sqEightTurn').text() !== "" && $('.sqNineTurn').text() !== "") {
		alert('Its a tie!')
		}
	}

});

