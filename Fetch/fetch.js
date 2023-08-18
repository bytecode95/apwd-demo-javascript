$(document).ready(loadScript)

function loadScript(){
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err=>console.log(err));

    $("#btn-click").click(function(){
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    })



}