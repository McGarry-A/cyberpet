// challenge 1

// const say = () => {
//     console.log('Hello Code Nation')
// }

// const sayNtimes = (n,say) => {
//     for (let i = 0; i<n ; i++){
//         say()
//     }
// }

// sayNtimes(4,say);

// challenge 2 

// const sum = (x,y) => {
//     return x + y
// }

// let result = 0

// const sumNTimes = (sum, n, result) => {
//     for (let i = 0; i<n; i++){
//         result = sum + result
//     }
//     return result
// }

// console.log(sumNTimes(sum(2,3),5,result))

// challenge 3

// let array = [2,3,4,5,6]

// array = array.map((x)=>{
//     return x*3
// })

// console.log(array);

// challenge 4

// const multiply = (a,b) => {
//     return a*b
// }

// const add = (a,b) => {
//     return a+b
// }

// const divide = (a,b) => {
//     return a/b
// }

// const subtract = (a,b)=> {
//     return a-b
// }

// const doMath = (num1) => {
//     return (num2,fn) => {
//         return fn(num1,num2)
//     }
// }

// console.log(doMath(2)(3, add))

const timerFunction = () => {
    
    setInterval(()=>{
        
        console.log(this.hunger)
        console.log(this.excitement)
},1000)
} 

timerFunction()