const s1 = 'Hello';     //Primitive data type
console.log(s1);

console.log(typeof(s1));
//Even though s1 is a string, some methods can operate on string like object
const s2 = s1.toUpperCase()
console.log(s2);
console.log(typeof(s2));

console.log(window);
// alert('Hello');
console.log(navigator.appVersion);

const book1 = {title:'Book One', Author:'John Doe', year:'2013', getSummary: function(){return `${this.title} was written by ${this.Author} in ${this.year}`}}


console.log(book1);
console.log(book1.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));