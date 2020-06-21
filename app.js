//String Methods


// //Q no 1

// var firstName = prompt("Enter Your First Name: ");
// var lastName = prompt("Enter Your Last Name: ");
// var fullName = firstName + lastName;
// document.write(fullName);



// //Q no 2

// var favMobile = prompt("Enter Your favorite mobile phone model: ");
// document.write("My favorite Phone is: " + favMobile + "<br>");
// document.write("Legth Of String: " + favMobile.length);



// //Q no 3

// var pakistan = "Pakistan";
// document.write("String: " + pakistan + "<br>");
// var indexPakistan = pakistan.search("n");
// document.write("Index Of 'n': " + indexPakistan);



// //Q no 4

// var helloWorld = "Hello World";
// document.write("String: " + helloWorld + "<br>");
// var indexHelloWorld = helloWorld.lastIndexOf("l");
// document.write("Last Index Of 'l' is: " + indexHelloWorld);



// //Q no 5

// var pakistan = "Pakistan";
// document.write("String: " + pakistan + "<br>");
// var indexPakistan = pakistan.charAt(3);
// document.write("Character At Index 3: " + indexPakistan);



// //Q no 6

// var firstName = prompt("Enter Your First Name: ");
// var lastName = prompt("Enter Your Last Name: ");
// var fullName = firstName.concat(lastName);
// document.write(fullName);



// //Q no 7

// var city = "Hyderabad";
// document.write("City: " + city + "<br>");
// var replaceCity = city.replace("Hyder" , "Islam");
// document.write("City After Replacement: " + replaceCity);



// //Q no 8

// var message = "Ali and Sami are best friends.They play cricket and football together.";
// document.write(message + "<br>");
// var messageChange = message.split("and").join("&");
// document.write(messageChange);



// //Q no 9

// var value = "743";
// document.write("Value: " + value + "<br>");
// document.write("Type: " + typeof(value) + "<br>");
// var toNumber = Number(value);
// document.write("Value: " + toNumber + "<br>");
// document.write("Type: " + typeof(toNumber));



// //Q no 10

// var fruit = "banana";
// document.write("User Input: " + fruit + "<br>");
// var fruitUpparCase = fruit.toUpperCase();
// document.write("Uppar Case: " + fruitUpparCase);



// //Q no 11

// var word = prompt("Enter Any Word: ");
// document.write("User Input: " + word + "<br>");
// // word = word[0].toUpperCase() + word.slice(1);
// word = word.replace(word[0] , word[0].toUpperCase());
// document.write("Title Case: " + word);




// //Q no 12

// var num = 35.67;
// document.write("Number: " + num + "<br>");
// var str = (num * 100).toString();
// document.write("Result: " + str + "<br>");



// //Q no 13

// var userName = prompt("Enter User Name: ");
// for(var i = 0 ; i < userName.length ; i++){
//     if(userName.charCodeAt(i) == 33 || userName.charCodeAt(i) == 44 || userName.charCodeAt(i) == 46 || userName.charCodeAt(i) == 64){
//         alert("Please Enter Valid Username");
//     }
// }




// //Q no 14

// var a = ["apple" , "banana" , "graps" , "mango" , "orange"];
// var fruitSearch = prompt("Enter any fruit name: ").toLowerCase();
// for(var i = 0 ; i < a.length ; i++){
//     if(a[i] == fruitSearch){
//         var b = fruitSearch + " is availible at index " + i + " in our bakery";
//         break;
//     } else {
//         var b = fruitSearch + " is not availible in our bakery";
//     }
// }
// document.write(b);



// //Q no 15

// var passwordInput = prompt("Enter Password: ");
// var hasAlphabats = false;
// var hasNumbers = false;
// var hasSixCharacters=false;
// if(passwordInput.length < 6){
//     document.write("Entered Password: " + passwordInput + "<br>");
//     document.write("Password is less then 6 <br>");
//     document.write("Please Enter a valid password <br>");
// }
// if(passwordInput[0] > 0 && passwordInput[0] < 10){
//     document.write("Password can not begin with a number <br>");
//     hasSixCharacters=true;
// } 
// else{
//     for(var i = 0 ; i < passwordInput.length ; i++){
//         var charcode = passwordInput.charCodeAt(i);
//         if(charcode >= 97 && charcode <= 122 || charcode >= 65 && charcode <= 90){
//             hasAlphabats = true;
//         }
//         if(passwordInput[i] >= 0 && passwordInput[i] <= 9){
//             hasNumbers = true;
//         }
//     }
//     if(hasSixCharacters==true&& hasAlphabats == false){
//         document.write("Password Must contain some letters");
//     }
//     if(hasSixCharacters==true&& hasNumbers == false){
//         document.write("Password Must contain some Numbers");
//     }
//     else if(hasNumbers == true && hasAlphabats == true&&hasSixCharacters==true){
//         document.write("Your Password Is Sucessfully Submitted");
//     }
// }



// //Q no 16 

// var university = "University Of Karachi";
// var splitUniversity = university.split("");
// for(var i = 0 ; i < splitUniversity.length ; i++){
//     document.write(splitUniversity[i] + "<br>");
// }




