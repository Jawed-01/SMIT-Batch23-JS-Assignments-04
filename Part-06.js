// Part 1 – Basic Functions
//  Easy


//  Q1. Hello World
//  // Solution



// function greet(){
//     console.log("Hello World!");

// }

// greet();


// Q2. Student Introduction
// Solution

//    function introduceStudent() {
//     console.log("Student Name: Jawed");
//     console.log("Age: 17");
//     console.log("Course Name: Web Development");
// }

// introduceStudent();




// Q3. Welcome Message
// Solution

//  function welcomeUser(){
//     var userName = prompt("Enter your name");
//     alert( "Welcome " +userName);
//  }
// welcomeUser();



// Q4. Even or Odd
// Solution



// function checkNumber() {

//     var num = +prompt("Enter your number");

//     if (num % 2 === 0) {
//         console.log("Even Number");

//     } else {
//         console.log("Odd Number");
//     }

// }


// checkNumber();




// Part 2  Parameters & Arguments 

// Easy to Medium
// Q5. Add Two Numbers
// Solution



// function addNumbers(num1, num2){
//     console.log(num1 + num2);
// } 
// addNumbers(30,30); 



// Q6. Student Details
// Solution


// function studentDetails(name, age, course){
//     console.log("studentname:"+ name);
//     console.log("studentage:"+ age);
//     console.log("course:"+ course);
// }

// studentDetails("jawed","17","web development")



//Q7. Calculate Rectangle Area
// Solution


// function calculateArea(length, width) {
//     var area = length * width;
//     console.log("Rectangle Area: " + area);
// }

// calculateArea(10, 5);




// Q8. Full Name Generator
// Solution


// function getFullName(firstName, lastName) {
//     var fullName = firstName + " " + lastName;
//     return fullName;
// }

// var result = getFullName("Muhammad", "Ali");

// console.log(result);



//Part 3 Default Parameters 
// Medium


// Q9. Default Greeting
// Solution


// function greetUser(userName = "Guest") {
//     console.log("Welcome " + userName);
// }

// greetUser("Jawed");
// greetUser();





// Q10. Product Price
// // Solution

// function calulatePrice(price,quantity = 1){
//     var total = price * quantity;
//     return total;

// }
//  var result = calulatePrice(500,3);
//  console.log(result);



// Q11. Square Calculator
// Solution

// function square(number){
//     return number * number;
// }

// var result =square (5)
// console.log(result)


// Q12. Find Maximum Number
// Solution

// function maximumNumber(num1,num2){
// if(num1 > num2){
//     return num1 ;

// }else{
//     return num2;
// }

// }

// var result = maximumNumber(10,20);
// console.log(result);



// Q13. Calculator with Return
// Solution

// function Calculator(num1,num2,operator){
// if(operator === "+"){
//     return num1 + num2;

// }
// else if(operator === "-"){
//     return num1 - num2

// }
// else if(operator === "*"){
//     return num1 * num2

// }
// else if (operator === "/"){
//     return num1 / num2

// }
// else{
//     return "invalid operator";
// }
// }

// var result = Calculator(2, 4,"*")
// console.log(result)



// Part 5  Challenge Activities 
// Logic Building


// Q14 Marks & Grade Calculator
// Solution

// function calculateGrade(marks) {

//     if (marks < 0 || marks > 100) {
//         return "Invalid Marks";
//     }
//     else if (marks >= 80) {
//         return "A";
//     }
//     else if (marks >= 70) {
//         return "B";
//     }
//     else if (marks >= 60) {
//         return "C";
//     }
//     else if (marks >= 50) {
//         return "D";
//     }
//     else {
//         return "Fail";
//     }
// }

// var result = calculateGrade(85);

// console.log(result);



// Q15 Mini Shopping Calculator
// Solution

// function shoppingCalculator(productPrice, quantity, discount){

//     var totalPrice = productPrice * quantity;
//     var finalAmount = totalPrice - discount;
//     return finalAmount;

// }
// var bill = shoppingCalculator(1000,3,500);
// console.log("Final Bill :" + bill);
