/////// HEAD
//Initializes array of Pizza types
var pizzaObj = {
    Value1 : 'Pepperoni',
    Value2 : 'Cheese',
    Value3 : 'Sausage',
    Value4 : 'Supreme',
    Valuu5 : 'Bacon'
}
 
var select = document.getElementById("pizzaMenu");
for(index in pizzaObj) {
    select.options[select.options.length] = new Option(pizzaObj[index], index);
}

var pizzaNum = {
    No1 : '1',
    No2 : '2',
    No3 : '3',
    No4 : '4',
    No5 : '5',
    No6 : '6',
    No7 : '7',
    No8 : '8',
    No9 : '9',
    No10 : '10'
}
 
var select = document.getElementById("numberOfPizza");
for(index in pizzaNum) {
    select.options[select.options.length] = new Option(pizzaNum[index], index);
}



//// Add Pizza
function addPizza() {
    alert("Press the red button");
}

myButton = document.getElementById("but1");
myButton.addEventListener("click", myFunction);


var pizzaplaceholder = [4, 5, 2];
var pizzatypePlaceholder = ['Pepperoni', 'Supreme', 'Bacon'];

function finalOrder() {
    //name and phone number
    var fullName = ("Name: " + fname + " " + lname);

    
    
    //pizzaNum output
    var sum = 0;
    for(i = 0; i < pizzaplaceholder.length; i++ ){
        sum += parseInt( elmt[i], 10 );
    }

    //pizza tax output
    var tax = sum * 0.076;
}