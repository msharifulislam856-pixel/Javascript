// window.alert('Hello from external JS');

// alert('Hello from external JS without window object');



console.log('Hellow from console JS');


document.writeln('Hello world');

// data type initialization

let studentId = 123;
let studentCgpa = 3.75;
let studentName = "MOHAMMAD ALI";
let b = 123;



// print
document.writeln('Student ID: ' + studentId + '<br>');
document.writeln('Student CGPA: ' + studentCgpa + '<br>');
document.writeln('Student Name: ' + studentName + '<br>');



// consonle
console.log('Student ID: ' + studentId);
console.log('Student CGPA: ' + studentCgpa);
console.log('Student Name: ' + studentName);



document.writeln('<p style = "color:red"> Bangladesh is Our Country </p>');
document.writeln('<p style = "color:red">' + studentName + '</p>');


// Type casting
// flot to integer
let cgpa = parseInt(studentCgpa);
document.writeln('flot to integer: ' + typeof (cgpa));
document.writeln(cgpa + '<br>');


// integer to float
let id = parseFloat(studentId);
document.writeln('integer to float: ' + typeof (id));
document.writeln(cgpa.toFixed(3)+ '<br>');


// string to number(Integer)
let bS = parseInt(b);
document.writeln('string to number: ' + typeof (bS));
document.writeln(bS + '<br>');


// integer to string
let num = 123; // Example integer
let numStr = num.toString();
document.writeln('integer to string: ' + typeof (numStr));
document.writeln(numStr + '<br>');

// string to number(Float)
let floatStr = "123.45"; // Example string that represents a float
let floatNum = parseFloat(floatStr);
document.writeln('string to number (Float): ' + typeof (floatNum));
document.writeln(floatNum + '<br>');