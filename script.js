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

function drinksInput(drinkname, cost) {
    var input = document.getElementById('Drinks');
    var selectedDrinks = document.getElementById('selectedDrinks');
    if (input.value === '') {

        input.value = drinkname;
    } else {
        input.value += ', ' + drinkname;
    }

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.onclick = function () {
        removeItems(drinkname, cost, deleteButton);
    };
    selectedDrinks.appendChild(deleteButton);
    totalCost += cost;
    document.getElementById('totalCost').textContent = totalCost;
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


function removeItems(drinkname, cost, deleteButton) {
    var input = document.getElementById('Drinks');
    var items = input.value.split(', ');
    var i = items.indexOf(drinkname);
    if (i != -1) {
        items.splice(i, 1);
        input.value = items.join(', ');
        totalCost -= cost;
        document.getElementById('totalCost').textContent = totalCost;
        deleteButton.remove();
    }
    console.log("tigger");
}

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
function snackInput(snackname, cost) {
    var inputSnacks = document.getElementById('Snacks');
    var selectedDrinks = document.getElementById('selectedDrinks');
    if (inputSnacks.value === '') {
        inputSnacks.value = snackname;
    }
    else {
        inputSnacks.value += ', ' + snackname;
    }

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'x';
    deleteButton.onclick = function () {
        removeItem(snackname, cost, deleteButton);
    };
    selectedDrinks.appendChild(deleteButton);
    totalCost += cost;
    document.getElementById('totalCost').textContent = totalCost;

}


function removeItem(snackname, cost, deleteButton) {
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
}
function clearInput() {
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
        deleteButton.remove() ;
    });
}


    /**Mains */
     function mainInput(mainname, cost) {
        var inputMain = document.getElementById('MainCourse');
        var selectedDrinks = document.getElementById('selectedDrinks');
        if (inputMain.value === '') {
            inputMain.value = mainname;
        }
        else {
            inputMain.value += ', ' + mainname;
        }
    
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'x';
        deleteButton.onclick = function () {
            removeItem(mainname, cost, deleteButton);
        };
        selectedDrinks.appendChild(deleteButton);
        totalCost += cost;
        document.getElementById('totalCost').textContent = totalCost;
    
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
  
/* 
var modal =  document.getElementById("popupModal");
var btn = document.getElementById("submitBtn");

var span = document.getElementsByClassName("close")[0];

window.onload  =function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}
btn.onclick  = function() {
    var name =  document.getElementById("nameInput").value;
    var contact =  document.getElementById("contactInput").value;

   
   var nameElement = document.getElementsByClassName("name");

   for (let index = 0; index < nameElement.length; index++) {
    nameElement[index].textContent = name;
    
   }

     document.getElementById("displayContact").textContent = contact; 
    console.log("trigger 1");
    modal.style.display = "none";
    console.log("trigger final");
} 
 */


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
setTimeout(ShowParagraph,3000);

}

ShowParagraph();