class Instrument {
    constructor(loudness, family, verb){
        this.loudness = loudness;
        this.family = family;
        this.verb = verb;
    }

    play(){
        console.log(this.family + " instrument " + this.verb + " at " + this.loudness + " db");
    }
}

class Woodwind extends Instrument {
    constructor(loudness){
        super(loudness, "Woodwind", "blows")
    }
}

class Percussion extends Instrument {
    constructor(loudness){
        super(loudness, "Percussion", "hits")
    }
}

class Strings extends Instrument {
    constructor(loudness){
        super(loudness, "String", "strums")
    }
}

let instruments = [];
instruments[0] = new Woodwind(100);
instruments[1] = new Percussion(120);
instruments[2] = new Strings(86)

instruments.forEach((instrument) => {
    instrument.play();
});