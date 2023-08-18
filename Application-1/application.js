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
        </div>`
    }

    document.getElementById("content-area").innerHTML = display;
}

function onSubmit(){
    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;
    const address = document.getElementById("address").value;
    const number = document.getElementById("number").value;

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


function clearText(){
   document.getElementById("fName").value = "";
   document.getElementById("lName").value = "";
   document.getElementById("address").value = "";
   document.getElementById("number").value = "";
}