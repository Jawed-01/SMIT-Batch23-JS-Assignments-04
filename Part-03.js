// Part 1 Array Methods (10 Questions)
// Easy Level
//  Topics: push, pop, shift, unshift

// Q1
// Solution


// var studentsName = ["Hamza","Jawed","junaid","hammad","haseeb"];
// studentsName.push("Anus","Muzammil");
// console.log(studentsName);



//  Q2
// Solution


// var fruitArr = ["Apple","Mango","Grapes"];
// fruitArr.pop();
// console.log(fruitArr)



 // Q3
 // Solution


//  var citiesArr = ["Karachi","Multan","Islamabad","Peshawar"];
//  citiesArr.shift();
//  console.log(citiesArr);


// Q4
// Solution

// var colorArr = ["Red","Orange","Yellow","Green"];
// colorArr.unshift("Blue","Brown");
// console.log(colorArr)


// Q5
// Solution


// var studentsName = ["Majid","Bilal","Alishah"];
// studentsName.push("Basit","Younus","Ismail");
// studentsName.pop("Ismail");
// console.log(studentsName);




// Topics: slice and splice

// Q6
// Solution

// var names = ["Ali", "Ahmed", "Jaffar", "Bilal", "Sufiyan"];
// console.log(names.slice(1,4));


// Q7
// Solution

// var names = ["arr1","arr2","arr3"];
// console.log(names.slice(0,3));


// Q8
// Soluiton

// var  arr  = ["arr1","arr2","arr3"];
// console.log(arr.slice(-2));


// Q9
// Solution

// var arr = ["arr1","arr2","arr3","arr4"]
// console.log(arr.splice(2,2));
// console.log(arr);



// Q10
// Solution

// var names = ["anus","jawed","majid"];
// console.log(names.splice(1,0,"hammad","hassan"));
// console.log(names);




// Part 2 For Loop (10 Questions)
// Easy to Medium


// Q11
// Solution


// for (var i = 1 ; i <= 20 ; i++){
//     console.log(i)

// }


// Q12
// Solution

// for(var i = 50 ; i >=1; i--){
//     console.log(i)

// }



// Q13
// Solution

// for(var i = 2 ; i <=100; i=i+2){
//     console.log(i)

// }


// Q14
// Solution

// for(var i = 1; i <= 100; i=i+2){
//     console.log(i)

// }



// Q15
// Solution

// for (var i = 1; i<=10; i++){
//  document.write("2 x " + i +  "=" + (2 * i) + "<br>");

// }


// Q16
// Solution

// var sum = 0;

// for (var i = 1; i <= 10; i++) {
//     sum = sum + i;
// }

// console.log("Total Sum:", sum);


// Q17
// Solution

// for (var i = 1; i <= 50; i++) {
//     if (i % 5 == 0) {
//         console.log(i);
//     }
// }



// Q18
// Solution

// for (var i = 10; i <= 100; i = i + 10) {
//     console.log(i);
// }


// Q19
// Solution

// for (var i = 1; i <= 10; i++) {
//     console.log(i * i);
// }


// Q20
// Solution


// for (var i = 1; i <= 20; i++) {
//     if (i == 10) {
//         break;
//     }
//     console.log(i);
// }




// Part 3 Arrays with Loops (10 Questions)

// Q21
// Solution

// var cities = ["Karachi", "Lahore", "Islamabad", "Multan", "Quetta"];

// for (var i =0; i <cities.length; i++){
//     console.log(cities[i])
// }


// Q22
// Solution


// var studentsName = ["bilal","kamran","abbas","mustafa"];

// for (var i = 0; i < studentsName.length; i++){
//     console.log("Welcome " + studentsName[i]);

// }


// Q23
//Solution

// var nums = [12,20,3,5]
// var sum =0
// for (var i = 0 ; i<nums.length;i++){
//   sum = sum + nums[i];
// }
// console.log("Total Sum :", sum)


// Q24
// Solution

// var num = [1,2,3,4,5,6,7,8,9,10];
// for (var i = 0; i<num.length; i++){
//     if(num[i] %2 === 0){
//         console.log(num[i])

    
// }

// }





// Q25
// Solution


// var num = [1,2,3,4,5,6,7,8,9,10];
// for (var i = 0; i<num.length;i++){
//     if(num[i] % 2 === 1){
//         console.log(num[i])

//     }

// }


// Q26
// Solution

// var nums = [1,2,3,4,5,6,7,8,9,10];
// for(var i =0; i<nums.length;i++){
//     if(nums[i]  %5 === 0){
//         console.log(nums[i])
//     }

