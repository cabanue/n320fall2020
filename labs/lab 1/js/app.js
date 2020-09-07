//creates counter to count when raindrops hit the ground 
var hitGround = 0;

//creates variable to be able to increase blue value of ground 
// var blue = 5;

//creates class for raindrop objects
class Raindrop {
    constructor(rx, ry, rr, rc){
        this.x = rx;
        this.y = ry;
        this.radius = rr;
        this.color = rc;
        this.speed = 2 + Math.random() * 5;
    }

    //method to update attributes of Raindrop object
    update() {
        this.y = this.y + this.speed; 
        fill(this.color);
        circle(this.x, this.y, this.radius);

        //checks to see if the raindrops are hitting the ground. 
        if (this.y >= 375){

            //If the raindrop is at the same y value of the ground, 
            //sends it back to the top. 
            this.y = 1

            //adds to counter when raindrop hits the ground 
            hitGround++;
            if (hitGround % 10 == 0){
                oogabooga = oogabooga + 5;
                 console.log(blue);
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
        fill('rgb(0%,39%,'+oogabooga+'%)');

        rect(this.x, this.y, this.width, this.height);
    }
}

var oogabooga = 5;

//create array to store raindrops objects
var raindrops = [];

let ground = new Ground(0, 375, 800, 25);
// ground.update();

function setup() {
    createCanvas(800,400)

    //create multiple instances of raindrop class
    for (i = 0; i < 30; i++){

        //creates new raindrops. Raindrops created will spawn at a random x value across the canvas
        let newRaindrops = new Raindrop(Math.random() * (799 - 1) + 1, 1, 15, [20, 196, 193]);
        raindrops.push(newRaindrops);
    }
}

function draw() {
    background(93, 97, 94);

    //creates instance of the ground class
    // let ground = new Ground(0, 375, 800, 25);
    ground.update();

    //draws all the raindrops stores in the array to the canvas
    for (i = 0; i < raindrops.length; i++){
        raindrops[i].update();
    }
}