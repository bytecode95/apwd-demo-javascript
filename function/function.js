console.log("function page");
//code block which can be used to get to do some work

//How to define a function
function onChange(){

}

//Arrow function
const onChange1 = () => {

}

function sum2(n1,n2){
    total = n1+n2;
    console.log(total);
}
function sum3(n1,n2,n3){
    total = n1+n2+n3;
    console.log(total);
}

//using arrow function
const finalAnswer = (a, b) => {
    const ans = a * b;
    console.log(ans);
}


//return function - return value can be used anywhere
function returnValue(n1, n2){
    const ans1 = n1 + n2;
    return ans1
}



sum2(10,20);
sum2(10657, 68543);
sum3(14,50,37);
finalAnswer(12,5);
const value = returnValue(10,5);
console.log(value);
console.log(returnValue(20,30));