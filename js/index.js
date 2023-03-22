// start-Type-of
$(function () {
  $("input[name='horn-cup']").click(function () {
    if ($("#horn").is(":checked")) {
      $("#hornimg").show();
    } else {
      $("#hornimg").hide();
    }
  });
});

$(function () {
  $("input[name='horn-cup']").click(function () {
    if ($("#cup").is(":checked")) {
      $("#cupimg").show();
    } else {
      $("#cupimg").hide();
    }
  });
});
// end the type of


// start the order 
const inputs = document.querySelectorAll("input[type=number]");
const output = document.querySelector(".runningTotal");

inputs.forEach(function (input) {
  input.addEventListener("change", function () {
    const runningTotal =
      "$" +
      Array.from(inputs)
        .filter((i) => i.value > 0) // Remove inputs with a value of 0 or less.
        .map((i) => {
          const amount = i.dataset.amount || 5; // Use the input's data-amount attribute, or default to 5.
          return i.value * amount; // Multiply each input value by its amount.
        })
        .reduce((total, item) => {
          return total + parseFloat(item);
        }, 0);
    console.log(runningTotal);
    output.innerHTML = runningTotal;
  });
});
// end the order


// alerting
let numberInputC = document.getElementById("counterC");
let numberInputV = document.getElementById("counterV");
let numberInputS = document.getElementById("counterS");
let total = 0;

numberInputC.addEventListener("change", function() {
  total = parseInt(numberInputC.value) +  parseInt(numberInputV.value) + parseInt(numberInputS.value);
  if (total > 3 ) {
    alert("Dear Customer, You Can Only Choose 3 Ice-Cream Scoops ;)");
  }
});

