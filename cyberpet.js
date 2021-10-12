let gameOn = true;

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

  
// How to create a timer function JS 

    // timerFunction(){
    
    //     setInterval(()=>{
    //         this.hunger += 1
    //         this.thirst += 1
    //         this.tiredness += 1
    //         this.excitement -= 1
    //         console.log(this.excitement)
    //         console.log(this.hunger)

    // },1000)
    // } 
    

}

class Dog extends Pet {
    
    constructor (name){
        super(name);
        this.weight = 80
        
    }

    choices(){
        let action = prompt(`1 to feed ${this.name}, 2 to give ${this.name} something to drink, 3 to play with ${this.name}, 4 to hear ${this.name} bark and 5 to take ${this.name} bark!`)

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
        newPet.choices(); 
    } 
    else if (typeOfPet == "dog") { 
        let newPet = new Dog(`${petName}`); 
        newPet.choices(); 
    }
    else if (typeOfPet == "rabbit") { 
        let newPet = new Rabbit(`${petName}`); 
        newPet.choices();
    }
}

const gameEnd = (pet) => {
    //if excitement is low game will end 
    //if hunger, thirst, or tiredness are too high, game will end 
    //call function to start game again
    
    if (pet.excitement == 0){ return true }
    if (pet.hunger == 100){ return true }
    if (pet.thirst == 100){ return true }
    if (pet.tiredness == 100){ return true }
}

game();
