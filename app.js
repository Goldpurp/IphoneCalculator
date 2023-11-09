// const InputTop = document.querySelector(".input-top");
// const InputBottom = document.querySelector(".input-bottom");
// const buttons = document.getElementById("buttons");

// let currentInput = "";
// let currentEval = "";
// // let lastOperator;
// let evaluation = false;

// function UpdateUI() {
//   InputBottom.value = currentInput;
//   InputTop.value = currentEval;
// }

// buttons.addEventListener("click", function (e) {
//   const number = e.target.getAttribute("data-number");
//   const operator = e.target.getAttribute("data-operator");

//   // number clicks
//   if (number && number !== ".") {
//     if (number === "0" && !currentInput && !currentEval) {
//     } else {
//       if (evaluation) {
//         currentEval = "";
//         currentInput += number;
//         evaluation = false;
//         UpdateUI();
//       } else {
//         currentInput += number;
//         InputBottom.value = currentInput;
//       }
//     }
//   }

//   // basic operator clicks
//   if (operator && operator !== "=" && (currentEval || currentInput)) {
//     currentEval += currentInput + operator;
//     if (currentEval.at(-1) === operator && !currentInput && !evaluation) {
//       currentEval = currentEval.slice(0, -1).replace(/.$/, `${operator}`);
//     }
//     evaluation = false;
//     InputTop.value = currentEval;
//     currentInput = "";
//   }

//   // equals to clicks
//   if (operator === "=") {
//     currentEval += currentInput;
//     currentInput = "";
//     InputTop.value = currentEval;
//     InputBottom.value = "= " + eval(currentEval);
//     evaluation = true;
//   }

//   // reset button clicks
//   if (operator === "C") {
//     currentEval = "";
//     currentInput = "";
//     UpdateUI();
//   }

//   if (number === ".") {
//     if (!currentInput) {
//       currentInput += "0" + ".";
//     } else {
//       if (!currentInput.includes(".")) {
//         currentInput += number;
//       }
//     }
//     UpdateUI();
//   }

//   console.log("currentInput", currentInput, "currentEval", currentEval);
// });

const inputField = document.querySelector(".input-field");
const buttons = document.querySelectorAll("button");

let display = "";

let arr1 = Array.from(buttons);
let arr2 = Array.from(buttons);

arr1.forEach((button) => {
  button.addEventListener("click", (e) => {
    let number = e.target.getAttribute("data-number");

    if (number && number !== "0" && number !== ".") {
      display += number;
      inputField.value = display;
    }
    if (number === "0") {
      if (!display) {
        display = "";
      } else {
        display += number;
        inputField.value = display;
      }
    }
    if (number === ".") {
      if (!display) {
        display = "0" + ".";
        inputField.value = display;
      } else {
        display += number;
        inputField.value = display;
      }
    }
  });
});

arr2.forEach((button) => {
  button.addEventListener("click", (e) => {
    let operator = e.target.getAttribute("data-operator");
    if (operator) {
      if (operator === "=") {
        display = eval(display);
        inputField.value = " = " + display;
      } else {
        display += operator;
        inputField.value = display;
      }
      if (operator === "AC") {
        display = "";
        inputField.value = display;
      }
      //   if ( display && display.at(-1) === operator) {
      //     display = display.slice(0, -1).replace(operator, operator);
      //   }
    }
  });
});
