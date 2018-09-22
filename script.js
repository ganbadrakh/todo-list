var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var currentListItems = document.querySelectorAll("li");
var listItem = document.getElementsByTagName("ul").children;

function inputLength() {
    return input.value.length;
}

for (var i = 0; i < currentListItems.length; i++) {
    addToggle(currentListItems[i]);
    createDeleteBtn(currentListItems[i]);
}

function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    var userInput = input.value.trim();
    if (!userInput == "" || !userInput == 0) {
        ul.appendChild(li);
        li.classList.add("list-group-item", "d-flex", "align-items-center");
        input.value = "";

        addToggle(li); // add toggle ability
        createDeleteBtn(li);
    } else {
        alert("Please enter first your To-Do item");
    }
}

function addToggle(listItem) {
    listItem.addEventListener("click", toggleItem);
}

function toggleItem(event) {
    event.target.classList.toggle("list-group-item-warning");
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if ((inputLength() > 0) & (event.keyCode === 13)) {
        createListElement();
    }
}

function createDeleteBtn(listItem) {
    var deleteBtn = document.createElement("button");
    var deleteBtnText = document.createTextNode("Delete");
    deleteBtn.classList.add("deleteBtn", "btn", "btn-danger", "btn-sm", "ml-auto");
    deleteBtn.appendChild(deleteBtnText);
    listItem.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", removeDeleteBtn);
}

function removeDeleteBtn(event) {
    event.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);