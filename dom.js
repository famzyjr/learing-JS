// DOM- document object modle
// innerHTML: used to change tages
// innerHTML:used to change text
// style: this is used to style the
// onclick: this is used to detect an event when a user clicks
// querySelector: method returns the first element within the document that matches a specified CSS selector.
let title = document.getElementById("title");
// console.log("before", title.innerText);
let red = document.getElementById("red");

let yellow = document.getElementById("yellow");

let green = document.getElementById("green");

let message = "How are you doing";

// console.log("after:", title.innerText);
const colour = [
  '#2C3E50',
  '#2a74be',
  '#fff', '#ad1818','green',
  "#DC143C",  
    "#0000CD",  
    "#32CD32",  
    "#DAA520",  
    "#708090",  
    "#00BFFF",  
    "#FF6347",  
    "#DA70D6",  
    "#FF7F50",  
    "#556B2F",  
    "#4682B4",  
    "#C71585",  
    "#D2691E",  
    "#C0C0C0",  
    "#FF69B4",  
    "#8B4513",  
    "#40E0D0",  
    "#DDA0DD",  
    "#4B0082",  
    "#FFFACD"  
]

const colors =()=>{
const random = Math.floor(colour.length * Math.random())
return random
}
const body = document.querySelector('body')
const changesSpan = document.querySelector('#changes-span')
const background =()=>{
  const random = colour[colors()];
  changesSpan.innerText = random;
  body.style.backgroundColor = random;
}
const changes = document.getElementById('change')
changes.onclick =()=> background();

  title.innerHTML = `<p>${message}</p>`;
title.onclick = () =>{(
    title.innerText = "red"
)} 



const squares = document.querySelectorAll(".colorButton");
// console.log(squares);
// forEach
const timeClicked = { 'red': 0, 'yellow': 0, 'green': 0 };
squares.forEach((squares) => {
  squares.onclick = () =>{
    timeClicked[squares.value] += 1;
    squares.innerText = timeClicked[squares.value]
    
  }
});


// squares.forEach((square) => {  
//   square.onclick = () => {  
//     // Increment the count for the clicked button's color  
//     timeClicked[square.value] += 1;  
//     // Update the button's text to show the current count  
//     square.innerText = timeClicked[square.value];  
//   };  
// });  

// Function to reset the counters and button texts  
const clearNumbers = () => {  
  timeClicked.red = 0;  
  timeClicked.yellow = 0;  
  timeClicked.green = 0;  
  
  squares.forEach(square => {  
    square.innerText = ''; // Clear the text on each button  
  });  
};  

// Get the clear button by its ID and set up the click event  
const clearBtn = document.getElementById('cleargame'); // Use document.getElementById  
clearBtn.onclick = () => clearNumbers();