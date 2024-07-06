let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("mySlides");

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slideIndex and display the next slide
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";

    // Change slide every 2 seconds (2000 milliseconds)
    setTimeout(showSlides, 2000);
}

setInterval(changeSpecialText, 2000); // Change text every 2 seconds


function changeSpecialText() {
    const specialText = document.getElementById('special-text');
    const specials = ["Chicken Chilli Burger", "Red Hot Pizza", "Chicken Pics"]; // Add your special items here

    // Randomly select a special item
    const randomIndex = Math.floor(Math.random() * specials.length);
    const randomSpecial = specials[randomIndex];

    // Update the special text

    specialText.textContent = randomSpecial;
}
function snacks() {
    let drinks = document.getElementsByClassName("drinks-content");
    for (let i = 0; i < drinks.length; i++) {
        drinks[i].style.display = "none";
    }
    let lines = document.getElementsByClassName("drink");
    for (let i = 0; i < lines.length; i++) {
        lines[i].style.borderBottom = "none"; // Hide the bottom border
    }
    let snacks = document.getElementsByClassName("snacks-content");
    for (let i = 0; i < snacks.length; i++) {
        snacks[i].style.display = "inline";
    }
    let lines_snack = document.getElementsByClassName("snacks");
    for (let i = 0; i < snacks.length; i++) {
        lines_snack[i].style.borderBottom = "2px solid #FFA500"; // Add a solid black bottom border
    }

    let lines_mains = document.getElementsByClassName("main-course");
    for (let i = 0; i < lines_mains.length; i++) {
        lines_mains[i].style.borderBottom = "none"; // Add a solid black bottom border
    }
    let mains = document.getElementsByClassName("main-content");
    for (let i = 0; i < mains.length; i++) {
        mains[i].style.display = "none";
    }

}

function drinks() {
    let snacks = document.getElementsByClassName("snacks-content");
    for (let i = 0; i < snacks.length; i++) {
        snacks[i].style.display = "none";
    }
    let lines = document.getElementsByClassName("snacks");
    for (let i = 0; i < snacks.length; i++) {
        lines[i].style.borderBottom = "none";
    }
    let drinks = document.getElementsByClassName("drinks-content");
    for (let i = 0; i < drinks.length; i++) {
        drinks[i].style.display = "inline";
    }
    let lines_drink = document.getElementsByClassName("drink");
    for (let i = 0; i < lines_drink.length; i++) {
        lines_drink[i].style.borderBottom = "2px solid #FFA500"; // Add a solid black bottom border
    }
    let lines_mains = document.getElementsByClassName("main-course");
    for (let i = 0; i < lines_mains.length; i++) {
        lines_mains[i].style.borderBottom = "none"; // Add a solid black bottom border
    }
    let mains = document.getElementsByClassName("main-content");
    for (let i = 0; i < mains.length; i++) {
        mains[i].style.display = "none";
    }

}
function mains() {
    let mains = document.getElementsByClassName("main-content");
    for (let i = 0; i < mains.length; i++) {
        mains[i].style.display = "inline";
    }
    let lines_mains = document.getElementsByClassName("main-course");
    for (let i = 0; i < lines_mains.length; i++) {
        lines_mains[i].style.borderBottom = "2px solid #FFA500"; // Add a solid black bottom border
    }
    let lines_snack = document.getElementsByClassName("snacks");
    for (let i = 0; i < lines_snack.length; i++) {
        lines_snack[i].style.borderBottom = "none"; // Hide the bottom border

    }
    let snacks = document.getElementsByClassName("snacks-content");
    for (let i = 0; i < snacks.length; i++) {
        snacks[i].style.display = "none";
    }
    let lines_drink = document.getElementsByClassName("drink");
    for (let i = 0; i < lines_drink.length; i++) {
        lines_drink[i].style.borderBottom = "none";
    }
    let drinks = document.getElementsByClassName("drinks-content");
    for (let i = 0; i < drinks.length; i++) {
        drinks[i].style.display = "none";
    }
}



function toggleButtonSize() {
    var button = document.getElementById("burgers");
    var currSize = parseInt(window.getComputedStyle(button).fontSize);
    var newSize = (currSize === 16) ? 20 : 16;
    button.style.fontSize = newSize + "px";
    /*  console.log("triggered 1"); */
}
setInterval(toggleButtonSize, 2000);

