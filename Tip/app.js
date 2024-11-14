// tip calculator

// const tips =(totalbill,tip,people)=>{
//  const bills = Number(totalbill + tip);
//   const finalBill = bills / people
//  return {finalBill}
// }
// console.log(tips(100,10,2));

const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const peopleInput = document.getElementById("numberOfPeople");
const totalPer = document.getElementById("perPersonTotal");
const peoples = document.getElementById("numberOfPeople");
let people = Number(peopleInput.innerText);
const calculateBill = () => {
  const bill = Number(billInput.value);

  const tip = Number(tipInput.value) / 100;

  const totaltip = bill * tip;

  const totalAmount =  bill + totaltip;

  const perPerson = totalAmount / people;
  totalPer.innerText = ` $${perPerson.toFixed(2)}`;
};
const increasePeople = () => {
  people += 1;
  // updating the dom
  peoples.innerText = people;

  calculateBill();
};

const decreasePeople = () => {
  // guard clause
  // if amount is 1 or less simply return
  // (a.k.a you can't decrease the number of people to 0 or negative!)
  if (people <= 1) {
    return;
  }

  // decrement the amount
  people -= 1;

  // update the DOM with the new number of people
  peoples.innerText = people;

  // calculate the bill based on the new number of people
  calculateBill();
};
