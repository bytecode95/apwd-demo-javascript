console.log("run");

let p = new Promise((resolve, reject) => {
    let a = 1 +2 ;
    if (a === 2){
        resolve('Sucess')
    }else{
        reject('Failed')
    }
})

p.then((message)=>{
    console.log('This is in the mesaage ' + message)
}).catch((message) =>{
    console.log('This is in the catch ' + message)
})

console.log("........Promises actual.........");


const posts = [
    {title:"Post One", body:"This is post one"},
    {title:"Post Two", body:"This is post two"}
];

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index)=> {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

function createPost(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push({title:"Post Three", body:"This is post three"});
            const error = true;

            if(!error){
                resolve();
            }else{
                reject('Error something went wrong!');
            }
        }, 2000);
    });
}

createPost()
    .then(getPosts)
    .catch(err => console.log(err));