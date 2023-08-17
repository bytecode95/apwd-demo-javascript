console.log('object page');

let person  = {
    firstName: "Chethana",
    lastName: "Virajini",
    eyeColor: "black",
    run: function(){
        console.log("Run person..........");
    }

}
console.log(person.firstName +" "+ person.lastName);
person.run();
console.log(person);

person.address = "Panadura";
console.log(person);

person.eyeColor = "Brown";
console.log(person);