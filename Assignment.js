//if and else statement
if (age < 16) {
  greeting = "Welcome to the driving course!";
} else {
  greeting = "Good evening, you are not permitted to take this course.";
}

//switch statement

switch (new Month().getMonth()) {
  case 0:
    Month = "January";
    break;
  case 1:
    Month = "February";
    break;
  case 2:
     Month = "March";
    break;
  case 3:
    Month = "April";
    break;
  case 4:
    Month = "May";
    break;
  case 5:
    Month = "June";
    break;
  case 6:
    Month = "July";
}

//Ternary operator


function getInfo(isRegistered) {
    return (isRegistered ? 'Yes' : 'No');
  }
  
  console.log(getInfo(true));
  console.log(getInfo(false));
  console.log(getInfo(null));

  //Logical Operators

const a = 10;
const b = 5;

console.log(a > 9 && b > 4.9);

//hey
