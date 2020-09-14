//creates parent class for the different instruments to be created later
class Instrument {
    constructor(loudness, family, verb){
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;
    }

    //creates play method that displays a message to the console 
    play(){

        //message to say the a certain instrument in a family plays at a certain loudness measured in decibals
        console.log(this.family + " instrument " + this.verb + " at " + this.loudness + " db");
    }
}

//creates child class for woodwinds
class Woodwind extends Instrument {
    constructor(loudness){
        //sets the parameters from the parent class for family and verb to woodwind and blows for this child class
        super(loudness, "Woodwind", "blows")
    }
}

//creates child class for percussion 
class Percussion extends Instrument {
    constructor(loudness){
        //sets the parameters from the parent class for family and verb to percussoin and hits for this child class
        super(loudness, "Percussion", "hits")
    }
}

//creates child class for strings 
class Strings extends Instrument {
    constructor(loudness){
        //sets the parameters from the parent class for family and verb to string and strums for this child class
        super(loudness, "String", "strums")
    }
}

//creates an array to store new instances of the instruments
let instruments = [];

instruments[0] = new Woodwind(100);
instruments[1] = new Percussion(120);
instruments[2] = new Strings(86)

//loops through the array and calls the play method from the parent class for each of the child classes
instruments.forEach((instrument) => {
    instrument.play();
});