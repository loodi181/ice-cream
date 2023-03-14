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

// end -Type-Of

// start Your Cart

const checkboxes = document.querySelectorAll("input[type=checkbox]");
const output = document.querySelector(".runningTotal");

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
    const runningTotal =
      "$" +
      Array.from(checkboxes)
        .filter((i) => i.checked) // remove unchecked checkboxes.
        .map((i) => (i.dataset.amount ??= 0)) //extract the amount, or 0
        .reduce((total, item) => {
          return total + parseFloat(item);
        }, 0);
    console.log(runningTotal);
    output.innerHTML = runningTotal;
  });
});
