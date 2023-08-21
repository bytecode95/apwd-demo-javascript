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

//standard for loop
for(let i=0; i < companies.length; i++){
    console.log(companies[i]);
}

//ForEach
companies.forEach(function (company, index,array) {
    console.log(company);
})