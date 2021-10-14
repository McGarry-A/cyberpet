// // // challenge 1

// // // const say = () => {
// // //     console.log('Hello Code Nation')
// // // }

// // // const sayNtimes = (n,say) => {
// // //     for (let i = 0; i<n ; i++){
// // //         say()
// // //     }
// // // }

// // // sayNtimes(4,say);

// // // challenge 2 

// // // const sum = (x,y) => {
// // //     return x + y
// // // }

// // // let result = 0

// // // const sumNTimes = (sum, n, result) => {
// // //     for (let i = 0; i<n; i++){
// // //         result = sum + result
// // //     }
// // //     return result
// // // }

// // // console.log(sumNTimes(sum(2,3),5,result))

// // // challenge 3

// // // let array = [2,3,4,5,6]

// // // array = array.map((x)=>{
// // //     return x*3
// // // })

// // // console.log(array);

// // // challenge 4

// // // const multiply = (a,b) => {
// // //     return a*b
// // // }

// // // const add = (a,b) => {
// // //     return a+b
// // // }

// // // const divide = (a,b) => {
// // //     return a/b
// // // }

// // // const subtract = (a,b)=> {
// // //     return a-b
// // // }

// // // const doMath = (num1) => {
// // //     return (num2,fn) => {
// // //         return fn(num1,num2)
// // //     }
// // // }

// // // console.log(doMath(2)(3, add))

// // // const timerFunction = () => {
    
// // //     setInterval(()=>{
        
// // //         console.log(this.hunger)
// // //         console.log(this.excitement)

// // //     if (gameEnd(this)){
// // //         clearInterval(timer)
// // //     }
// // // },1000)
// // // } 

// // // timerFunction

// // // let a = 1 
// // // let b = 2
// // // let c = 3
// // // let d = 4

// // // console.log(a)

// // // setTimeout(()=>{
// // //     console.log(b)
// // // },2000)

// // // console.log(c)
// // // console.log(d)

// let inquirer = require('inquirer');
// const { type } = require('os');
// const { async } = require('rxjs');
// // const { assignWith } = require('lodash');

// // let questions = inquirer.prompt([
// //     {
// //         type: 'list',
// //         name: 'typeOfPet',
// //         message: 'What type of pet do you want to adopt?',
// //         choices: ['Dog', 'Cat', 'Rabbit']
// //      },
// //     // {
// //     //     type: 'input',
// //     //     name: 'nameOfPet',
// //     //     message: 'what is the name of your pet?',
// //     //     validate: (name)=>{
// //     //         if (name == "") { return "please enter a valid name" }
// //     //         return true
// //     //     }
// //     // },
// //     // {
// //     //     type: 'confirm',
// //     //     name: 'gameRules',
// //     //     message: 'Great job adopting your first cyber pet! Make sure that you keep your cyber pets hunger and thirst levels bellow 100, and excitement above 0 to not lose your cyber pet! Press Y to continue'
// //     // },
// //     // {
// //     //     type:'confirm',
// //     //     name:'stats',
// //     //     message:'Here are you stats to begin with. Press Y to continue'
// //     // },
// //     // {
// //     //     type:'confirm',
// //     //     name:'currentStats',
// //     //     message:'Pets current hunger levels are 40. Thirst levels are 40. Excitement levels are 5. Tiredness levels are 40'
// //     // },
// //     // {
// //     //     type: 'list',
// //     //     name: 'choices',
// //     //     message: 'Please choose the following',
// //     //     choices: ['to feed' ,'to drink', 'to play', 'to bark', 'to walk','to sleep']
// //     // }
// // ]).then((answers)=> {
// //     console.log(answers)
// // })

// let typeOfpet;
// let newPet; 

// inquirer.prompt([
//     {
//         type: 'list',
//         name: 'typeOfPet',
//         message: 'What type of pet do you want to adopt?',
//         choices: ['Dog', 'Cat', 'Rabbit']
//     }
// ]).then((answer)=> {

//         if (answer.typeOfPet == "cat") { 
//             newPet = new Cat (`${petName}`);    
//             game()
//         } 
//         else if (answer.typeOfPet == "dog") { 
//             newPet = new Dog(`${petName}`); 
//             game()
//         }
//         else if (answer.typeOfPet == "rabbit") { 
//             newPet = new Rabbit(`${petName}`); 
//             game()
//         } else {
//             // alert(`make sure you select if your pet is a dog, cat or rabbit`)
//             game()
//         }
// })

// const game = () => {
//     console.log('hello world')
// }
