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

