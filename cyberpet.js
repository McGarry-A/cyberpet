class Pet {

    constructor(name){
        this._name = name;
        this.hunger = 0;
        this.thirst = 0;
        this.excitement = 0;
        this.tiredness = 0;
    }

    get name(){
        return this._name
    }
    
    feed(){
        let randomNumber = Math.floor(Math.random()*10+1)
        this.hunger -= randomNumber
        alert(`${this.name} hunger levels are now ${this.hunger}`)
        return this.hunger
    }

    drink(){
        let randomNumber = Math.floor(Math.random()*10+1)
        this.thirst -= randomNumber 
        alert(`${this._name} thirst levels are now ${this.thirst}`)
        return this.thirst
    }
    
    play(){
        let randomNumber = Math.floor(Math.random()*10+1)
        this.excitement -= randomNumber 
        alert(`${this._name} excitement levels are now ${this.excitement}`)
        return this.excitement
    }

    sleep(){
        alert(``);
    }

    showStats(){
        alert(`Pets current hunger levels are ${this.hunger}, thirst levels are ${this.thirst} and excitement levels are ${this.excitement} and tiredness levels are ${this.tiredness}`)
        this.choices();
    }
}

class Dog extends Pet {
    
    constructor (name){
        super(name);
        this.weight = 80
        
    }
    bark(){
        alert(`${this.name} is barking`);
    }
    walk(){
        alert(`You walked ${this.name}`);
    }
}


class Rabbit extends Pet {

    constructor (name){
        super(name)
        this.weight = 20
        this.lovesCarrots = true
        
    }

    hop(){
        console.log(`${this.name} is hopping around`)
    }
}

class Cat extends Pet {

    constructor (name){
        super(name)
        this.weight = 25

    }

    choices(){
        let action = prompt(`1 feeds your cat, 2 makes your cat drink, 3 to play with your cat, 4 to hear your cat pur!`)

        switch (action){
            case "1":
                this.feed();
                break;
            case "2":
                this.drink();
                break;
            case "3":
                this.play();
                break;
            case "4":
                this.purr();
                break;
            default:
                return
        }
        this.showStats()
    }

    purr(){
        alert('your cat is purring at you!')
    }
}

const game = () => {

    let typeOfPet = prompt("Is your pet a cat, dog or rabbit?").toLowerCase();
    let petName = prompt("What is the name of your pet?")
    
    if (typeOfPet == "cat") { let newPet = new Cat (`${petName}`); newPet.choices(); } 
    else if (typeOfPet == "dog") { let newPet = new Dog(`${petName}`); newPet.choices(); }
    else if (typeOfPet == "rabbit") { let newPet = new Rabbit(`${petName}`); newPet.choices(); }
}

const gameEnd = (how) => {
    //if excitement is low game will end 
    //if hunger, thirst, or tiredness are too high, game will end 
    //call function to start game again
}

game();
