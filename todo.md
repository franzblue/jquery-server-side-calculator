## Calculator

- [] user input
    - [x] two input elements
    - [] submit button `=`
        - [x] capture inputs
        - [x] bundle into object
        - [x] send object to server via POST
    - [x] `C` button to clear input fields
- [] server-side logic to compute operations
    - [x] receives operations symbol
    - [<!-- x -->] stores operations symbol somewhere  
             <!-- not sure if should place array into module -->
    - [] can handle addition, subtraction, multiplication and division
        - [] may be possible to store inputs in module and output results from same module
    - [] after calc is complete, send back OK `sendStatus(200)` ???
    - [] do a GET request after the POST to get the actual calc

## History

- [] on server, keep a record of all operations and solutions
- [] display a list of all previous calcs on page load
    - [] this should happend after page loads using GET request
    - [] update list when new calc is made
    - [] history should exist even after page refresh



## Stretch Goals ##

- [] convert interface to look and behave like actual calculator
    - [] check reference photo
- [] only allow POST to call if all inputs are ready
    - [] show an alert if they left something empty
    - [] don't send bad or incomplete data to server
- [] allow user to clear history
    - [] button click
    - [] try to not use GET or POST
    - [] rather, use DELETE request
- [] allow user to click on entry in history to re-run that calc
    - [] display like normal calc
- [] deploy to Heroku  ??? not sure what this is yet