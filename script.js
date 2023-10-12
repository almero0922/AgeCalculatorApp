const ca_submit = document.getElementById("ca-submit");
const input_day = document.getElementById("input-day");
const input_month = document.getElementById("input-month");
const input_year = document.getElementById("input-year");


input_day.value = "";
input_month.value = "";
input_year.value = "";

ca_submit.addEventListener('click', (e)=>{
    var errors = checkInputValues();
    if(errors){
        displayInputErrors(errors);
        return false;
    }
    removeInputErrors();
    
    alert(errors);
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