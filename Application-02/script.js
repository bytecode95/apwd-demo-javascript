
let bookList = [];

function windowLoad(){
    let contentRow = '';
    for(let i =0; i<bookList.length; i++){
        contentRow += `<tbody id="content-body">
                            <tr>
                                <td>${bookList[i].Title}</td>
                                <td>${bookList[i].Author}</td>
                                <td>${bookList[i].ISBN}</td>
                            </tr>
                        </tbody>`
    }

    document.getElementById("content-body").innerHTML = contentRow;
}

function onSubmit(){
    const sTitle = document.getElementById("title").value;
    const sAuthor = document.getElementById("author").value;
    const sISBN = document.getElementById("isbn").value;

    if(sTitle && sAuthor && sISBN !== " "){
        bookList.push({Title: sTitle, Author: sAuthor, ISBN: sISBN});
        console.log(bookList);

    }else{
        alert("Please fill content..");
    }
    clearText()
    windowLoad()
}


function clearText(){
    document.getElementById("title").value = " ";
    document.getElementById("author").value = " ";
    document.getElementById("isbn").value = " ";
}



