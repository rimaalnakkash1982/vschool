var Car = function(type, model, color) {
  this.carType = type;
  this.carModel = model;
  this.carColor = color;
  this.start = function(task,object) {
    console.log("I turn the key on in the " + this.carType + " car");
      task();}
  };
  this.drive = function(object) {
    console.log("I am driving at " +50 + " kph" + " in the " + this.carColor + " " + this.carType + " car");
  }
}

var oldCar = new Car("Fiat", 500, "white");
oldCar.start(oldCar.drive);