function toggleButtonSizePizza() {
    var button = document.getElementById("pizza");
    var currSize = parseInt(window.getComputedStyle(button).fontSize);
    var newSize = (currSize === 16) ? 18 : 16;
    button.style.fontSize = newSize + "px";
    /*  console.log("triggered 2"); */
}
setInterval(toggleButtonSizePizza, 3000);

function toggleButtonSizeweekends() {
    var button = document.getElementById("weekends");
    var currSize = parseInt(window.getComputedStyle(button).fontSize);
    var newSize = (currSize === 16) ? 20 : 16;
    button.style.fontSize = newSize + "px";
    /*  console.log("triggered 3"); */
}
setInterval(toggleButtonSizeweekends, 3500);



function burgers() {
    let burgerImages = document.querySelectorAll(".child-img img");
    for (let i = 0; i < burgerImages.length; i++) {
        burgerImages[i].style.display = "inline";
    }
}

/* function toggleButtonClickMe() {
    var button = document.getElementById("click-me");
    var currSize = parseInt(window.getComputedStyle(button).fontSize);
    var newSize = (currSize == 14)? 18:14;
    button.style.fontSize = newSize + "px";
  
    var margin = (newSize == 14)? "-100px" : "90px";
    button.style.marginLeft = margin;
}
setInterval(toggleButtonClickMe, 2000); */



var totalCost = 0;
var countdrink = 0;

function totalItems() {
    let totalCount = countmains + countsnack + countdrink;
    document.getElementById("totalcount").innerHTML = totalCount + " items";
}
function drinksInput(drinkname, cost) {

    countdrink++;
    document.getElementById("countdrink").innerText = countdrink;
    /* console.log("triggered count"); */

    var input = document.getElementById('Drinks');
    var selectedDrinks = document.getElementById('selectedDrinks');
    if (input.value === '') {

        input.value = drinkname;
    } else {
        input.value += ', ' + drinkname;
    }
    /* 
        var deleteButton = document.createElement('button');
        deleteButton.textContent = drinkname;
        deleteButton.onclick = function () {
            removeItems(drinkname, cost, deleteButton);
    
        };
        selectedDrinks.appendChild(deleteButton); */
    totalCost += cost;
    document.getElementById('totalCost').textContent = totalCost;
    totalItems();
}

/* function removeItem(itemName, cost, deleteButton, itemType) {
    var input = document.getElementById(itemType);
    var items = input.value.split(', ');
    var index = items.indexOf(itemName);
    if (index !== -1) {
        items.splice(index, 1);
        input.value = items.join(', ');
        totalCost -= cost;
        document.getElementById('totalCost').textContent = totalCost;

        // Remove the delete button associated with the item
        deleteButton.remove();
    }

    // If there are no items left, hide the reset button
    if (items.length === 0) {
        document.getElementById('resetButton').style.display = 'none';
    }
}
 */

/* 
function removeItems(drinkname, cost, deleteButton) {
    var input = document.getElementById('Drinks');
    var items = input.value.split(', ');
    var i = items.indexOf(drinkname);
    if (i != -1) {
        items.splice(i, 1);
        input.value = items.join(', ');
        totalCost -= cost;
        document.getElementById('totalCost').textContent = totalCost;
    }
    deleteButton.remove();
    console.log("tigger");
}
 */
/* function clearInput() {
    var inputs = document.getElementById('Drinks');
    inputs.value = '';

    var input = document.getElementById('Snacks');
    input.value = '';

    totalCost = 0;
    document.getElementById('totalCost').textContent = totalCost;

    var selectedDrinks = document.getElementById('selectedDrinks');
    var deleteButtons = selectedDrinks.querySelectorAll('button');
    deleteButtons.forEach(function (button) {
        button.remove();
    });
}
 */


/** Snacks */
var countsnack = 0;
function snacksInput(snackname, cost) {
    countsnack++;
    document.getElementById("countsnack").innerText = countsnack;
    console.log("triggered count");

    var inputSnacks = document.getElementById('Snacks');
    var selectedDrinks = document.getElementById('selectedDrinks');
    if (inputSnacks.value === '') {
        inputSnacks.value = snackname;
    }
    else {
        inputSnacks.value += ', ' + snackname;
    }

    /* var deleteButton = document.createElement('button');
    deleteButton.textContent = snackname;
    deleteButton.onclick = function () {
        console.log("trigger 0");
        removeItemSnack(snackname, cost, deleteButton);
    };
    selectedDrinks.appendChild(deleteButton); */
    totalCost += cost;
    document.getElementById('totalCost').textContent = totalCost;
    totalItems();
}

