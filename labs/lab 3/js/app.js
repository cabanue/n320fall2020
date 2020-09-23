//creates a class that is used for creating a vending machine object
class VendingMachine {
    //in constructor, sets the values for whats being sold in the vending machine 
    constructor(candy1, candy2, chips1){
        this.candy1 = candy1;
        this.candy2 = candy2;
        this.chips1 = chips1;
        this.candy1Stock = 6;
        this.candy2Stock = 6;
        this.chips1Stock = 6;
    }

    //this methods write the information to the page for whats 
    render(){
        return `
            <h1>Vending Machine</h1>
            <div>${this.candy1} Stock: ${this.candy1Stock}</div>
            <div>${this.candy2} Stock: ${this.candy2Stock}</div>
            <div>${this.chips1} Stock: ${this.chips1Stock}</div>
        `;
    }

    //method for buying the first candy 
    buyCandy1(){
        //subtracts 1 from the stock each time the method is called
        this.candy1Stock --;

        //if the stock is equal to or less than 0, say out of stock and keep stock count at 0 
        if (this.candy1Stock < 0){
            document.getElementById("stockDiv").innerHTML = "We are out of " + this.candy1;
            this.candy1Stock = 0;
        }
    }

    //method for buying the second candy 
    buyCandy2(){
        //subtracts 1 from the stock each time the method is called
        this.candy2Stock --;

        //if the stock is equal to or less than 0, say out of stock and keep stock count at 0 
        if (this.candy2Stock < 0){
            document.getElementById("stockDiv").innerHTML = "We are out of " + this.candy2;
            this.candy2Stock = 0;
        }
    }

    buyChips1(){
        //subtracts 1 from the stock each time the method is called
        this.chips1Stock --;

        //if the stock is equal to or less than 0, say out of stock and keep stock count at 0 
        if (this.chips1Stock < 0){
            document.getElementById("stockDiv").innerHTML = "We are out of " + this.chips1;
            this.chips1Stock = 0;
        }
    }
}

//makes new instance of the vending machine class
let venmac = new VendingMachine("Skittles", "Sour Patch Kids", "Cool Ranch Doritos");

//grabs the div for the vending machine and stores it in a variable 
let machineDiv = document.getElementById("machineDiv");

//calls the render method of vending machine class to display the information to the HTML 
machineDiv.innerHTML = venmac.render();

//function created to simulate buying an item
function buyItem() {
    //if the button clicked is the one with the skittles 
    if(event.target.id == "candy1"){
        venmac.buyCandy1();
        machineDiv.innerHTML = venmac.render();
    } else if (event.target.id == "candy2"){
        venmac.buyCandy2();
        machineDiv.innerHTML = venmac.render();
    } else if (event.target.id == "chips1"){
        venmac.buyChips1();
        machineDiv.innerHTML = venmac.render();
    }
}