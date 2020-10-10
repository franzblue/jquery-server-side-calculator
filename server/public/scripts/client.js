console.log('hello from js');

$(document).ready(onReady);

function onReady() {
    console.log('Hello from jQuery');
    $('#equals').on('click', crunchNumbers);
}

// function to calculate inputs
// incorporates whichever math operation was selected
function crunchNumbers(){
    console.log('in crunchNumbers');
    let answer = {
        firstNumber: $('#firstNumber').val(),
        secondNumber: $('#secondNumber').val()
    }
    console.log('Inputs as an object', answer);
    //clears input fields
    $('#firstNumber').val('');
    $('#secondNumber').val('');
    return answer;
}