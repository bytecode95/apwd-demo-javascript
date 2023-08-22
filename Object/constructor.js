// constructor function is used to create an object

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getSummary = function getSummary() {
        return `${this.make} brand is ${this.model} which was invented in ${this.year}`
    }
}

const myCar = new Car("Eagle", "Talon TSi", 1993);
const kenscar = new Car("Nissan", "300ZX", 1992);
const vpgscar = new Car("Mazda", "Miata", 1990);

console.log(myCar);
console.log(myCar.getSummary());

console.log(kenscar);