// }
  


// Q27
// Solution

// var cities = ["Karachi", "Lahore", "Multan", "Islamabad", "Quetta"];
// for(var i = 0; i<cities.length;i++){
//    if(cities[i] === "Karachi" || cities[i] === "Multan"){
//     continue

//    }
// console.log(cities[i])
// }



// Q28
// Solution

// var studentsName = ["anus","muzammil","bilal","majid","wahid","khalid","alishah","basit"];
// for(var i =0; i<studentsName.length;i++){
//     if(i === 4){
//         break

//     }
//     console.log(studentsName[i])

// }



// Q29
// Solution

// var num = [1,2,3,4,5,6];
// var product =0
// for(var i=0; i<num.length;i++){
//     product = 2 * num[i];

// console.log(product )
// }




// Q30
// Solution

// var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// for (var i = fruits.length - 1; i >= 0; i--) {
//     console.log(fruits[i]);
// }




// Part 4 Functions (10 Questions)
//  Medium Level


// Q31
// Solution


// function greet() {
// console.log("Hello Students");

// }

// greet()


// Q32
// Solution

// function userName(){
//     var name = prompt("Enter your name!");
//     console.log("Welcome " , name);
// }
// userName();


// Q33
// Solution

// function add (){
//     var num1 =1;
//     var num2 =2;
//     var add = num1 +num2
//     console.log("add",add)
// }

// add()

// Q34
// Solution

// function sub (){
//     var num1 =5;
//     var num2 =2;
//     var sub = num1- num2
//     console.log("subtract",sub)
// }

// sub()


// Q35
// Solution


// function multiply() {
//     var num1 = 2;
//     var num2 = 3;
//     var num3 = 4;

//     var result = num1 * num2 * num3;

//     console.log("Multiplication:", result);
// }

// multiply();



// Q36
// Solution


// function table() {
//     var num = 5;

//     for (var i = 1; i <= 10; i++) {
//         console.log(num + " x " + i + " = " + (num * i));
//     }
// }

// table();



// Q37
// Solution


// function checkNumber() {
//     var num = 7;

//     if (num % 2 === 0) {
//         console.log("Even Number");
//     } else {
//         console.log("Odd Number");
//     }
// }

// checkNumber();


// Q38
// Solution

// function counting() {
//     for (var i = 1; i <= 100; i++) {
//         console.log(i);
//     }
// }

// counting();


// Q39
// Solution

// function greaterNumber() {
//     var num1 = Number(prompt("Enter first number"));
//     var num2 = Number(prompt("Enter second number"));

//     if (num1 > num2) {
//         console.log("Greater Number:", num1);
//     } else {
//         console.log("Greater Number:", num2);
//     }
// }

// greaterNumber();


// Q40
// Solution

// function student(name, age) {
//     console.log("Name:", name);
//     console.log("Age:", age);
// }

// student("bilal", 18);



// Part 5
//  Mixed Challenges (10 Questions)
//  Logic Building – Challenging



// Q41
// Solution

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var sum = 0;

// for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         sum = sum + numbers[i];
//     }
// }

// console.log("Even Numbers Sum:", sum);


// Q42
// Solution

// var students = ["Ali", "Ahmed", "Jawed"];

// students.push("Usman", "Hamza");

// students.pop();

// for (var i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }



// Q43
// Solution


// var numbers = [10, 15, 20, 25, 30, 35];

// for (var i = 0; i < numbers.length; i++) {

//     if (numbers[i] === 25) {
//         console.log("25 Found");
//         break;
//     }
// }



// Q44
// Solution


// var fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// fruits.splice(1, 2, "Pineapple", "Watermelon");

// for (var i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }




// Q45
// Solution


// function printArray(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }

// var fruits = ["Apple", "Banana", "Mango", "Orange"];

// printArray(fruits);



// Q46
// Solution


// function sumArray(numbers) {
//     var sum = 0;

//     for (var i = 0; i < numbers.length; i++) {
//         sum = sum + numbers[i];
//     }

//     return sum;
// }

// var result = sumArray([10, 20, 30, 40]);

// console.log("Total Sum:", result);




// Q47
// Solution

// function oddNumbers(numbers) {
//     var odd = [];

//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 !== 0) {
//             odd.push(numbers[i]);
//         }
//     }

//     return odd;
// }

// var result = oddNumbers([1, 2, 3, 4, 5, 6, 7, 8]);

// console.log(result);




