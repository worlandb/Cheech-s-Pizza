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

