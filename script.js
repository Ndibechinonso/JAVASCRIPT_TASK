let noteCountDisplay = document.getElementById("display");

let articlesWrapper = document.getElementById("articles-wrapper");


var initCount = function () {
    let notelist = document.getElementsByTagName("article").length;

    let note = "You have" + " " + notelist + " " + "notes";

    noteCountDisplay.innerHTML = note;
}

initCount()

newArticle = " ";
function newNote() {
    let newArticle = prompt("Wrtie your note: ");
    
    articlesWrapper.innerHTML += "<article class='clearfix'>" + newArticle + "</article>";
    initCount()

}










