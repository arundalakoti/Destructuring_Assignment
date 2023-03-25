/**************************************************************************************************** */
//1. Count the occurrences.
let enteredString = "";
document.getElementById("inputString").addEventListener("change", (e) => {
  enteredString = "";
  enteredString += e.target.value;
  console.log(enteredString);
});

function CountOccurrences() {
  const occurrences = new Map();

  for (let i = 0; i < enteredString.length; i++) {
    if (occurrences.has(`${enteredString[i]}`)) {
      let currValue = occurrences.get(`${enteredString[i]}`);
      occurrences.set(`${enteredString[i]}`, ++currValue);
    } else {
      occurrences.set(`${enteredString[i]}`, 1);
    }
  }

  return occurrences;
}

document.getElementById("countOccurrences").addEventListener("click", () => {
  console.log(CountOccurrences());
});
/**************************************************************************************************** */

/**************************************************************************************************** */
//2. Only unique items are allowed.

const numbers = [1, 2, 1, 3, 1, 2, 1, 5, 6, 7];

function UniqueValues(){
  const uniqueElements = new Set();

  numbers.map((val) => {
    uniqueElements.add(val);
  });

  return uniqueElements;
}

document.getElementById("numbersSet").addEventListener("click", () => {
  console.log(UniqueValues());
});
/**************************************************************************************************** */

/**************************************************************************************************** */
//3. Swap the values.

let firstNumber = null;
let secondNumber = null;

document.getElementById("firstNumber").addEventListener("change", (e) => {
  firstNumber = e.target.value;
});

document.getElementById("secondNumber").addEventListener("change", (e) => {
  secondNumber = e.target.value;
});

function swapValues(...values) {
  const [firstVal, secondVal] = values;

  return [secondVal, firstVal];
}

document.getElementById("swapValues").addEventListener("click", () => {
  console.log("Before Swap:", [firstNumber, secondNumber]);
  const afterSwap = swapValues(firstNumber, secondNumber);
  console.log("After Swap:", afterSwap);
});
/**************************************************************************************************** */

/**************************************************************************************************** */
//4. Access random elements.

document.getElementById("printRandomValues").addEventListener("click", () => {
  console.log("Expected Values:", formNewArray([20, 13, 100, 23, 144, 1, 10]));
});

function formNewArray(arr) {
  const [firstVal, secondVal, ...rest] = arr;
  const lastVal = rest.pop();

  return [firstVal, secondVal, lastVal];
}

/**************************************************************************************************** */

/**************************************************************************************************** */
//5. Min and max values.

document.getElementById("minAndMax").addEventListener("click", () => {
  console.log(maxAndMin([20, 13, 100, 23, 144, 1, 10]));
});

function maxAndMin(arr) {
  let minVal = Math.min(...arr);
  let maxVal = Math.max(...arr);

  return { max: maxVal, min: minVal };
}

/**************************************************************************************************** */

/**************************************************************************************************** */
//6. Nested Objects.

const person = {
  name: "Mithun",
  age: 21,
  address: {
    street: "B8, Block B, Industrial Area.",
    city: "Sector 62, Noida",
    state: "Uttar Pradesh",
  },
};

document.getElementById("consoleObject").addEventListener("click", () => {
  console.log(extractValues(person));
});

function extractValues(person) {
  const {
    name,
    address: { street },
  } = person;

  return { name, street };
}
/**************************************************************************************************** */
