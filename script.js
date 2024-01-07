const ca_submit = document.getElementById("ca-submit");
const input_day = document.getElementById("input-day");
const input_month = document.getElementById("input-month");
const input_year = document.getElementById("input-year");
const display_year = document.getElementById("years-display");
const display_month = document.getElementById("months-display");
const display_day = document.getElementById("days-display");


var emptyErrorText = "This field is required";
var incorrectErrorText = "This date must be valid";

var years = "";
var months = "";
var days = "";

input_day.value = "";
input_month.value = "";
input_year.value = "";

var emptyErrors = [];
var fullValues = [];

ca_submit.addEventListener("click", (e) => {
  //Check if Value Exist
  emptyValues = checkInputValues();

  if (emptyValues) {
    displayInputErrors(1, emptyErrors);
    console.log('hola');
    return false;
  }

  removeInputErrors();

  var validDates = checkValidDatesValues();

  if(validDates != "valid"){
    displayInputErrors(2, validDates);
    console.log(validDates);
    return false;
  }

  counter(display_year, years);
  counter(display_month, months);
  counter(display_day, days);

});

function checkValidDatesValues() {
  var invalidDate = "";
  var date = input_year.value + "-" + input_month.value + "-" + input_day.value;
  var dateTime = moment.duration(moment().diff(date));
  var dateMoment = moment(date);
  if (moment().isAfter()) {
    console.log("Date is in the future");
  }

  console.log("Valid: " + dateMoment.isValid());
  console.log("invalidAt: " + dateMoment.invalidAt());
  console.log("Years: " + dateTime.years());
  console.log("Months: " + dateTime.months());
  console.log("Days: " + dateTime.days());

  years = dateTime.years();
  months = dateTime.months();
  days = dateTime.days();

  switch (dateMoment.invalidAt()){
    case 1: invalidDate = "month";
    break;
    case 2: invalidDate = "day";
    break;
    case -2: invalidDate = "year";
    break;
    case -1: invalidDate = "valid";
    break;
    default: invalidDate = "date";
  }

  return invalidDate;
}

function counter(EL, value) {
  const duration = 4000; // Animate all counters equally for a better UX

  //const start = parseInt(, 10); // Get start and end values
  const start = 0;
  const end = parseInt(value, 10); // PS: Use always the radix 10!

  if (start === end) return; // If equal values, stop here.

  const range = end - start; // Get the range
  let curr = start; // Set current at start position

  const timeStart = Date.now();

  const loop = () => {
    let elaps = Date.now() - timeStart;
    if (elaps > duration) elaps = duration; // Stop the loop
    const frac = elaps / duration; // Get the time fraction
    const step = frac * range; // Calculate the value step
    curr = start + step; // Increment or Decrement current value
    EL.textContent = Math.trunc(curr); // Apply to UI as integer
    if (elaps < duration) requestAnimationFrame(loop); // Loop
  };

  requestAnimationFrame(loop); // Start the loop!
}

function checkInputValues() {
  emptyErrors = []; // Array with name of the input who has no value

  input_day.value != "" ? "" : emptyErrors.push("day"); // push if day input has no value
  input_month.value != "" ? "" : emptyErrors.push("month"); // push if month input has no value
  input_year.value != "" ? "" : emptyErrors.push("year"); // push if year input has no value
  return emptyErrors.length > 0;

}


function displayInputErrors(type, errors) {
  console.log(type);
  if(type == 1){
    for (var i = 0; i < errors.length; i++) {
      document
        .getElementById("input-title-" + errors[i])
        .classList.add("error-title");
      document
        .getElementById("input-" + errors[i]).classList.add("error-input");
      document
        .getElementById("input-error-" + errors[i])
        .classList.remove("display-none");
      document.getElementById("input-error-" + errors[i]).innerText = emptyErrorText;
    }
  }else{
    document
    .getElementById("input-title-" + errors)
    .classList.add("error-title");
  document
    .getElementById("input-" + errors).classList.add("error-input");
  document
    .getElementById("input-error-" + errors)
    .classList.remove("display-none");
  document.getElementById("input-error-" + errors).innerText = incorrectErrorText;
  }

}

function removeInputErrors() {
  var inputs = ["day", "month", "year"];
  for (var i = 0; i < inputs.length; i++) {
    document
      .getElementById("input-title-" + inputs[i])
      .classList.remove("error-title");
    document
      .getElementById("input-" + inputs[i])
      .classList.remove("error-input");
    document
      .getElementById("input-error-" + inputs[i])
      .classList.add("display-none");
  }
}
