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
    let result = 0;
        if(req.body.operator === '+') {
            result = Number(req.body.inputOne) + Number(req.body.inputTwo);
        }
        else if(req.body.operator === '-') {
            result = Number(req.body.inputOne) - Number(req.body.inputTwo);
        }
        else if(req.body.operator === '*') {
            result = Number(req.body.inputOne) * Number(req.body.inputTwo);
        }
        else if(req.body.operator === '/') {
            result = Number(req.body.inputOne) / Number(req.body.inputTwo);
        }
        answer = {
            answer: result
        }
    res.send(answer);
    let historyObject = {
        num1: req.body.inputOne,
        operator: req.body.operator,
        num2: req.body.inputTwo,
        answer: result
    }
    calculationHistory.push(historyObject);
    console.log('history', calculationHistory);
});

app.get('/numberMunchers', (req, res) => {
    console.log('hi from GET request');
    res.send(calculationHistory);
});