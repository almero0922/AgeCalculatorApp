const ca_submit = document.getElementById("ca-submit");
const input_day = document.getElementById("input-day");
const input_month = document.getElementById("input-month");
const input_year = document.getElementById("input-year");
const display_year = document.getElementById("years-display");
const display_month = document.getElementById("months-display");
const display_day = document.getElementById("days-display");


var years = '';
var months = '';
var days = '';

input_day.value = "";
input_month.value = "";
input_year.value = "";

ca_submit.addEventListener('click', (e)=>{
    //Check if Value Exist
    var emptyValues = checkInputValues();
    var validDates = checkValidDatesValues();
    numberAnimation()


    /*
    if(errors){
        displayInputErrors(errors);
        return false;
    }
    removeInputErrors();
    alert(errors);
    */
})

function checkInputValues(){
    var error_inputs = [];
    input_day.value != '' ? '' : error_inputs.push('day');
    input_month.value != '' ? '' : error_inputs.push('month');
    input_year.value != '' ? '' : error_inputs.push('year');
    if(error_inputs.length > 0 ){
        return error_inputs;
    }else{
        return false;
    }
}

function checkValidDatesValues(){
    var date = input_year.value + '-' + input_month.value + '-' + input_day.value;
    var currentBirthday = moment().year() + '-09-22';
    var dateTime = moment.duration(moment().diff(date));
    var dateMoment = moment(date);
    if(moment().isAfter()){
        console.log('Date is in the future');
    }
    console.log('Valid: ' + dateMoment.isValid());
    console.log('invalidAt: ' + dateMoment.invalidAt());
    /*
    console.log('Years: ' + moment().diff(dateMoment, 'years', false));
    console.log('Months: ' + moment().diff(currentBirthday, 'months', false));
    console.log('Days: ' + moment().diff(currentBirthday, 'days', false));
    */
   console.log('Years: ' + dateTime.years());
   console.log('Months: ' + dateTime.months());
   console.log('Days: ' + dateTime.days());
   years = dateTime.years();
   months = dateTime.months();
   days = dateTime.days();
}

function displayInputErrors(errors){
    for(var i = 0; i < errors.length; i++){
        document.getElementById("input-title-"+errors[i]).classList.add("error-title");
        document.getElementById("input-"+errors[i]).classList.add("error-input");
        document.getElementById("input-error-"+errors[i]).classList.remove("display-none");
    }
}

function removeInputErrors(){
    var inputs = ["day", "month", "year"];
    for(var i = 0; i < inputs.length; i++){
        document.getElementById("input-title-"+inputs[i]).classList.remove("error-title");
        document.getElementById("input-"+inputs[i]).classList.remove("error-input");
        document.getElementById("input-error-"+inputs[i]).classList.add("display-none");
    }

}
function numberAnimation(el, endValue, incrementor, duration) {
    anime({
      targets: el,
      textContent: endValue,
      round: incrementor ? 1/incrementor : 1/5,
      easing: 'easeInOutQuad',
      duration: duration ? duration : 4000,
    });
  }