// Q48
// Solution

// function welcomeStudents(students) {

//     for (var i = 0; i < students.length; i++) {
//         console.log("Welcome " + students[i]);
//     }

// }

// var names = ["Ali", "Ahmed", "Jawed", "Usman"];

// welcomeStudents(names);




// Q49
// Solution

// function printTable(tableNumber, tableLength) {

//     for (var i = 1; i <= tableLength; i++) {
//         console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
//     }

// }

// printTable(5, 10);


// Q50
// Solution

// var students = ["Ali", "Ahmed", "Jawed", "Usman", "Hamza"];

// students.push("Bilal", "Hassan");

// students.pop();

// students.unshift("Ayan");

// students.splice(2, 1);

// var copyStudents = students.slice();

// for (var i = 0; i < students.length; i++) {
//     console.log(students[i]);
// }

// function welcome(name) {
//     console.log("Welcome " + name);
// }
// welcome("Jawed");

// console.log("Copied Array:", copyStudents);



// Part 6 DOM  Input Get & Set (10 Questions)
//  Practical DOM Challenges

// Q51
// Solution


    //    function getName() {
    //         var name = document.getElementById("userName").value;

    //         console.log(name);
    //     }


    // Q52
    // Solution
    
        // function showMessage() {
        //     document.getElementById("message").value = "Welcome to JavaScript";
        // }




        // Q53
        // Solution

        //  function addition() {
        //     var number1 = Number(document.getElementById("num1").value);
        //     var number2 = Number(document.getElementById("num2").value);

        //     var sum = number1 + number2;

        //     console.log("Sum:", sum);
        // }


        // Q54
        // Solution

        //   function welcome() {
        //     var name = document.getElementById("userName").value;

        //     document.getElementById("result").innerHTML = "Welcome " + name;
        // }


        // Q55
        // Solution

        //         function checkNumber() {
        //     var num = Number(document.getElementById("number").value);

        //     if (num % 2 === 0) {
        //         document.getElementById("result").innerHTML = "Even Number";
        //     } else {
        //         document.getElementById("result").innerHTML = "Odd Number";
        //     }
        // }
          

        // Q56
        // Solution


        // function showTable() {
        //     var num = Number(document.getElementById("tableNumber").value);

        //     var table = "";

        //     for (var i = 1; i <= 10; i++) {
        //         table += num + " x " + i + " = " + (num * i) + "<br>";
        //     }

        //     document.getElementById("result").innerHTML = table;
        // }


        // Q57
        // Solution

        //   var students = [];

        // function addStudent() {
        //     var name = document.getElementById("studentName").value;

        //     students.push(name);

        //     var output = "";

        //     for (var i = 0; i < students.length; i++) {
        //         output += students[i] + "<br>";
        //     }

        //     document.getElementById("result").innerHTML = output;

        //     document.getElementById("studentName").value = "";
        // }




        // Q58
        // Solution


        //  var students = ["Ali", "Ahmed", "Jawed", "Usman"];

        // function removeStudent() {
        //     students.pop();

        //     var output = "";

        //     for (var i = 0; i < students.length; i++) {
        //         output += students[i] + "<br>";
        //     }

        //     document.getElementById("result").innerHTML = output;
        // }

        // // Pehli list show karne ke liye
        // removeStudent();



        // Q59
        // Solution


    //    function updateValue() {
    //         document.getElementById("message").value = "Saylani Mass IT Training";
    //     }



       // Q60
       // Solution

        //    function addition() {
        //     var num1 = Number(document.getElementById("num1").value);
        //     var num2 = Number(document.getElementById("num2").value);

        //     var sum = num1 + num2;

        //     document.getElementById("result").innerHTML = "Addition: " + sum;
        // }

        // function subtraction() {
        //     var num1 = Number(document.getElementById("num1").value);
        //     var num2 = Number(document.getElementById("num2").value);

        //     var sub = num1 - num2;

        //     document.getElementById("result").innerHTML = "Subtraction: " + sub;
        // }

        // function multiplication() {
        //     var num1 = Number(document.getElementById("num1").value);
        //     var num2 = Number(document.getElementById("num2").value);

        //     var multiply = num1 * num2;

        //     document.getElementById("result").innerHTML = "Multiplication: " + multiply;
        // }

        // function division() {
        //     var num1 = Number(document.getElementById("num1").value);
        //     var num2 = Number(document.getElementById("num2").value);

        //     var divide = num1 / num2;

        //     document.getElementById("result").innerHTML = "Division: " + divide;
        // }