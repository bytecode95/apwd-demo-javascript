console.log("function page");


//console.log("Go to Home...!");
//console.log("Go to school..!");

//PrintOne();
PrintTwo();
PrintOne();
PrintOne();
PrintOne();
PrintOne();
PrintOne();
PrintOne();
// functions can be called anytimes
maths();
maths2(20, 45);
maths2(345, 476);
maths2(1265784, 274658);
PrintOne();

const result = maths2023(2, 5);
console.log(result)

const result1 = maths2023(10, 76);
console.log(result1)

//function can be print in console log 
console.log(maths2023(10, 8))



function PrintOne(){
    console.log("Go to Home...!")
}

function PrintTwo(){
    console.log("Go to school..!")
}

//in this method values cannot be chnaged
function maths(){
    let one = 100;
    let two = 200;
    let total = one + two;
    console.log(total)
}

//function parameters can be paased through the function

function maths2(one, two){
    // let one = 100;
    // let two = 200;
    let total = one + two;
    console.log(total)
}

//return function
//if return value is not defined undefind value will be come when function is calling
function maths2023(one, two){
    let total = one * two;
    //console.log(total)
    return total
}
console.log("Flow controllers..................")

//Flow controllers
// if - when if condition is true , argument will be implemeted,  otherwise else will be implmented
if(false){
    alert("Hello");
}


const marks = 73;
mathsTotal = 90;
if(marks < 30){
    //console.log("Exam failed")
}

console.log("if else..................")

// if else

if(marks > 50){
    console.log("Exam passed")
}else{
    console.log("Exam failed")
}

// else if 
console.log("else if..................")

if(marks >= 75){
    console.log("Grade : A")
}else if(marks >= 65){
    console.log("Grade: B")
}else if(marks >= 40){
    console.log("Grade: C")
}else{
    console.log("Grade :  fail")
}


console.log("nested if..................")
//nested if

if(marks >= 75){
    console.log("Exam passed")
    if(mathsTotal > 50){
        console.log("Maths pass...")
    }else{
        console.log("Maths Fail...")
    }
}else{
    // if(mathsTotal < 50){
    //     console.log("Maths fail...")
    // }
}

console.log("Switch..................")
//Switch - fix values should be used

switch(marks){
    case 75,73: 
        console.log("Grade : A");
        break;
    case 65:
        console.log("Grade : B");
        break; 
    case 55:
        console.log("Grade : C");
        break;   
    default:
        console.log("Fail")    

}