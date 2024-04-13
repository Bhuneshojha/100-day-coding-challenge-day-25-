//          100 days of coding challenge ( DAY 25 )

//   Question 01
  // --This function shows how to assign and update variable values
  function updateVariable() {
    let number = 10; // --Intial value
    console.log("Intial value:", number); //--Logs the initial value
    
    number = 30; // --It updates value
    console.log("Update value:", number) //--Logs the updated value
  }
  updateVariable();
//   Question 02    
  function swapValues(){
    let a = 5, b = 10;
    console.log("Before Swap: a =", a, "b =", b,);

    let temp = a; // --Temporarily stores the value of a
    a = b;        // --Sets a to b's value
    b = temp;     // --Sets b to a's original value stored in temp

    console.log("After swap: a =", a, "b =", b); // --Logs the swapped values
  }
  swapValues();
//   Question 03 
  // --This function uses compound assignment operators for different operations
function useCompoundOperators() {
    let x = 4; // --Starts with x equal to 4
    console.log("Initial x:", x);

    x += 2;   // Adds 2 to x
    console.log("After addition:", x); // --Shows x after addition

    x -= 1;   // Subtracts 1 from x
    console.log("After subtraction:", x); // --Shows x after subtraction

    x *= 3;   // Multiplies x by 3
    console.log("After multiplication:", x); // --Shows x after multiplication

    x /= 2;   // Divides x by 2
    console.log("After division:", x); // --Shows x after division
}

useCompoundOperators();
  // --We simplify arithmetic operations on x using compound assignment operators, like a shortcut.



  











