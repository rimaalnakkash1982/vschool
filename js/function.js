var function=(){

console.log("drive the car");
console.log("Turn on the oven");

setTimeout(function() {
  waiting(throwAway);
}, 4000);

function waiting(finished) {
  console.log("Turn on the car");
  finished();
}

function finCook() {
  console.log("Throw in the pot");
  console.log("Stir");
}

function throwAway() {
  console.log("Throw away");
}
}
console.log("cut tomato");
console.log("cut oreos");