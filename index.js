import { addition } from "mathcalculatorbyantonn";
import { subtraction } from "mathcalculatorbyantonn";
import { multiplication } from "mathcalculatorbyantonn";
import { division } from "mathcalculatorbyantonn";
import { randomCatsWithQuote } from 'randomPhotos';
/* <p id="quote"></p>
<p id="quoteAuthor"></p>
<img id="catImg"> */


let generateNewBtn = document.querySelector("#generateNew");
let quotePTag = document.querySelector("#quote")
let quoteAuthorTag = document.querySelector("#quoteAuthor")
let catImg = document.querySelector("#catImg")
generateNewBtn.onclick = function() {
  quotesAndCats()
}

function quotesAndCats() {
  randomCatsWithQuote()
    .then(result => {
      quotePTag.innerHTML = result.quote;
      quoteAuthorTag.innerHTML = result.author
      catImg.src = result.catUrl
    })
}

quotesAndCats();


let additionBtn = document.getElementById("addition");
let subtractionBtn = document.getElementById("subtraction");
let multiplicationBtn = document.getElementById("multiplication");
let divisionBtn = document.getElementById("division");

let numbers = document.querySelector("#numbers");

additionBtn.onclick = function() {
  numbers.innerHTML += "+";
};

subtractionBtn.onclick = function() {
  numbers.innerHTML += "-";
};

multiplicationBtn.onclick = function() {
  numbers.innerHTML += "*";
};

divisionBtn.onclick = function() {
  numbers.innerHTML += "/";
};



function createButtons() {
  let mathstuff = document.getElementById("mathstuff")
  for (let i = 0; i < 10; i++) {
    let newBtn = document.createElement("button")
    newBtn.innerHTML = i;
    newBtn.classList.add("calculatorBtn", "buttonStyling");
    mathstuff.appendChild(newBtn);
  }
  calculator()
}

createButtons()
function calculator() {
  let calculatorBtn = document.querySelectorAll(".calculatorBtn");
  for (let i = 0; i < calculatorBtn.length; i++) {
    calculatorBtn[i].onclick = function() {
      let numbers = document.querySelector("#numbers");
      numbers.innerHTML += i;
    }
  }
}

let equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", function() {
  let calculatorBtn = document.querySelectorAll(".calculatorBtn");
  let operator = document.querySelectorAll(".operator");
  for (let i = 0; i < operator.length; i++) {
    operator[i].disabled = true
  }
  for (let i = 0; i < calculatorBtn.length; i++) {
    calculatorBtn[i].disabled = true
  }


  if (numbers.innerHTML.includes("+") || numbers.innerHTML.includes("-") || numbers.innerHTML.includes("*") || numbers.innerHTML.includes("/")) {
    const operands = numbers.innerHTML.split(/[-+*/]/);
    const operator = numbers.innerHTML.match(/[-+*/]/)[0];
    let result;
    switch (operator) {
      case "+":
        result = addition(Number(operands[0]), Number(operands[1]));
        break;
      case "-":
        result = subtraction(Number(operands[0]), Number(operands[1]));
        break;
      case "*":
        result = multiplication(Number(operands[0]), Number(operands[1]));
        break;
      case "/":
        result = division(Number(operands[0]), Number(operands[1]));
        break;
    }
    numbers.innerHTML = `Result: ${result}`
  }
});

let clearValue = document.querySelector("#clearValue")

clearValue.onclick = function() {
  numbers.innerHTML = '';
  let calculatorBtn = document.querySelectorAll(".calculatorBtn");
  let operator = document.querySelectorAll(".operator");
  for (let i = 0; i < operator.length; i++) {
    operator[i].disabled = false
  }
  for (let i = 0; i < calculatorBtn.length; i++) {
    calculatorBtn[i].disabled = false
  }
}

