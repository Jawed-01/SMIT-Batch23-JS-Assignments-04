// Section A – Variables, String & Number (3 Questions)

// Q1
// Solution

// var firstName = "Jawed";
// var lastName = "Khan";
// var age = 18;

// console.log(firstName);
// console.log(lastName);
// console.log(age);




// Q2
// Solution


// var string = "JAWED";
// var number = 10;
// console.log(string);
// console.log(number);



// Q3
// Solution

//  var myCity = "Karachi";
//  var myCountry = "Pakistan";
//  console.log(myCity + " "+ myCountry);




// Section B  Alert & Prompt (3 Questions)


// Q4
// Solution

// alert("WELCOME");



// Q5
// Solution

// var userName = prompt("Enter your name");
// alert("Welcome");



// Q6
// Solution

// var userAge = +prompt("Enter your age");
// alert("Your age is " + userAge);



// Section C  Arithmetic Operators (4 Questions)

//Q7
// Solution


// var num1 = 10;
// var num2 =20;
// console.log(num1 + num2);

//Q8
// Solution


// var num1 = 10;
// var num2 =20;
// console.log(num1 - num2);


// //Q9
// // Solution

// var num1 = 10;
// var num2 =20;
// console.log(num1 * num2);

// //Q10
// // Solution

// var num1 = 10;
// var num2 =20;
// console.log(num1 / num2);




// Section D  DMAS / BODMAS (3 Questions)

// Q11.  JavaScript mein calculate karein:   10 + 5 * 2
// Solution

// 20



// Q12.  JavaScript mein calculate karein:   (20 + 10) / 5
// Solution

// 6



// Q13.  JavaScript mein calculate karein:   50 - 10 + 5 * 2 / 5
// Solution

// 42



// Section E  Pre & Post Increment (3 Questions)

// Q14
// Solution

// var a =5;
// console.log(++a)


// Q15
// Solution

// var b = 10;

// console.log(b++);
// console.log(b);


// Q16
// Solution

// var num = 20;

// // console.log(++num); // Pre-increment
// // console.log(num++); // Post-increment
// // console.log(num);   // Updated value




// Section F  If, If Else & Else If (4 Questions)

// Q17
// Solution

// var userAge = +prompt("Enter your age");
// if(userAge >= 18) {
//     console.log("Eligible");

// }else{
//     console.log("Not Eligible");
// }



//Q18
// Solution


// var number = +prompt("Enter a number");

// if (number > 0) {
//     console.log("Positive");

// } else if (number < 0) {
//     console.log("Negative");

// } else {
//     console.log("Zero");
// }



// Q19
// // Solution

// var marks = prompt("Enter your marks");

// if(marks >= 80){
//     console.log("A  Grade");
// }else if(marks >= 60){
//     console.log("B Grade");

// }else if(marks >= 40 ){
//     console.log("C Grade");

// }else{
//     console.log("Fail")
// }
    

// Q20
// Solution

// var num =+prompt("Enter your number");

// if(num %  2 === 0){
//     console.log("Even number");

// }else{
//     console.log("Odd number");
// }



// Section G  Comparison Operators (4 Questions)

// Q21
// // Solution

// var num1 = 10;
// var num2 = 20;

// if(num1 > num2){
//     console.log("num1 is greater");

// }else{
//     console.log("num2 is greater");
// }



// Q22
// Solution

// var num1 = 10;
// var num2 =20 ;

// if (num1 < num2){
//     console.log("num1 is smaller")

// }else{
//     console.log("num1 is not smaller");
// }



// Q23
// Solution

// var age = 18 ;

// if(age >= 18){
//     console.log("age is 18 or greater");

// }
// if(age <= 18){
//     console.log("age is 18 or smaller")

// }



// Q24
// Solution

// var a = 10;
// var b = "10";

// console.log(a == b);
// console.log(a === b);
// console.log(!(a == b));



// Section H  Nested Conditions (3 Questions)

// Q25
// Solution


// var userMarks = +prompt("Enter your marks!");

