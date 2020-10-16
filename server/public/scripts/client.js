$(document).ready(onReady);

function onReady() {
    getHistory();
    $('#clear').on('click', clearInputs);
    $('#submit').on('click', sendData);
    $('.operator').on('click', chooseOperator);        
}

function chooseOperator() {
    if($(this).val() === '+') {
        operator = '+';
        console.log('operator is', operator);
    }
    if($(this).val() === '-') {
        operator = '-';
        console.log('operator is', operator);
    }
    if($(this).val() === '*') {
        operator = '*';
        console.log('operator is', operator);
    }
    if($(this).val() === '/') {
        operator = '/';
        console.log('operator is', operator);
    }
    return operator;
}

function sendData(){
    if($('#firstNumber').val().length == 0 || $('#secondNumber').val().length == 0) {
        console.log('Inputs are empty');
        alert('Please enter both numbers into input boxes.');
    }
    console.log('in POST sendData');
    $.ajax( {
        method: 'POST',
        url: '/numberMunchers',
        data: {
            inputOne: $('#firstNumber').val(),
            inputTwo: $('#secondNumber').val(),        
            operator: operator,
        }
    }).then(function(response) {
        console.log('response', response);
        let el = $('#answer');
        el.empty();
        el.append('The answer is ', response.answer);
        getHistory();
    }).catch(function(error) {
        alert(error);
    });
}

function getHistory() {
    $.ajax( {
        method: 'GET',
        url: '/numberMunchers'
    }).then(function(response){
        console.log('response', response);
        let el = $('#calcHistory');
        el.empty();
        for(let i = 0; i < response.length; i++) {
            el.append(`<li>${response[i].num1} ${response[i].operator} 
                                ${response[i].num2} = ${response[i].answer}</li>
        `)}
    }).catch(function(error) {
        alert('oops');
        console.log(error);
    });
}

// function appendDOM(dataToAppend){
//     $('#calcHistory').empty();
//     // let append = dataToAppend;
//     for(let i = 0; i< dataToAppend.length; i++) {
//         $('#calcHistory').append(`
//             <li>helloworld</li>
//         `);
//     }
// }

function clearInputs(){
    $('#firstNumber').val('');
    $('#secondNumber').val('');
}