// //Q no 17

// var word = prompt("Enter Any Word: ");
// document.write("User Input: " + word + "<br>");
// var wordLast = word[word.length - 1];
// document.write("Last character of input: " + wordLast);



// //Q no 18

// var str = "The quick brown fox jumps over the lazy dog".toLowerCase();
// var the = 0;
// document.write("Text: " + str + "<br>");
// var strMatch = str.split(" ");
// for(var i = 0 ; i < strMatch.length ; i++){
//     if(strMatch[i] == "the"){
//         the+=1;
//     }
// }
// document.write("They are " + the + " occurrence(s) of the word 'the'");




// //Math Methods 



// //Q no 1

// var number = +prompt("Enter Any Number: ");
// document.write("Number: " + number + "<br>");
// var numberRound = Math.round(number);
// document.write("Round Of value: " + numberRound + "<br>");
// var numberRound = Math.floor(number);
// document.write("Floor value: " + numberRound + "<br>");
// var numberRound = Math.ceil(number);
// document.write("Ceil value: " + numberRound + "<br>");



// //Q no 2


// var number = +prompt("Enter Any Negative Number: ");
// document.write("Number: " + number + "<br>");
// var numberRound = Math.round(number);
// document.write("Round Of value: " + numberRound + "<br>");
// var numberRound = Math.floor(number);
// document.write("Floor value: " + numberRound + "<br>");
// var numberRound = Math.ceil(number);
// document.write("Ceil value: " + numberRound + "<br>");



// //Q no 3

// var absoluteValue = +prompt("Enter Any Number: ");
// document.write("The absolute value of " + absoluteValue + " is " + Math.abs(absoluteValue));




// //Q no 4

// document.write("Random Dice Value: " + Math.ceil(Math.random() * 6) + "<br>");
// document.write("Random Dice Value: " + Math.ceil(Math.random() * 6) + "<br>");




// //Q no 5

// var randomValue = Math.ceil(Math.random() * 2);

// if(randomValue == 2){
//     document.write(randomValue + "<br>Random Coin Value: Heads");
// } else if(randomValue == 1){
//     document.write(randomValue + "<br>Random Coin Value: Tails");
// }




// //Q no 6


// var randomValue = Math.ceil(Math.random() * 100);
// document.write("Random number between 1 and 100: " + randomValue);




// //Q no 7

// var weight = prompt("Enter Your Weight: ");
// document.write(parseFloat(weight));




// //Q no 8

// var inputNumber = +prompt("Enter Number From 1 to 10: ");
// var secretNumber = 6;
// if(inputNumber == 6){
//     alert("Congraatulate You Enter A Right Number");
// } else {
//     alert("Try Again");
// }






// //Date Metods


// //Q no 1
// var now = new Date();
// document.write(now);



// //Q no 2

// var now = new Date().getMonth();
// var newary = ["January" , "february" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"];
// alert("Current month: " + newary[now]);




// // Q no 3

// var now = new Date().getDay();
// var newary = ["Sun" , "Mon" , "Tue" , "Wed" , "Thu" , "Fri" , "Sat"];
// alert("Current Day: " + newary[now]);



// //Q no 4

// var now = new Date().getDay();
// if(now == 6 || now == 0){
//     document.write("It's Fun Day");
// }


// //Q no 5

// var now = new Date().getDate();
// if(now < 16){
//     document.write("First fifteen days of the month");
// } else {
//     document.write("Last days of the month");
// }



// //Q no 6

// var now = new Date();
// document.write("Current Date: " + now + "<br>");
// document.write("Elapsed milliseconds since january 1 , 1970: " + now.getTime() + "<br>");
// document.write("Elapsed minutes since january 1 , 1970: " + now.getTime() / 600000);


// //Q no 7

// var now = new Date().getHours();
// if(now < 12){
//     document.write("It's AM");
// } else {
//     document.write("It's PM");
// }



// //Q no 8

// var laterDate = new Date("December 31, 2020");
// document.write("Later Date: " + laterDate);



// //Q no 9

// var ramadan = new Date("June 18, 2015");
// var now = new Date();
// var diff = now.getTime() - ramadan.getTime();
// alert(Math.round(diff / 86400000) + " Days pass since 1st ramadan 2015");



// //Q no 10

// var now = new Date("June 19, 2015");
// document.write("On reference date " + now + "<br>");
// document.write(now.getTime() / 600000 + " seconds passed since begining of 2015");




// //Q no 11


// var now =  new Date();
// var now1 = new Date().getHours();
// var set = new Date();
// set.setHours(now1 - 1);
// document.write("Current date: " + now + "<br>");
// document.write("1 Hour age: " + set + "<br>");





// //Q no 12
// var currentDate=new Date();
// var pastDate=new Date();
// past_Date.setFullYear(currentDate.getFullYear()-100);
// document.write("current date:"+currentDate+"<br>100 year back,it was "+pastDate);







// //Q no 13
// var age=+prompt("enter your age.")
// var date=new Date();
// var birth_Year=date.getFullYear()-age;
// document.write("Your age is "+ age +"<br>Your birthYear is "+birth_Year);






