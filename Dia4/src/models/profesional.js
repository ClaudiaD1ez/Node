 class Professional{


    constructor( name, age, genre , weight , height){
  
            this.name         = name;
            this.age          = age;
            this.genre        = genre;
            this.weight       = weight
            this.height       = height;
            // this.id           = id;
            // this.hairColor    = hairColor;
            // this.eyeColor     = eyeColor;
            // this.race         = race;
            // this.isRetired    = isRetired;
            // this.nationality  = nationality;
            // this.oscarsNumber = oscarsNumber;
            // this.profession   = profession

    }

    //METDOS 

    printValue(){
        console.log("name: " + this.name  + "\n" + "age: " + this.age + "\n" + "genre: " + this.genre + "\n" + 
        "weight: " + this.weight + "\n" + "height: " + this.height + "\n" + "Hair Color: " + this.hairColor + "\n"+
        "Eye Color: " + this.eyeColor + "\n"+ "Race: " + this.race + "\n" + "Is Retired: " + this.isRetired + "\n"+
        "nationality: " + this.nationality + "\n" + "Oscars Number: " + this.oscarsNumber + "\n" + "Profession: " + this.profession)
    }
}


module.exports = {Professional};

