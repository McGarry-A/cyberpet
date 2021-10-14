let inquirer = require('inquirer');
let questions = require('./questions')
// const { type } = require('os');

// let typeOfPet;
let newPet;

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
    
    // feed(){
    //     this.hunger -= Math.floor(Math.random()*10+1)
    //     this.thirst += Math.floor(Math.random()*10+1)
    //     this.tiredness += Math.floor(Math.random()*10+1)*2
    //     this.excitement += Math.floor(Math.random()*10+1)
    //     alert(`${this.name} hunger levels are now ${this.hunger}`)
    //     return this.hunger
    // }

    // drink(){
    //     this.thirst -= Math.floor(Math.random()*10+1) 
    //     alert(`${this._name} thirst levels are now ${this.thirst}`)
    //     return this.thirst
    // }
    
    // play(){        
    //     this.excitement += Math.floor(Math.random()*10+1) 
    //     this.thirst += Math.floor(Math.random()*10+1)
    //     this.hunger += Math.floor(Math.random()*10+1)
    //     this.tiredness += Math.floor(Math.random()*10+1)*2
    //     alert(`${this._name} excitement levels are now ${this.excitement}`)
    //     return this.excitement
    // }

    // sleep(){
    //     alert(`${this.name} is sleeping`);
    //     this.tiredness = 0
    //     this.thirst += Math.floor(Math.random()*10+1)
    //     this.hunger += Math.floor(Math.random()*10+1)
    //     this.excitement -= Math.floor(Math.random()*10+1)
    //     this.showStats()
    // }

    showStats(){
        inquirer.prompt([
            {
                type: 'confirm',
                name: 'currentStats',
                message:`${this.name} current hunger levels are ${this.hunger}
                    thirst levels are ${this.thirst}
                    excitement levels are ${this.excitement} 
                    tiredness levels are ${this.tiredness}`
            }
        ]).then((answer)=> {
            if (answer.currentStats === true){
                if (this.excitement <= 0) {
                    alert(`${this.name} got bored and abandoned you! Make sure to play with your cyber pet!`)
                    gameEnd()
                } else if(this.thirst >= 100){
                    alert(`${this.name} got has abandoned you! Make sure to ensure your cyber pet is drinking enough!`)
                    gameEnd()
                } else if (this.hunger >= 100){
                    alert(`${this.name} gottoo hungry and abandoned you! Make sure to feed your cyber pet!`)
                    gameEnd()
                } else if (this.tiredness >= 60){
                    alert(`${this.name} got too tired and fell asleep!`)
                    this.sleep()
                }
                this.choices()
            }
        }).catch((err)=>{
            console.log(err)
        })

        
    }

    start(){
        inquirer.prompt(questions.gameInformation).then((answer) => {
            console.log(answer)
            console.log('showing stats')
            this.showStats();
            
        }).catch((err)=> {
            console.log(err);
        })
    }

}

class Dog extends Pet {
    
    constructor (name){
        super(name);
        this.weight = 80
        
    }

    choices(){
        inquirer.prompt([
                {
                    type: 'list',
                    name: 'action',
                    message: `What would you like to do with ${this.name}`,
                    choices: ['Feed', 'Drink', 'Wrestle', `Bark`, `Go on a Walk`, `Sleep`]
                }
        ]).then((answer)=> {
            switch (answer.action){
                case "Feed":
                    this.feed();
                    break;
                case "Drink":
                    this.drink();
                    break;
                case "Wrestle":
                    this.play();
                    break;
                case "Bark":
                    this.bark();
                    break;
                case "Go on a Walk":
                    this.walk();
                    break;
                case "Sleep":
                    this.sleep()
                    break;
                default:
                    return
            }
        }).catch((err)=>{
            console.log(err);
        })

    
    //     this.showStats()
    }

    // bark(){
    //     alert(`WOOF WOOF`);
    //     this.excitement += Math.floor(Math.random()*10+1)
    //     this.showStats()
    // }
    // walk(){
        
    //     alert(`You walked ${this.name}`);
    //     this.hunger += Math.floor(Math.random()*10+1)*2
    //     this.tiredness += Math.floor(Math.random()*10+1)*2
    //     this.excitement += Math.floor(Math.random()*10+1)
    //     this.thirst += Math.floor(Math.random()*10+1)*2
    //     this.weight -= Math.floor(Math.random()*10+1)
    //     this.showStats()
    // }
}


class Rabbit extends Pet {

    constructor (name){
        super(name)
        this.weight = 20
        this.lovesCarrots = true
    }

    choices(){
        inquirer.prompt([
                {
                    type: 'list',
                    name: 'action',
                    choices: ['Feed', 'Drink', 'Play', 'Hop', 'Sleep']
                }
        ]).then(answer=>{

            console.log(answer)

            switch (answer.action){
                case "Feed":
                    this.feed();
                    break;
                case "Drink":
                    this.drink();
                    break;
                case "Play":
                    this.play();
                    break;
                case "Hop":
                    this.hop();
                    break;
                case "Sleep":
                    this.sleep()
                    break;
                default:
                    return
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    // hop(){
    //     // alert(`${this.name} hops around the garden`)
    //     this.tiredness += Math.floor(Math.random()*10+1)*2
    //     this.excitement += Math.floor(Math.random()*10+1)
    //     this.thirst += Math.floor(Math.random()*10+1)*2
    //     this.weight -= Math.floor(Math.random()*10+1)
    // }
}

class Cat extends Pet {

    constructor (name){
        super(name)
        this.weight = 25

    }

     choices(){
        inquirer.prompt([
                {
                    type: 'list',
                    name: 'action',
                    choices: ['Feed', 'Drink', 'Play', 'Purr', 'Sleep']
                }
        ]).then(answer=>{

            console.log(answer)

            switch (answer.action){
                case "Feed":
                    this.feed();
                    break;
                case "Drink":
                    this.drink();
                    break;
                case "Play":
                    this.play();
                    break;
                case "Purr":
                    this.purr();
                    break;
                case "Sleep":
                    this.sleep()
                    break;
                default:
                    return
            }
        }).catch(err=>{
            console.log(err)
        })
    }
   
    //     this.showStats()
    // }

    // purr(){
    //     // alert('your cat is purring at you!')
    // }
}

const game = () => {

    inquirer.prompt(questions.selectionQuestions)
    .then((answer)=> {
        console.log(answer)
        selection(answer)
    }).catch(err => {
        console.log(err)
    })
   
 }

// const gameEnd = () => {
//     alert(`restarting the game`)
//     delete Pet;
//     game();
// }

// const loop = () => {

// }

// const stats = () => {

// }

const selection = (answer) => {
    if (answer.typeOfPet == "Cat") { 
        newPet = new Cat (`${answer.petName}`);
        console.log('new pet created')    
        newPet.start(); 
    } 
    else if (answer.typeOfPet == "Dog") { 
        newPet = new Dog(`${answer.petName}`); 
        newPet.start(); 
    }
    else if (answer.typeOfPet == "Rabbit") { 
        newPet = new Rabbit(`${answer.petName}`); 
        newPet.start();
    }
}
    
game();
