console.log("run");

let details = [];

function onWindowLoad(){
    let display = "";
    for (let i =0; i<details.length; i++){
        display += `<div class="card m-2" style="width: 18rem;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">First Name ${details[i].fName}:</li>
                <li class="list-group-item">Last Name ${details[i].lName}:</li>
                <li class="list-group-item">Address ${details[i].address}:</li>
                <li class="list-group-item">Phone Number ${details[i].number}:</li>
            </ul>
            <div class="d-flex justify-content-center">
                <button onclick="onDelete()" type="button" class="btn btn-danger mt-1 mb-1">Submit</button>
            </div>
        </div>`
    }

    document.getElementById("content-area").innerHTML = display;
}

function onSubmit(){
    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let address = document.getElementById("address").value;
    let number = document.getElementById("number").value;

    if(firstName!=="" && lastName!=="" && address!=="" && number!==""){
        details.push({
            fName: firstName,
            lName: lastName,
            address: address,
            number: number
        })
        clearText()
        onWindowLoad();
    }else{
        alert("Please fill all")
    }
}
console.log(details)


function clearText(){
   document.getElementById("fName").value = "";
   document.getElementById("lName").value = "";
   document.getElementById("address").value = "";
   document.getElementById("number").value = "";
}

function onDelete(){
    details.shift()
    console.log(details)
    onWindowLoad();
}