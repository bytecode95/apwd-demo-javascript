console.log("Practice");

const users = [
    {firstName: 'John', lastName: 'Doe', age: 25},
    {firstName: 'Jane', lastName: 'Doe', age: 30},
    {firstName: 'Jack', lastName: 'Peter', age: 35},
    {firstName: 'Jill', lastName: 'Johnson', age: 40},
    {firstName: 'Joe', lastName: 'Wan', age: 45},
    {firstName: 'Smith', lastName: 'black', age: 45},
    {firstName: 'Steve', lastName: 'William', age: 45},
    {firstName: 'Brad', lastName: 'Peter', age: 45},
    {firstName: 'John', lastName: 'Cena', age: 45},
    {firstName: 'Kate', lastName: 'Doe', age: 45},
]

const shoppingCart = [
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Xiomi', price: 2.99, quantity: 2},
    {name: 'Samsung', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 4.99, quantity: 4},
    {name: 'Nokia', price: 4.99, quantity: 4},
]

const numbers = [10, 29, 11, 43, 37, 45, 87, 32, 23, 46, 38];

console.log("..........For...........")
//ForEach
for (let i = 0; i< users.length; i++){
    console.log(users[i]);
}

console.log("..........Forof...........")
for(let a of users){
    console.log(a);
}
console.log("..........Foreach...........")
users.forEach(userValue=>{
    console.log(userValue);
})

console.log("..........Foreach with three values...........")
users.forEach((element, index, array)=>{
    console.log(element, index, array);
})

console.log("..........Map Method...........")

const Firstname = users.map(name => name.firstName);
console.log(Firstname);

const userAge = users.map(Age => Age.age);
console.log(userAge);

const dubleNum = numbers.map(value => value*2);
console.log(dubleNum);

console.log("..........filter Method...........")

const firstName2 = users.filter(name => name.firstName==='John');
console.log(firstName2);

const lastName2 = users.filter(name => name.lastName==='Doe');
console.log(lastName2);

console.log("..........sort Method...........")

const sortedNum = numbers.sort(function (n1,n2){
    if (n1>n2){
        return 1
    }else{
        return -1
    }
});
console.log(sortedNum);

console.log("..........reduce Method...........")

const totalNUm = numbers.reduce(function(total , numbers){
    return total + numbers
});

console.log(totalNUm);