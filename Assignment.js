// named function, anonymous function, and method. 

var x = function (a, b) {return a * b};  //Anonymous Function
var z = x(4, 3);


var namedSum = function sum (a, b) { // Named Function
    return a + b;
}

var Chair = {                                       // Method
    Material: "Wood",
    Height : "Five feet",
    Width  : "2 1/2 feet",
    chairInfo : function() {
      return this.firstName + " " + this.lastName;
    }
  };