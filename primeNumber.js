import colors from 'colors';

const [number1, number2] = process.argv.slice(2)
const num1 = parseInt(number1);
const num2 = parseInt(number2);

function primeNumber (num1) {
  if(num1 > 1) {
  for (let y = 2; y <= Math.sqrt(num1); y++){
    if (num1 % y == 0){
       return false; 
    }
    } 
    return true;
  }
}

function numderOutput(num1,num2) {
  if(isNaN(num1) || isNaN(num2)) {
    return console.log(`${colors.red("Error: Задан только 1 аргумент или аргумент не является числом")}`)
  }
  let numbers = [];
  for(num1; num1 <= num2; num1++){
    if(primeNumber (num1)){
    numbers.push(num1)
  }
 }
 if(numbers.length === 0){
    return console.log(`${colors.red("Error: Нет простых чисел в данном диапазоне")}`)
  }
  numbers.forEach((num, index) => {
    if(!((index + 1)% 3)) {
      console.log(colors.red(num))
    } else if(!(index%3)) {
      console.log(colors.green(num))
    } else {
        console.log(colors.yellow(num))
    }
  })
}

numderOutput(num1, num2);
