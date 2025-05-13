
let shoppingList = [];

function addItem(item) {
    const formattedItem = item.trim().toLowerCase();
    if (formattedItem && !shoppingList.includes(formattedItem)) {
        shoppingList.push(formattedItem);
    }
}

function removeLastItem() {
    shoppingList.pop();
}

function displayList() {
    const listElement = document.getElementById("shoppingListDisplay");
    listElement.innerHTML = "";

    shoppingList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        listElement.appendChild(li);
    });
}


function filterItems(searchTerm) {
    const term = searchTerm.trim().toLowerCase();
    return shoppingList.filter(item => item.includes(term));
}

function handleAddItem() {
    const input = document.getElementById("itemInput");
    addItem(input.value);
    displayList();
    input.value = ""; 
}

function handleRemoveLastItem() {
    removeLastItem();
    displayList();
}