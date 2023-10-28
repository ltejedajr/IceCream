"use strict";

window.onload = init;

function init() {
    const totalCostBtn = document.getElementById("totalCostBtn");
    totalCostBtn.onclick = totalCostBtnClicked;

    const coneRadioBtn = document.getElementById("coneRadioBtn");
    coneRadioBtn.onclick = onHideOrShowAddToppings;
}

function onHideOrShowAddToppings() {
    let addToppings = document.getElementById("addToppings");
    let coneRadioBtn = document.getElementById("coneRadioBtn");
    let cupRadioBtn = document.getElementById("cupRadioBtn");
    
    if (coneRadioBtn.checked) {
        addToppings.style.display = "none";
    }

    else if (cupRadioBtn.checked) {
        addToppings.style.display = "block"
    }
}

function totalCostBtnClicked() {
    const inputNumOfScoops = document.getElementById("inputNumOfScoops");
    const numOfScoops = Number(inputNumOfScoops.value);
    
    const basePrice = 2.25
    const additionalScoop = 1.25
    const taxRate = 0.088

    let totalBasePrice;

    if (numOfScoops == 1) {
        totalBasePrice = basePrice;
    }
    if (numOfScoops >= 1) {
        totalBasePrice = (additionalScoop * (numOfScoops - 1)) + basePrice;
    }
    
    let toppings = 0
    
    let sprinkles = document.getElementById("sprinklesChkBox").checked;
    if (sprinkles) {
        toppings += 0.50;
    }
    
    let whippedCream = document.getElementById("whippedCreamChkBox").checked;
    if (whippedCream) {
        toppings += 0.25;
    }
    
    let hotFudge = document.getElementById("hotFudgeChkBox").checked;
    if (hotFudge) {
        toppings += 1.25;
    }

    let cherry = document.getElementById("cherryChkBox").checked;
    if (cherry) {
        toppings += 0.25;
    }
    
    const tax = (totalBasePrice + toppings) * taxRate;
    const totalDueValue = totalBasePrice + toppings + tax;
    
    const outputBasePrice = document.getElementById("outputBasePrice");
    const outputTax = document.getElementById("outputTax");
    const outputTotalDue = document.getElementById("outputTotalDue");

    outputBasePrice.innerHTML = "$" + totalBasePrice.toFixed(2);
    outputTax.innerHTML = "$" + tax.toFixed(2);
    outputTotalDue.innerHTML = "$" + totalDueValue.toFixed(2);

}

