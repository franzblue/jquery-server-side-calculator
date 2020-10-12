const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(port, () => {
    console.log("Up and running on port: ", port);
});

const calculationHistory = require ('./modules/numberMuncher.js');

app.post('/numberMunchers', (req, res) => {
    console.log('hello from POST', req.body);
    let result = numberCruncher(req.body);
    console.log('result of POST numberCrunch is ', result);
    calculationHistory.push(result);
    console.log('calculation history', calculationHistory);
    res.sendStatus(200);
});

app.get('/numberMunchers', (req, res) => {
    console.log('hi from GET request');
    res.send(calculationHistory);
});

function numberCruncher(array) {
    for(i = 0; i < array.length; i++) {
        if(array[i].operator === '+') {
            let inputOne = array[i].inputOne;
            let inputTwo = array[i].inputTwo;
            let result = parseFloat(inputOne) + parseFloat(inputTwo);
            console.log('numberCruncher result ', result);
            return result;
        }
        else if(array[i].operator === '-') {
            let inputOne = array[i].inputOne;
            let inputTwo = array[i].inputTwo;
            let result = inputOne - inputTwo;
            console.log('numberCruncher result ', result);
            return result;
        }
        else if(array[i].operator === '*') {
            let inputOne = array[i].inputOne;
            let inputTwo = array[i].inputTwo;
            let result = inputOne * inputTwo;
            console.log('numberCruncher result ', result);
            return result;
        }
        else if(array[i].operator === '/') {
            let inputOne = array[i].inputOne;
            let inputTwo = array[i].inputTwo;
            let result = inputOne / inputTwo;
            console.log('numberCruncher result ', result);
            return result;
        }
    }
}

// function numberMuncherVersionTwo(inputValues, operatorValues, counter){
//     if(operatorValues[counter] === '='){
//         let result = inputValues[counter].firstNumber + inputValues[counter].secondNumber;
//         return result;
//     }
//     else if(operatorValues[counter] === '-'){
//         let result = inputValues[counter].firstNumber - inputValues[counter].secondNumber;
//         return result;
//     }
//     else if(operatorValues[counter] === '*'){
//         let result = inputValues[counter].firstNumber * inputValues[counter].secondNumber;
//         return result;
//     }
//     else if(operatorValues === '/'){
//         let result = inputValues[counter].firstNumber / inputValues[counter].secondNumber;
//         return result;
//     }
//     else {
//         alert('Please enter correct inputs')
//     }
// }