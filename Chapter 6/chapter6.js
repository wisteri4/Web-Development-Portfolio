
function calculate() { //Make a function to call when the submit button in html is pressed
    var number = parseFloat(document.getElementById('inp').value); // Make the variable number the value given from the html input
    var result = (number * 1.72); //Multiply that variable with 1.72 and store in variable result 
    document.getElementById('res').innerText = 'Cost of petrol: $' + result; //Display the result at the id 'res' with the 'cost of pertrol' statement
}