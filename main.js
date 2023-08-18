

let kitchenInput = document.getElementById("kitchen-input");
let addBTn = document.getElementById("add-btn");
let kitchenItems = document.getElementById("kitchen-items-list");

let kitchenInputData;
// cerate new Array
let kitchenInputDataArray = [];
function setLocalStorage() {
    localStorage.setItem("kitchenInput", JSON.stringify(kitchenInputDataArray));
}

function getLocalStorage() {
    if (localStorage.getItem("kitchenInput")) {
        kitchenInputDataArray = JSON.parse(localStorage.getItem("kitchenInput"));
        buildUI();
    }
    

}
function buildUI() {
    kitchenItems.textContent="";
    kitchenInputDataArray.forEach((item) => {
        // Create Dom elements now

        let li = document.createElement('li');

        let spanEl = document.createElement('span')
        li.append(spanEl)
        spanEl.innerText = item;

        li.style.cssText = 'animation-name:slideIn ';
        kitchenItems.appendChild(li);
        kitchenInput.value = "";
        kitchenInput.focus();

        // Create Trash button 

        let tarshBtn = document.createElement('i');
        tarshBtn.classList.add('fas', 'fa-trash')
        li.appendChild(tarshBtn)


        // Create edit button

        let editBtn = document.createElement('i');
        editBtn.classList.add("far", "fa-edit");
        li.appendChild(editBtn);
    })

}
// step 2
// add kitchen items
function addKitchenItems() {
    kitchenInputData = kitchenInput.value;

    kitchenInputDataArray.push(kitchenInputData);
    //Set to local storage

    setLocalStorage()
    //get from local storage

    getLocalStorage()

}

// Delet items form kitchenl

function deletKitchenItem(event) {

    if (event.target.classList[1] === "fa-trash") {
        let items = event.target.parentElement;
        items.classList.add('slideOut');
        items.addEventListener('transitionend', function () {
            items.remove();
        })


    }

}

function editKitchenItems(event) {
    if (event.target.classList[1] === "fa-edit") {
        let ediedValue = prompt("Please add new text")
        let items = event.target.parentElement;
        let spanEl = items.querySelector("span");
        spanEl.innerText = ediedValue;
    }
}



// set 1

// Add an event lister to the button
addBTn.addEventListener("click", addKitchenItems)
kitchenItems.addEventListener("click", deletKitchenItem);
kitchenItems.addEventListener("click", editKitchenItems);

getLocalStorage();




