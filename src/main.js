//Variables
var numberofproducts = 8;
var total = 0;

//Initialize prices and quantities
if (localStorage.getItem("prices") === null && localStorage.getItem("quantities") === null){
	var stockprices = [39.90,4.50,105.90,123.23,39.90,45.30,60.30,24.6];
	var stockquantities = [0,0,0,0,0,0,0,0];

	localStorage.setItem("prices",JSON.stringify(stockprices));
	localStorage.setItem("quantities", JSON.stringify(stockquantities));
}

//Fetching price and quantity arrays
var prices = JSON.parse(localStorage.getItem("prices"));
var quantities = JSON.parse(localStorage.getItem("quantities"));

//Initialize HTML
for(i=1; i<= numberofproducts; i++){
	document.getElementById("quant" + i).innerHTML = quantities[i-1];
	document.getElementById("price" + i).innerHTML = prices[i-1] + "<span>€</span>";
}

updateTotal();

//Update a quantity
function updateQuantity(prod,amount){
	quantities[prod-1] += amount;
	localStorage.setItem("quantities",JSON.stringify(quantities));
}

//Add Item to Cart
function plusFunction(prod) {
	updateQuantity(prod,1);
    document.getElementById("quant" + prod).innerHTML = quantities[prod-1];
    updateTotal();
} 

//Remove Item from Cart
function minusFunction(prod) {
	if((quantities[prod-1] - 1) >= 0){
		updateQuantity(prod,-1);
    	document.getElementById("quant" + prod).innerHTML = quantities[prod-1];
		updateTotal();
	}
}

//Update the total cost
function updateTotal(){
	total = 0;
	for(i=1; i<= numberofproducts; i++){
		total += quantities[i-1]*prices[i-1];
	}
	document.getElementById("total").childNodes[1].innerHTML = Math.round(total * 100) / 100;
}
