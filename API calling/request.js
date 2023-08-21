console.log(".........XML HTTP request..........");

const request1 = new XMLHttpRequest();
request1.open("GET","https://jsonplaceholder.typicode.com/users11");
request1.send();
request1.onload = ()=>{
    console.log(request1);
    if(request1.status === 200){
        console.log(JSON.parse(request1.response));
    }else{
        console.log(`error ${request1.status}`);
    }
}

console.log(".........Fetch API..........");

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response=>{
      return response.json();
}).then(json=>{
    console.log(json);
})

console.log(window);
