console.log("event page");

function clickMe() {
    console.log("Clicked");
}

function mouseOver() {
    console.log("Mouse Over");
}

function mouseOut() {
    console.log("Mouse Out");
}

function load() {
    console.log("load image");
}

function onChange() {
    console.log("Print type");
}

function onKeypress() {
    console.log("Key press");
}

function onkeyUp() {
    console.log("Key up");
}

function onkeyDown() {
    console.log("Key down");
}

//========================================================================

function submit() {
    const text = document.getElementById("input-2").value;
    console.log(text);
}

function onChangeText() {
    const text1 = document.getElementById("input-2").value;
    console.log(text1);
}

function onButtonChange(){
    document.getElementById("btn-1").style.width = '145px';
    document.getElementById("btn-1").style.backgroundColor = '#990808';
}

function onButtonChangeout(){
    document.getElementById("btn-1").style.width = '150px';
    document.getElementById("btn-1").style.backgroundColor = 'red';
}