// if(userMarks >= 50){

//     if(userMarks >= 80){
//         console.log("Excellent");

//     }else{
//         console.log("Good");
//     }

// }else{
//     console.log("Fail");
// }



// Q26
// Solution


// var userAge = +prompt("Enter your age!");

// if(userAge >= 18){

//     if(userAge >= 25){
//         console.log("Adult");

//     }else{
//         console.log("Young adult");
//     }

// }else{
//     console.log("Minor");
// }



// Q27
// Solution

// var userName = prompt("Enter your name");
// var userPassword = prompt("Enter your password");

// if(userName == "jawed"){


// if(userPassword == 12345){
//     console.log("Login Successful")

// }else{
//     alert("Incorrect Password");
// }
// }else{
//     alert("Incorrect Username");
// }




//Section I  AND & OR Gates (3 Questions)


// Q28
// Solution

// var userAge = +prompt("Enter your age");

// if(userAge >= 18  &&  userAge <= 60) {

//     console.log("Eligible Age:", userAge);

// }



// Q29
// Solution

// var userMarks = +prompt("Enter your marks!");
// var attendance = +prompt("Enter your attendance!");

// if (userMarks > 80 || attendance > 90) {
//     console.log("Eligible for Award");
// }



// Q30
// Solution


// var userName = prompt("Enter your name");
// var userPassword = prompt("Enter your password")

// if(userName == "jawed" && userPassword == "12345"){
//     console.log("Login successful");

// }else{
//     console.log("username & password incorrect");
// }


// Section J  Arrays (5 Questions)

// Q31
// Solution

// var studentArr = ["hamza","jawed","junaid","hammad","haseeb"];
// console.log(studentArr);

// Q32
// Solution

// var fruitArr = [ "apple","mango","orange","pineapple","redgrapes"];
// console.log(fruitArr[0]);
// console.log(fruitArr[2]);
// console.log(fruitArr[4]);




// Q33
// Solution

// var cityArr = ["karachi","multan","peshawar","lahore","islamabad"];
// cityArr[2] = "sukkur"
// console.log(cityArr)



// Q34
// Solution


// var emptyArr = [];
// emptyArr[0] ="jawed";
// emptyArr[1] ="bilal";
// emptyArr[2] ="khalid";
// emptyArr[3] ="majid";
// emptyArr[4] ="muzammil";
// console.log(emptyArr);


// Q35
// Solution

// var subjectArr = ["math","urdu","isl","eng","computer","science"];
// console.log(subjectArr.length);
// console.log(subjectArr[0]);
// console.log(subjectArr[5]);





//  Section K  Mixed Programming (10 Questions)

// Q36   Student Marks Calculator
// Solution


// var num1 = +prompt("Enter math marks");
// var num2 = +prompt("Enter computer marks");
// var num3 = +prompt("Enter eng marks");

// alert("Total marks: "+( num1 + num2 + num3));


// Q37  Age Calculator
// Solution

// var birthYear = +prompt("Enter your Birthyear");

// var age = 2026 - birthYAear;

// console.log("Your age is " ,age);



// Q38 Shopping Calculator
// Solution

//  var num1 = +prompt("Enter fisrt product price");
// var num2 = +prompt("Enter second product price");
// var num3 = +prompt("Enter third product price");

// alert("Total Price: "+( num1 + num2 + num3));





// Q39 Discount System
// // Solution

// var shoppingAmount = +prompt("Enter  shopping amount!");
// var discount = 0;
// if(shoppingAmount >= 5000){

//     discount = shoppingAmount *20 /100;

// }else if (shoppingAmount >= 3000){
//     discount = shoppingAmount * 10 / 100;

// }

// var finalBill = shoppingAmount - discount;

// console.log("Totalamount :",shoppingAmount);
// console.log("TotalDiscount :",discount);
// console.log("FinalBill :",finalBill);


// Q40  Even & Odd Checker
// Solution

// var userNumber = +prompt("Enter your number");
// if(userNumber % 2 === 0){
//     console.log("Even Number");

