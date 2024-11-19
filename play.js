// console.log('name');

// fee = Number(window.prompt('Enter your fee'))
// tuition = Number(window.prompt('Enter Your tuition'));
// totalFee =  fee + tuition;
// console.log(totalFee);

// console.log(Math.ceil(Math.random() * 3 ));

// age limit app for drinking
//   let age = window.prompt('Age limit to drink');

//   if(age > 18){
//     console.log(alert('eligible to drink ✔️ '));
//   }else if (age == 'd'){
//      console.log(alert('enter a number'));
//   } else{
//     console.log(alert('To young to drink  ❌'));
//   }

//   functions
// function human(){
//  console.log('ahmed');
// }
// human()

// // dynamic function
// function Human(age){
//  console.log(age);
// }
// Human('i am ' + 12)

// function  moms(mom){
//  greet = ` my moms name is ${mom}`;
//  console.log(greet);
// }
// moms('Kenny')

// function div(x,y){
//     return x / y
// }
// num1 = div(100,2)
// console.log(num1);

// const add =(a,b )=> a + b;
// console.log(add(1,100));

// const sub = (x,y) => x - y;
//  console.log('Hello',sub(100, 50));

//  const div = (c,d) => c / d;
//  console.log(div(200, 10));

//  const mul = (e,f)=> e * f;
//  console.log(mul(20,10));

// const pra = (name,age,time,profession) =>{
//  const outPut = `my Name is ${name}  i am ${age} i got here by ${time} my profession ${profession}`;
//  console.log(outPut);
// }

// console.log(pra('Ahmed',  20, '12:45', 'frontend developer'));

// const result = () =>{
//     let total = window.prompt('Enter your result');
//     if(total == 100){
//         console.log('you did a great job');
//     }else{
//         console.log('failed');

//     }
//     return total

// }

// result()

// A1:6
// B2:5
// B3: 4
// C4: 3
// C5: 2
// C6: 1

// waec claculator

// objects
// const Student = {
//     name:'Famzy Jnr',
//      class: 'Grade 12',
//       age: 19,
// }
// console.log(Student);
// console.log(Student.name);
// console.log(Student['class']);
// console.log(Student.age);

// Student['name'] = 'Ahmed';
// Student['class'] = 'grade 12',
// Student['age'] = 12;

// dynamic
// const Person = (name,grade,age,waec,jamb) => {
//   const Student = {
//     name: name,
//     grade: grade,
//     age: age,
//     waec:waec,
//     jamb: jamb,
//     result: function(){
//         return Math.floor(this.waec + this.jamb / 8);
//     }
//   };
// const info = ` Hi my name is ${Student.name} am in grade ${Student.grade} i'm  ${Student.age} year old this is my olevel result ${Student.result()}`;
// return info
// };

// console.log(Person('Ahmed', '12', '15', 50 , 250));

// for loop: names

// const randoms=(names)=>{
// let result = [];
//  for(const name of names){
//    result.push(name);
//    result.length;
//  }
//  console.log(result);
//  return result;
// }
// console.log(randoms(['famzy-Jnr','Ahmed', 'Famzy','Ayuba', "Gemi", ]));

// // result
// const waec =()=>{

// }

// const weathe=(weather)=>{

//  if(weather == 'rain'){
//   console.log('raining');
//  }else{
//   console.log('it sunning');
//  }
//  let output = ` the ${weather}`
//  return output
// }
// console.log(weathe('rain'));

// const max=(pharse)=>{
//   let result = pharse[0];
//   for(const phrases of pharse){

//     if(result < phrases){
//       result = phrases
//     }

//   }
//   return {result};
// }

// console.log(max([1,2,3,4, 100]));

// const letter =(letters)=>{
//     for(const letter of letters){
//      console.log(letter);

//     }
// }

// console.log(letter('haha'));

// //getting user input with prompt
// const num = window.prompt('Sum')  
//  //using split method to convert it to and array and string
// const newArray  = num.split(',').map(Number);
// //using sum method to sum up 
//  const addResul = Number(newArray.reduce((a, b) => a  + b, 0)); 
//  console.log("Sum:",addResul);
//   window.alert(addResul)
 
// // Prompt the user for a comma-separated list of numbers  
// const nums = window.prompt('Enter numbers separated by commas:');  

// // Convert the input string into an array of numbers  
// const numArray = nums.split(',').map(Number); // Split and convert to numbers  

// // Sum the numbers  
// const addResult = numArray.reduce((a, b) => a + b, 0); // Provide an initial value of 0  
// console.log('Sum:', addResult);  


//How to select an item out of an array
const randomFruit=(fruits)=>{
 const randomNumber = Math.floor(Math.random(fruits) * fruits.length)
 console.log(randomNumber);
 
 return fruits[randomNumber]
} 
 fruits = [ "bananna",
    "Apple",
    "orange",
    "pea",   ]
console.log(randomFruit(fruits));
//  let maxLength  = 4;
// console.log(Math.floor(Math.random() * maxLength));
//if if else you can use an else statement inside of an if else statement. This is known as a nested if else statement
// rainy(1), sunny(-1), overcast(0)

const weathers=(weather,weather2)=>{
  if(weather === 'rainy' && weather2 === 'sunny'){
    return {'rainy': 2};
  } else if(weather === 'sunny'){
    return {'sunny': -1};
  }
  else if (weather === 'overCast'){
    return {" overCast" : 0};
  }
  else{
    return null;
  }
}
console.log(weathers('rainy','sunny'));
