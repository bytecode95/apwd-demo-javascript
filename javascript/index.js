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
