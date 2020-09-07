//creates counter to count when raindrops hit the ground 
var hitGround = 0;

//creates class for raindrop objects
class Raindrop {
    constructor(rx, ry, rr, rc){
        this.x = rx;
        this.y = ry;
        this.radius = rr;
        this.color = rc;

        //this makes it so that each of the raindrops will have random speeds
        this.speed = 2 + Math.random() * 5;
    }

    //method to update attributes of Raindrop object
    update() {
        //this makes it so that the raindrop moves by updating the y value of it.
        this.y = this.y + this.speed; 

        fill(this.color);
        circle(this.x, this.y, this.radius);

        //checks to see if the raindrops are hitting the ground. 
        if (this.y >= 375){

            //If the raindrop is at the same y value of the ground, 
            //sends it back to the top. 
            this.y = 1

            //sets the raindrop to a random location when it returns to the top 
            this.x = Math.random() * (799 - 1) + 1

            //adds to counter when raindrop hits the ground 
            hitGround++;

            //Once the counter reaches 10 hits to the ground, increase value of blue by 5
            if (hitGround % 10 == 0){
                gColor = gColor + 5;
            }
        }
    }
}

//creates class to create ground object
class Ground {
    constructor(gx, gy, gw, gh){
        this.x = gx;
        this.y = gy;
        this.width = gw;
        this.height = gh;
    }

    update () {
        //uses the gColor variable for the rgb value so that it increase the blueness of the ground
        fill('rgb(0%,39%,'+gColor+'%)');

        rect(this.x, this.y, this.width, this.height);
    }
}

//creates variable for the blue value of the ground
var gColor = 5;

//create array to store raindrops objects
var raindrops = [];

//creates a new instance of the ground class
let ground = new Ground(0, 375, 800, 25);

function setup() {
    createCanvas(800,400)

    //create multiple instances of raindrop class
    for (i = 0; i < 50; i++){

        //creates new raindrops. Raindrops created will spawn at a random x value across the canvas
        let newRaindrops = new Raindrop(Math.random() * (799 - 1) + 1, 1, 15, [20, 196, 193]);
        raindrops.push(newRaindrops);
    }
}

function draw() {
    background(93, 97, 94);

    //calls the update method from the ground class to draw the rectangle to the canvas. 
    ground.update();

    //calls all the raindrops from the array and draws them to the canvas
    for (i = 0; i < raindrops.length; i++){
        raindrops[i].update();
    }
}