// }else{
//     console.log("Odd Number");
// }



// Q41.  Login System
// Solution


// var userName = prompt("Enter your name");
// var userPassword = prompt("Enter your password");

// if(userName === "jawed" && userPassword === "123"){
//     console.log("Welcome")


// }else{
//     console.log("Invalid Login");
// }





// Q42 Simple Calculator
// Solution


// var num1 = +prompt("Enter your num1");
// var num2 = +prompt("Enter your num2");
// var operator = prompt("choose operator (+,-,*,/)");

// if(operator === "+"){
//     console.log( "Add:", num1 + num2);

// }else if (operator === "-"){
//     console.log("Sub:", num1 - num2 );

// }else if(operator === "*"){
//     console.log("Mul:", num1 * num2);

// }else if (operator === "/"){
//     console.log("div:", num1 /num2);

// }else{
//     console.log("Invalid Operator");
// }


// Q43  Largest Number
// Solution

// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");
// var num3 = +prompt("Enter third number");

// if (num1 > num2) {

//     if (num1 > num3) {
//         console.log("Largest:", num1);
//     } else {
//         console.log("Largest:", num3);
//     }

// } else {

//     if (num2 > num3) {
//         console.log("Largest:", num2);
//     } else {
//         console.log("Largest:", num3);
//     }

// }



//Q44  Student Result System
// Solution


// var sub1 = +prompt("Enter English marks");
// var sub2 = +prompt("Enter Maths marks");
// var sub3 = +prompt("Enter Physics marks");
// var sub4 = +prompt("Enter Chemistry marks");
// var sub5 = +prompt("Enter Computer marks");

// var total = sub1 + sub2 + sub3 + sub4 + sub5;
// var percentage = (total / 500) * 100;

// console.log("Total Marks:", total);
// console.log("Percentage:", percentage + "%");

// if (percentage >= 80) {
//     console.log("Grade A");

// } else if (percentage >= 70) {
//     console.log("Grade B");

// } else if (percentage >= 60) {
//     console.log("Grade C");

// } else if (percentage >= 50) {
//     console.log("Grade D");

// } else {
//     console.log("Grade F");
// }


// // Q45
// // Solution

// var studentArr = [ "jawed","bilal","anus","majid","basit"];
// studentArr[0] = "jawedkhan";
// console.log(studentArr);



//Section L Logical Challenges (5 Questions)


// // Q46
// // Solution

// var balance = +prompt("Enter your balance");
// var withdraw = +prompt("Enter withdrawal amount");

// if (withdraw <= balance) {

//     var remainingBalance = balance - withdraw;

//     console.log("Remaining Balance:", remainingBalance);

// } else {

//     console.log("Insufficient Balance");

// }


// Q47
// Solution

// var units = +prompt("Enter electricity units");

// if (units <= 100) {

//     var bill = units * 10;
//     console.log("Total Bill:", bill);

// } else if (units <= 200) {

//     var bill = units * 15;
//     console.log("Total Bill:", bill);

// } else {

//     var bill = units * 20;
//     console.log("Total Bill:", bill);

// }


// Q48.  Number Comparison
// Solution


// var num1 = +prompt("Enter first number");
// var num2 = +prompt("Enter second number");

// if (num1 === num2) {

//     console.log("Both are Equal");

// } else if (num1 > num2) {

//     console.log("First is Greater");

// } else {

//     console.log("Second is Greater");

// }



// Q49  Shopping Eligibility
// Solution


// var age = +prompt("Enter your age");
// var amount = +prompt("Enter shopping amount");

// if (age >= 18 && amount >= 5000) {

//     console.log("Special Discount");

// } else if (age < 18 || amount < 5000) {

//     console.log("Normal Shopping");

// }



// Q50  Student Management Array
//Solution

// var studentArr = ["jawed","bilal","anus","majid","ali"];
// console.log(studentArr);
// console.log(studentArr[2]);
// studentArr[0] = "jawedkhan";
// console.log(studentArr.length);
// console.log(studentArr);