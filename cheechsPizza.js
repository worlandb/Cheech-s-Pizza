/////// HEAD
//Initializes array of Pizza types
var pizzaAry = [Pepperoni, Cheese,]
///////
//qwee
/////// a183b43ead574771f66766c12ddc2babbe61d140
////
//drop down Number of Pizzas
////

/*
var pizzaNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]; 
    
var sel = document.getElementById('NumberOfPizza');
for(var i = 0; i < pizzaNum.length; i++) {
    var opt = document.createElement('option');
    opt.innerHTML = pizzaNum[i];
    opt.value = pizzaNum[i];
    sel.appendChild(num);
}
*/

/*
var select = document.getElementById('NumberOfPizza');
for (var prop in data) {
    var option = document.createElement('option');
    option.innerHTML = data[prop].ProduktName
    option.value = data[prop].ProduktName;
    select.append(option)
}
*/

var select = document.getElementById("numberOfPizza");
select.options[select.options.length] = new Option('1', '2', '3', '4', '5', '6', '7', '8', '9', '10');

var select = document.getElementById("numberOfPizza");
if(select.options.length > 0) {
    window.alert("Text: " + select.options[select.selectedIndex].text + "\nValue: " + select.options[select.selectedIndex].value);
}
else {
    window.alert("Select box is empty");
}
////
//^^ drop down Number of Pizzas ^^
////
//funtion for order list
////

