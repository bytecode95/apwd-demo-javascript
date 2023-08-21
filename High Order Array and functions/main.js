console.log("run");

const companies =[
    {name:"company One", category:"Finance", start: 1981, end:2003},
    {name:"company Two", category:"Retail", start: 1992, end:2008},
    {name:"company Three", category:"Auto", start: 1999, end:2007},
    {name:"company Four", category:"Retail", start: 1989, end:2010},
    {name:"company Five", category:"Technology", start: 2009, end:2014},
    {name:"company Six", category:"Finance", start: 1987, end:2010},
    {name:"company Seven", category:"Auto", start: 1986, end:1996},
    {name:"company Eight", category:"Technology", start: 2011, end:2016},
    {name:"company Nine", category:"Retail", start: 1981, end:1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 24, 44, 61, 13, 15, 45, 25, 64, 32];

console.log("...........ForLoop.............")
//standard for loop
for(let i=0; i < companies.length; i++){
    console.log(companies[i]);
}

console.log("...........ForEach.............")
//ForEach
companies.forEach(function (company, index,array) {
    console.log(company);
})


console.log("...........ForLoops before filter method.............")
//filter

for(let i = 0; i < ages.length; i++){
    if (ages[i]>=21){
        console.log(ages[i]);
    }
}

let canDrink = [];
for(let i = 0; i < ages.length; i++){
    if (ages[i]>=21){
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);

console.log("...........filter method.............")
//using filter

const CanDrink = ages.filter(function(age){
    if(age>= 21){
        return true;
    }
});
console.log(CanDrink);
const Drink = ages.filter(age => age >= 21);
console.log(Drink);

//Filter retail company
//Get Retail companies
const Retails = companies.filter(company => company.category === "Retail" );
console.log(Retails);

//Get 80s companies

const company80s = companies.filter(company => company.start> 1980 && company.start< 1990);
console.log(company80s);

