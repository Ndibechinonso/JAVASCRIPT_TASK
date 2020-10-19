let noteCountDisplay = document.getElementById("display");
let newHeading = document.getElementsByTagName("p");
let articlesWrapper = document.getElementById("articles-wrapper");


var initCount = function () {
    let notelist = document.getElementsByTagName("article").length;

    let note = "You have" + " " + notelist + " " + "notes";

    noteCountDisplay.innerHTML = note;
}

initCount()



function newNote() {
    let heading = document.getElementsByClassName(".format");

    let newArticle = prompt("Write your note: ");

    let newPara = prompt("Write your note: ");

    
    var dt = new Date();

    let year  = dt.getFullYear().toString().substr(-2);
    let month = (dt.getMonth() + 1).toString().padStart(2, "0");
    let day   = dt.getDate().toString().padStart(2, "0");

    if (newPara === null || newPara === "") 

    { articlesWrapper.innerHTML; } 
    else
    { articlesWrapper.innerHTML += "<article class='clearfix'>" + "<h2>" + day + '/' + month + '/' + year + ':' + " " + newArticle + "</h2>" + "<p>" + newPara + "</p>" + "</article>"; }
   
  
   
     initCount()

}












