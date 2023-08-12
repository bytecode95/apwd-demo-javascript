console.log("external java script");

//  variables types 3
// 1. var
// 2. let
// 3. const

// global and local variable

var name = "Chethana" // Global variable - outside of the scope

Check()
function Check(){
    var name = "Virajini"  // Local variable - within scope
    document.write(name)
}

document.write(name);
console.log("let variable..................")

// let 
// variable declaration and value assignining 

let x = 10;

//let x = 12;  let variables canot be declared serveral times within same scope
// let variables can be declared anther scope as below
// let variable should be called within scope

// value can be assigned
{
    let x = 12;
    console.log(x)
}

//x = 15;
console.log(x)


console.log("var variable....................")

// var caribel can be declared

var y = 10;
    var y = 12;
console.log(y)
 {
    var y = 30;
    console.log(y)
    y = 40
    console.log(y)
 }  

y = 45
console.log(y)

console.log("const variable.................")
//const
// can not be decared only should assign a value
const d = 10;

//d = 20 can not assign value

// can not be declared in other scope also
// {
//     const d; 
// }

