window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      if (validateForm()) {
        update();
      }
    });
  }
});
function validateForm () {
  let userUIValues = getCurrentUIValues();
  let amount= Number(userUIValues.amount); //string value turned to number so "" is 0
  let years = Number(userUIValues.years);
  let rate = Number(userUIValues.rate);

  const form = document.getElementById("calc-form");
  const amountUI = document.querySelector("#loan-amount")
  const yearsUI = document.querySelector("#loan-years");
  const rateUI = document.querySelector("#loan-rate");

  if (amount === 0) {
    alert ("Form fields CANNOT be empty or contain 0!");
    amountUI.value = "";
    return false;
  }
  if (years === 0) {
    alert ("Form fields CANNOT be empty or contain 0!");
    yearsUI.value = "";
    return false;
  }
  if (rate === 0) {
    alert ("Form fields CANNOT be empty or contain 0!");
    rateUI.value = "";
    return false;
  }
  
  if (amount < 0) {
    alert ("You CANNOT input a negative loan amount!");
    amountUI.value = "";
    return false;
  }
  if ( years < 0 ) {
    alert ("You CANNOT input a negative term!");
    yearsUI.value = "";
    return false;
  }
  if ( rate < 0 ) {
    alert ("You CANNOT input a negative yearly rate!");
    rateUI.value = "";
    return false;
  }

  if(isNaN(amount)) {
    form.reset();
    alert ("You need to input a number for amount");
    return false;
  }
  if (isNaN(years)) {
    alert("You need to input a number for years");
    form.reset();
    return false;
  }
  if (isNaN(rate)) {
    alert("put in a rate thats a number");
    form.reset();
    return false;
  }

  return true;

}

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {
    amount: 10000,
    years: 10,
    rate: 3.5
  }
  const amountUI = document.querySelector("#loan-amount");
  amountUI.value = values.amount;

  const yearsUI = document.querySelector("#loan-years");
  yearsUI.value = values.years;

  const rateUI = document.querySelector("#loan-rate");
  rateUI.value = values.rate;

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  return (updateMonthly(calculateMonthlyPayment(currentUIValues)));
  
  
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  //monthly payment=P×i1−(1+i)−n
  // i =yearly rate/12
  // n= years X 12
  let periodicRate= values.rate/12;
  let ntotalNumPayments = values.years * 12;
  let principle = values.amount;
  
  monthlyPayment = (principle * periodicRate)/ (1-(Math.pow((1+periodicRate), -ntotalNumPayments)));
  monthlyPayment = monthlyPayment.toFixed(2);
  return monthlyPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUI = document.querySelector("#monthly-payment");
  monthlyUI.innerText = "$" + monthly;
}
