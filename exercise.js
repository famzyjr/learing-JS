const maxs = (array) => {
  let max = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
};

console.log(maxs([1, 3, 5, 10, 100, 500]));

const max2 = (arrays) => {
  arrays.sort((a, b) => a - b);
  return arrays[arrays.length - 1];
};
console.log(max2([1.1, 100, 8, 17345]));

// palindrome
// const isPalindrome = (string) => {
//   let newString = '';
//   for (let i = string.length - 1; i >= 0; i--) {
//     console.log(string[i]);
//     newString += string[i];
//   }

//   if (newString === '') {
//     return 'empty text';
//   } else if ( newString == string){
//     return  ` ${newString} is  a Palindrom`
//   }else {
//     return `${newString} is not a  Palindrom`;
//   }
  
// };
// let userOutPut = window.prompt('Palindrom')

// console.log(isPalindrome(userOutPut));
// The function will accept a single argument (income). ✅

// It will compute each category by multiplying the income by the respective percentages (0.50, 0.30, and 0.20).✅
// Finally, it will return an object with the calculated values for "Needs", "Wants", and "Savings".✅
// savingsStrategy
const savingsStrategy=(income)=>{
    const  Needs = 0.50 * income;
    const want = 0.30 * income;
    const Savings = 0.20 * income;
    return {Needs,want,Savings}
    }
    console.log(savingsStrategy(5000));
    
    const max =()=>{
      let nums = [1,4,5]
      const total = nums.reduce((a, b) => a +  b)
      return total
    }
    console.log(max());
    
    const factorial=(n)=>{
    let result  = 1;
    
    for(let i = 1; i <= n; i++){
       result *= i;
    }
    return result;
    }
    console.log(factorial(3));
    
    // Days in the month
    const months=(month,year)=>{
      let thirtyOneDay = [1,3,5,7,8,10,12];
      // checking if the month is feb
      if(month === 2){
        return year % 4 === 0 && 100 !=0 || year % 400 === 0 ? 29: 28;
      }
     // Check if the month has 30 days  
     if(thirtyOneDay.includes(month)){
       return {'days': 31}
     }else{
      return {'days': 30}
     }
    
    }
    console.log(months(10));
    // hours
    const hour =(hours,minutes)=>{
      let seconds = hours * 60 * 60;
      let minute =  minutes * 60;

      return {'seconds':  seconds, 'minutes': minute };
    }
    console.log(hour(10,20));
    