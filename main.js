let choiceOfTicket = document.getElementById("cot");
let numberOfTickets = document.getElementById("numTicket");
let threeHours = document.getElementById("duration3h")
let halfDay = document.getElementById("duration1/2");
let fullDay = document.getElementById("duration1d");
let twoDay = document.getElementById("duration2d");
let foodTkn = document.getElementById("foodToken");
let formOutput = document.getElementById("formOutput");
let formOverall = document.getElementById("formOverall");

let orderListElement = document.getElementById("orderlist");

let addOrder = document.getElementById("addBtn");
let placeOrder = document.getElementById("placeBtn");
let addFavourite = document.getElementById("addFav");
let orderFavourite = document.getElementById("orderFav");


// Data 
let choiceValueTxt;
let numOpInt;
let durationValueTxt;
let foodTknValueTxt;

let total = 0;
let overallTotal = 0;

window.addEventListener("load",startup);

function startup() {
    let value = 0;
    
    formOutput.innerText = `Cost: ${value.toFixed(2)}LKR `;
    formOverall.innerText = `Overall Cost: ${value.toFixed(2)}LKR `;

}


choiceOfTicket.addEventListener("change", () => { 
   
    choiceValueTxt = choiceOfTicket.value;
    console.log(choiceValueTxt);
    calculateOrder();
});

numberOfTickets.addEventListener("change", () => {
        numOpInt= parseInt(numberOfTickets.value);
        console.log(numOpInt);
        calculateOrder();
});

foodTkn.addEventListener("click", () => {
    if (foodTkn.checked) {
        foodTknValueTxt = true;
    
            
    console.log(foodTknValueTxt);
    calculateOrder();
    }

});

const durationOptions = [threeHours,halfDay,fullDay,twoDay];

durationOptions.forEach(durationOption => durationOption.addEventListener("change", () => {
    durationValueTxt = durationOption.value;
    calculateOrder();
}));



addOrder.addEventListener("click", addOrderFunction);
// addFavourite.addEventListener("click", addFav);
// orderFavourite.addEventListener("click", orderFav);
// placeOrder.addEventListener("click", finalOrder);

function addOrderFunction() {
    if (form.checkValidity() === true) {
    calculateOrder();
    overallTotal = overallTotal + total; // Add total of order

    FoodTokenOrdertext = ""
    if (foodTknValueTxt === true) {
        FoodTokenOrdertext = "Food Token";
    }
    orderListElement.innerHTML += `
                        <br>
                        ${choiceValueTxt}
                        ${numOpInt} <br> 
                        ${durationCost} <br> 
                        ${durationValueTxt} <br> 
                        ${FoodTokenOrdertext} <br>
                        ${total.toFixed(2)}
                        `;
    // clear form elements and data
    choiceValueTxt = "";
    numOpInt = 0;
    durationValueTxt = "";
    foodTknValueTxt = "";

    choiceOfTicket.selectedIndex = 0;
    numberOfTickets.value = 0 
}
}


const form = document.querySelector("#formTicket");
function calculateOrder(){
    if (form.checkValidity() === true) {
        total = 0;
        choiceCost = 0;
        durationCost = 0;
        extrasCost = 0;

        //


        durationOptions.forEach(option => option.disabled = false);
        foodTkn.disabled = false;
        console.log(choiceValueTxt,durationValueTxt,numOpInt, foodTknValueTxt);
        isForeign = false;
         
        numOpInt= parseInt(numberOfTickets.value);
        choiceValueTxt = choiceOfTicket.value;
        durationOptions.forEach(durationOption => durationOption.addEventListener("change", () => {
            durationValueTxt = durationOption.value;
        }));

        switch (choiceValueTxt) {
            case "Foreign Adult Pass":
                choiceCost = 5000;
                isForeign = true;
                break;

            case "Foreign Child Pass":
                choiceCost = 2500;
                isForeign = true;
                break;

            case "Local Adult Pass":
                choiceCost = 1000;
                console.log("wokrda l a p")
                break;

            case "Local Child Pass":
                choiceCost = 500;
                break;

            case "Local Annual Pass":
                choiceCost = 4500;
                break;

            case "Foreign Annual Pass":
                choiceCost = 15000;
                durationOptions.forEach(option => option.disabled = true);
                foodTkn.disabled = true;
                isForeign = true;
                break;
            default:
                break;
        }

        if (isForeign === true) {
            switch (durationValueTxt) {
                case "3 Hours":
                    durationCost = 0;
                    break;

                case "1/2 Day":
                    durationCost = 500;
                    break;

                case "Full Day":
                    durationCost = 1000;
                    break;

                case "2 Days":
                    durationCost = 0;
                    break;
            
                default:
                    break;
            }

        } else {
            switch (durationValueTxt) {
                case "3 Hours":
                    durationCost = 0;
                    break;

                case "1/2 Day":
                    durationCost = 250;
                    break;

                case "Full Day":
                    durationCost = 500;
                    break;

                case "2 Days":
                    durationCost = 0;
                    break;
            
                default:
                    break;
            }
        }


        if(foodTknValueTxt  === true) {
            extrasCost = 500;
        }
 
        console.log(total = extrasCost + durationCost + choiceCost);
        total = total * numOpInt;
        formOutput.innerText =`Cost: ${total} LKR`;


    }
}











