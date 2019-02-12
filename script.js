var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}

// randomNumber = (sides) => Math.floor(Math.random() * sides) + 1; 


//Prints dice roll to the page

function printNumber(number) {
  var container = document.getElementById('container'); // get the id tag 'placeholder'
  container.innerHTML = number; // fills in he inner HTML tag with results
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();
  printNumber(result);
};


// https://medium.com/@seanmcp/js-basics-random-number-680fa269c4d7

