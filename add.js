const inputs = document.getElementById('input');
const btn   = document.getElementById('btn');
const output = document.getElementById('output')


const use=()=>{
let input = inputs.value;
let outputs = output;
outputs.innerText = `My Name Is ${input}`;

}
use();