/* 
function removeItemSnack(snackname, cost, deleteButton) {
   
    var input = document.getElementById('Snacks');
    var items = input.value.split(', ');
    var i = items.indexOf(snackname);
    
    if (i != -1) {
        items.splice(i, 1);
        input.value = items.join(', ');
        totalCost -= cost;
        document.getElementById('totalCost').textContent = totalCost;
        deleteButton.remove();
    }
   
} */
function clearInput(deleteButton) {
    var input = document.getElementById('Drinks');
    input.value = '';

    var inputs = document.getElementById('Snacks');
    inputs.value = '';

    var inputm = document.getElementById('MainCourse');
    inputm.value = '';

    totalCost = 0;
    document.getElementById('totalCost').textContent = totalCost;

    var selectedDrinks = document.getElementById('selectedDrinks');
    var deleteButtons = selectedDrinks.querySelectorAll('button');
    deleteButtons.forEach(function (button) {
        deleteButtons.remove();
        console.log("trigger 1");
        deleteButton.remove();
        console.log("Final trigger ");
    });
}


/**Mains */
var countmains = 0;
function mainsInput(mainname, cost) {
    countmains++;
    document.getElementById("countmaincourse").innerText = countmains;
    /*  console.log("triggered count"); */
    var inputMain = document.getElementById('MainCourse');
    var selectedDrinks = document.getElementById('selectedDrinks');
    if (inputMain.value === '') {
        inputMain.value = mainname;
    }
    else {
        inputMain.value += ', ' + mainname;
    }

    /* var deleteButton = document.createElement('button');
    deleteButton.textContent = mainname;
    deleteButton.onclick = function () {
        removeItem(mainname, cost, deleteButton);
    };

    selectedDrinks.appendChild(deleteButton); */
    totalCost += cost;
    document.getElementById('totalCost').textContent = totalCost;
    totalItems();
}


function removeItem(mainname, cost, deleteButton) {
    var input = document.getElementById('MainCourse');
    var items = input.value.split(', ');
    var i = items.indexOf(mainname);
    if (i != -1) {
        items.splice(i, 1);
        input.value = items.join(', ');
        totalCost -= cost;
        document.getElementById('totalCost').textContent = totalCost;
        deleteButton.remove();
    }
}





/**
 * POP UP    line 597 .modal display in none 
 */

var modal = document.getElementById("popupModal");
var btn = document.getElementById("submitBtn");
var span = document.getElementsByClassName("close")[0];

window.onload = function () {
    var storedName = localStorage.getItem("name");
    var storedContact = localStorage.getItem("contact");

    if (storedName && storedContact) {
        // Update the name elements
        var nameElements = document.getElementsByClassName("name");
        for (let index = 0; index < nameElements.length; index++) {
            nameElements[index].textContent = storedName;
        }
        // Update the contact display element
        document.getElementById("displayContact").textContent = storedContact;
        modal.style.display = "none"; // Hide the modal if data is available
        /*  console.log("Load"); */
    } else {
        modal.style.display = "block"; // Show the modal if no data is available
    }
}

// Function to close the modal when the close button is clicked
span.onclick = function () {
    modal.style.display = "none";
}

// Function to handle the submit button click event
btn.onclick = function () {
    var name = document.getElementById("nameInput").value;
    var contact = document.getElementById("contactInput").value;

    // Update the name elements
    var nameElements = document.getElementsByClassName("name");
    for (let index = 0; index < nameElements.length; index++) {
        nameElements[index].textContent = name;
    }
    // Update the contact display element
    document.getElementById("displayContact").textContent = contact;

    // Store data in localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("contact", contact);

    modal.style.display = "none"; // Hide the modal after submission
    console.log("Saved");
}





/**Do you know */
var paragraph = document.querySelectorAll("#facts p");
var currentIndex = 0;

function ShowParagraph() {


    paragraph.forEach(function (paragraph) {
        paragraph.classList.add('hidden');
    });

    paragraph[currentIndex].classList.remove('hidden');
    currentIndex++;

    if (currentIndex >= paragraph.length) {
        currentIndex = 0;
    }
    setTimeout(ShowParagraph, 3000);

}

