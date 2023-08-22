console.log('Prototype page');

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

//getSummary as prototype
Car.prototype.getSummary = function (){
    return `${this.make} brand is ${this.model} which was invented in ${this.year}`
};

const d = new Date();
let year = d.getFullYear();

Car.prototype.getAge = function (){
    const years = d - myCar.year;
    return `${this.make} is ${years} years old`;
}

const myCar = new Car("Eagle", "Talon TSi", 1993);
const kenscar = new Car("Nissan", "300ZX", 1992);
const vpgscar = new Car("Mazda", "Miata", 1990);

console.log(myCar);
console.log(myCar.getSummary());
console.log(myCar.getAge());






