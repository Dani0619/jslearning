//select popupbox,overlay,button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var addbutton=document.getElementById("add-popup-button")

addbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button
var cancelbutton=document.getElementById("cancel-popup")
cancelbutton.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
//select container,add-book,book-title,bookauthor,description
var container=document.querySelector(".container")
var additem=document.getElementById("add-book")
var BookTitle=document.getElementById("book-title-input")
var BookAuthor=document.getElementById("book-author-input")
var BookDes=document.getElementById("book-description-input")
additem.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcontainer")
    div.innerHTML=`<h2>${BookTitle.value}</h2>
    <h5>${BookAuthor.value}</h5>
    <p>${BookDes.value}</p>
    <button onclick="deleteelement(event)">Delete</button>`
    container.append(div)
    BookTitle.value = ""
    BookAuthor.value = ""
    BookDes.value = ""
    popupoverlay.style.display="none"
    popupbox.style.display="none"

})
function deleteelement(event){
    event.target.parentElement.remove()
}