ShowParagraph();


function drinks() {
    let drinkImages = document.querySelectorAll(".child-img-drinks img");
    console.log("trigger 1");
    for (let i = 0; i < drinkImages.length; i++) {
        console.log("trigger 2");
        drinkImages[i].style.display = "inline";
        console.log("trigger 3");
    }
    console.log("final trigger");
}

/**
 * Payment modal
 */
var paymentModal = document.getElementById("payment-modal");
var placeOrder = document.getElementById("submit");
var closeCross = document.getElementsByClassName("payment-modal-close")[0];

placeOrder.onclick = function () {
    paymentModal.style.display = "block";
}
closeCross.onclick = function () {
    paymentModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == paymentModal) {
        paymentModal.style.display = "none";
    }
}


function openCart() {
    console.log("triggered");
    var cartDetails = document.getElementsByClassName("cart-data");
    for (let i = 0; i < cartDetails.length; i++) {
        if (cartDetails[i].style.display === "none") {
            cartDetails[i].style.display = "block";
        } else {
            cartDetails[i].style.display = "none";
        }
    }
}
function clearInput(id) {
    document.getElementById(id).value = '';
    document.getElementById("totalCost").innerHTML = '0';

    document.getElementById("countmaincourse").innerText = '0';
    document.getElementById("countsnack").innerText = '0';
    document.getElementById("countdrink").innerText = '0';
    document.getElementById("countdrink").innerHTML = '0';
    document.getElementById("countdrink").innerHTML = '0';
    document.getElementById("totalcount").innerHTML = '0' + " items";
    /* console.log("cost triggered"); */
}

/** pre order */
function preOrderDisplay() {
    /*   console.log("triggered"); */
    var preO = document.getElementById("pre-time")
    var preObtn = document.getElementById("pre-btn")
    var reqObtn = document.getElementById("req-btn")



    if (preO.style.display === "none") {
        preO.style.display = "block";
        preObtn.style.background = "#FFA500";
        reqObtn.style.background = "#868585";
    } else {
        preO.style.display = "none";
        preObtn.style.background = "#868585";
        reqObtn.style.background = "#FFA500";

        /*  var cartDetails = document.getElementsByClassName("cart-data");
         for (let i = 0; i < cartDetails.length; i++) {
             if (cartDetails[i].style.display === "none") {
                 cartDetails[i].style.display = "block";
             } else {
                 cartDetails[i].style.display = "none";
             }
         } */
        console.log("final triggered");

    }
}




/** Responsive design */
function showMenu() {
    let clickCount = 1;

    let responsiveMenu = document.getElementsByClassName("responsive-menu");
    console.log("triggere 1 ");


    /*  console.log(clickCount); */
    console.log(" final trigger  ");
    for (let index = 0; index < responsiveMenu.length; index++) {
        if (clickCount % 2 == 0) {
            responsiveMenu[index].style.display = "none";
        }
        else {

            responsiveMenu[index].style.display = "block";
        }
        clickCount++;
    }
    console.log(" final trigger  ");
    console.log(clickCount);
}
function rotateButton(button) {
    button.classList.toggle('rotate');

    var menuDisp = document.getElementsByClassName("menu-bar-button-menu");
    for (let index = 0; index < menuDisp.length; index++) {
        /*  menuDisp[index].style.display = "none" ; */

        if (menuDisp[index].style.display == "none") {
            menuDisp[index].style.display = "block";

        } else {
            menuDisp[index].style.display = "none";

        }

    }
}



//Payment modal
/* document.addEventListener('DOMContentLoaded', (event) => {
    console.log("entered");
    // Payment modal
    const payCash = document.getElementById("payment-cash");
    const selectedPaymentOption = document.getElementById("pay-input");

    function cash() {
        console.log("entered");
        selectedPaymentOption.value = "Cash";
        console.log("working");
    }

    payCash.addEventListener('click', cash);
});
 */
function payCash() {
    /* console.log("entered"); */
    const payCash = document.getElementById("payment-cash");
    const selectedPaymentOption = document.getElementById("pay-input");
    const paymentModal = document.getElementById("payment-modal");

    function cash() {
      /*   console.log("entered"); */
        selectedPaymentOption.value = "Cash";
        console.log(selectedPaymentOption.value );
        paymentModal.style.display = "none";
       /*  console.log("working"); */
    }

    payCash.addEventListener('click', cash);
}