// //Q no 14
// var customerName=prompt("enter your name:");
// var date = new Date();
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var current_Month = months[date.getMonth()];
// var units = +prompt("enter no of units:");
// var per_Unit = +prompt("enter per unit charges");
// var late_Charges = +prompt("enter late charges");
// var net_Amount = units * per_Unit;
// var gross_Amount = net_Amount + late_Charges;

// document.write("<h1>K-Electric Bill</h1>");
// document.write("Customer Name:" + "<b>" + customerName + "</b>");
// document.write("<br>No of Units:" + "<b>" + units + "</b>");
// document.write("<br>charges per Unit:" + "<b>" + per_Unit + "</b>");
// document.write("<br>Net Amount Payable (Within Due Date):" + "<b>" + net_Amount + "</b>");
// document.write("<br>Late Payment Surcharges:" + "<b>" + late_Charges + "</b>");
// document.write("<br>Gross Amount Payable (after Due Date):" + "<b>" + gross_Amount + "</b>");







// //Function

// //Q no 1

// function dateFunc(){
//     var date = new Date();
//     document.write(date);
// }
// dateFunc();



// //Q no 2

// function usrName() {
//     var firstName = prompt("Enter Your First Name: ");
//     var lastName = prompt("Enter Your Last Name: ");
//     document.write("Welcome " + firstName + lastName);
// }
// usrName();



// //Q no 3

// function addition() {
//     var num1 = +prompt("Enter First Number: ");
//     var num2 = +prompt("Enter Second Number: ");
//     return "The Sum of two numbers: " + (num1 + num2);
// }
// document.write(addition());



// //Q no 4

// var num1 = +prompt("Enter First Number");
// var num2 = +prompt("Enter Second Number");
// var operator = prompt("Enter Operator + - * / %");

// function calculator() {
//     if(operator == "+"){
//         return num1 + num2;
//     }
//     if(operator == "-"){
//         return num1 - num2;
//     }
//     if(operator == "*"){
//         return num1 * num2;
//     }
//     if(operator == "/"){
//         return num1 / num2;
//     }
//     if(operator == "%"){
//         return num1 % num2;
//     }
// }

// document.write(calculator());



// //Q no 5


// var number = +prompt("Enter Your Number: ");
// function sqrFunc() {
//     document.write("The Square Of Your Number Is " + (number * number));
// }
// sqrFunc();



// // Q no 6
// function factorial(number) {
//     var fact = 1;
//     if (number == 0) {
//         return 1
//     }
//     else if (number < 0) {
//         return -1
//     }
//     else {
//         for (var i = 1; i <= number; i++) {
//             fact *= i;
//         }
//         return fact;
//     }

// }

// document.write(factorial(10));





// // Q no 7
// function counting(start_no, end_no) {
//     for (var i = start_no; i <= end_no; i++) {
//         document.write(i + "<br>");
//     }
// }
// counting(10, 22);





// // Q no 8
// function calculateHypotenuse(base, perp) {
//     function calculateSquare(x) {
//         return x * x;
//     }
//     var Hypotenuse = Math.sqrt(calculateSquare(base) + calculateSquare(perp));
//     document.write("Hypothenuse:" + Hypotenuse);
// }
// calculateHypotenuse(6, 8);






// // Q no 9
// function area(widht = 19, height = 20) {
//     var a = widht * height;
//     return a;
// }
// document.write(area(10, 10));









// // Q no 10
// function is_palindrome(input) {
//     var reverse = input.split("").reverse().join("");
//     if (reverse == input) {
//         document.write("The word " + input + " is palindrome.");
//     }
//     else {
//         document.write(input + " is not palindrome.");
//     }
// }
// is_palindrome("madam");





// // Q no 11
// function titleCase(sentence) {
//     var sentence = sentence.split(" ");
//     var arr = [];
//     for (var i = 0; i < sentence.length; i++) {
//         var a = sentence[i];
//         arr[i] = sentence[i].replace(sentence[i][0], sentence[i][0].toUpperCase());
//     }
//     return arr.join(" ");
// }
// document.write(titleCase("the quik brown fox"));





// // Q no 12
// function largest_word(str) {
//     var str = str.split(" ");
//     word_length = str[0].length;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i].length > word_length) {
//             word_length = str[i].length;
//             var largest_wordd = str[i];

//         }
//     }
//     return largest_wordd;
// }
// document.write(largest_word("web development corse"));





// //Q no 13
// function Occ(str, letter) {
//     times = 0;
//     for (var i = 0; i < str.length; i++) {
//         if (str[i] == letter) {
//             times += 1;
//         }
//     }
//     return "There are " + times + " occurance of letter " + letter + " in string: " + str;
// }
// document.write(Occ("JSResourceS.com", "o"));





// //Q no 14
// function calcCircumference(radius) {
//     return "The circumference of circle is: " + 2 * Math.PI * radius;
// }
// function calcArea(radius) {
//     return "<br>The area of circle is: " + Math.PI * (radius ** 2);
// }
// document.write(calcCircumference(199));
// document.write(calcArea(19));











