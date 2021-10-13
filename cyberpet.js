let gameOn = true;
let randomNumber = Math.floor(Math.random()*10+1)

class Pet {

    constructor(name){
        this._name = name;
        this.hunger = 40;
        this.thirst = 40;
        this.excitement = 5;
        this.tiredness = 40;
    }

    get name(){
        return this._name
    }
    
    feed(){
        this.hunger -= randomNumber
        this.thirst += randomNumber
        this.tiredness += randomNumber*2
        this.excitement += randomNumber
        alert(`${this.name} hunger levels are now ${this.hunger}`)
        return this.hunger
    }

    drink(){
        this.thirst -= randomNumber 
        alert(`${this._name} thirst levels are now ${this.thirst}`)
        return this.thirst
    }
    
    play(){        
        this.excitement += randomNumber 
        this.thirst += randomNumber
        this.hunger += randomNumber
        this.tiredness += randomNumber*2
        alert(`${this._name} excitement levels are now ${this.excitement}`)
        return this.excitement
    }

    sleep(){
        alert(`${this.name} is sleeping`);
        this.tiredness = 0
        this.thirst += randomNumber
        this.hunger += randomNumber
        this.excitement -= randomNumber
        this.sleeping()
    }

    showStats(){
        alert
        (`Pets current hunger levels are ${this.hunger}
            thirst levels are ${this.thirst}
            excitement levels are ${this.excitement} 
            tiredness levels are ${this.tiredness}`)
        this.choices();
    }

    start(){
        alert
        (`Great job adopting ${this.name}! 
        Make sure that you keep your cyber pets hunger and thirst levels bellow 100, 
        and excitement above 0 to not lose your cyber pet!`)
        alert
        (`If ${this.name}'s tiredness levels reach 100, you will be timed out of the game for 10 seconds
        while ${this.name} rests!'`)
        alert(
            `Here are ${this.name} stats to begin with`
        )
        this.showStats()
    }

  
// How to create a timer function JS 

    sleeping(){
    console.log(`timer function`)
        setTimeout(()=>{
        alert(`${this.name} is asleep for 10 seconds`)    
    },10000)
    this.showStats()
    } 
}

class Dog extends Pet {
    
    constructor (name){
        super(name);
        this.weight = 80
        
    }

    choices(){
        let action = prompt(`1 to feed ${this.name} 
            2 to give ${this.name} something to drink
            3 to play with ${this.name}
            4 to hear ${this.name} bark 
            5 to take ${this.name} on a walk!`)

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
                this.bark();
                break;
            case "5":
                this.walk();
            default:
                return
        }
        this.showStats()
    }

    bark(){
        alert(`WOOF WOOF`);
        this.excitement += randomNumber
        this.showStats()
    }
    walk(){
        alert(`You walked ${this.name}`);
        this.hunger += randomNumber*2
        this.tiredness += randomNumber*2
        this.excitement += randomNumber
        this.thirst += randomNumber*2
        this.weight -= randomNumber
        this.showStats()
    }
}


class Rabbit extends Pet {

    constructor (name){
        super(name)
        this.weight = 20
        this.lovesCarrots = true
        
    }

    choices(){
        let action = prompt(`1 feeds ${this.name}, 2 makes ${this.name} drink, 3 to play with ${this.name}, 4 to see your ${this.name} hop around!`)

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
                this.hop();
                break;
            default:
                return
        }
        this.showStats()
    }

    hop(){
        alert(`${this.name} hops around the garden`)
        this.tiredness += randomNumber*2
        this.excitement += randomNumber
        this.thirst += randomNumber*2
        this.weight -= randomNumber
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
    
    if (typeOfPet == "cat") { 
        let newPet = new Cat (`${petName}`); 
        // newPet.timerFunction()    
        newPet.start(); 
    } 
    else if (typeOfPet == "dog") { 
        let newPet = new Dog(`${petName}`); 
        newPet.start(); 
    }
    else if (typeOfPet == "rabbit") { 
        let newPet = new Rabbit(`${petName}`); 
        newPet.start();
    }
    
}

const gameEnd = (pet) => {
    // if excitement is low game will end and pet will abandon owner
    // if hunger, thirst are too high, game will end and the pet will abandon order
    // call function to start game again
}

game();
