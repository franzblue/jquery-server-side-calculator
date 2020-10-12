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

let calculationHistory = [];

module.exports = calculationHistory;