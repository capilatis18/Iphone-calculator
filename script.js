const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const siete = document.querySelector("#siete");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const multi = document.querySelector("#multi");
const divide = document.querySelector("#divide");
const sum = document.querySelector("#sum");
const rest = document.querySelector("#rest");
const equal = document.querySelector("#equal");
const esc = document.querySelector("#esc");
const moreless = document.querySelector("#moreless");
const per = document.querySelector("#per");
const coma = document.querySelector("#coma");
const screen = document.querySelector("#screen");

const numbersArray = [zero, one, two, three, four, five, six, siete, eight, nine];

// Functions
const getValueAsStr = () => screen.textContent;
const getValueAsNum = () => {
    return parseFloat(screen.textContent);
}
const clickNumber = (numStr) => {
    const currentScreen = screen.textContent;
    if(currentScreen === "0"){
        screen.textContent = numStr;
    }
    else {
        screen.textContent = currentScreen + numStr;
    }
};
// Listeners
for (let index = 0; index < numbersArray.length; index++) {
    const numbers = numbersArray[index];
    numbers.addEventListener("click", () => {
        clickNumber(index.toString());
    });
}
esc.addEventListener("click", () => {
    screen.textContent = "0";
    valueStrInMemory = null;
    operatorInMemory = null;
});
per.addEventListener("click", () =>{
    const currentValue = getValueAsNum();
    const newValue = currentValue / 100;
    screen.textContent = newValue.toString();
});
moreless.addEventListener("click", () =>{
    const currentValue = getValueAsNum();
    const currentValueAsStr = getValueAsStr();

    if(currentValueAsStr === "-0"){
        return screen.textContent = "0";
    }
    if(currentValue >= 0){
        return screen.textContent = "-" + currentValue;
    }
    else{
        return screen.textContent = currentValueAsStr.substring(1);
    }
});
// Operators
let valueStrInMemory = null;
let operatorInMemory = null;
let valueNumInMemory = parseFloat(valueStrInMemory);

const operatorsClick = (operation) => {
    const currentValueAsStr = getValueAsStr();
    if(!valueStrInMemory){
        valueStrInMemory = currentValueAsStr;
        operatorInMemory = operation;
        screen.textContent = "0";
        return;
    }

    valueStrInMemory = getResultOperationAsStr();
    operatorInMemory = operation;
    screen.textContent = "0";
}

const getResultOperationAsStr = () => {
    const currentValueAsNumber = getValueAsNum();
    const valueNumInMemory = parseFloat(valueStrInMemory);
    let newValueNum;
    if(operatorInMemory === "addition"){
        newValueNum = valueNumInMemory + currentValueAsNumber;
    }
    else if(operatorInMemory === "multiplication"){
        newValueNum = valueNumInMemory * currentValueAsNumber;
    }
    else if(operatorInMemory === "subtraction"){
        newValueNum = valueNumInMemory - currentValueAsNumber;
    }
    else if(operatorInMemory === "division"){
        newValueNum = valueNumInMemory / currentValueAsNumber;
    }
    return newValueNum.toString();
}

sum.addEventListener("click", () =>{
    operatorsClick("addition");
});
multi.addEventListener("click", () =>{
    operatorsClick("multiplication");
});
rest.addEventListener("click", () =>{
    operatorsClick("subtraction");
});
divide.addEventListener("click", () =>{
    operatorsClick("division");
});
equal.addEventListener("click", () => {
    if (valueStrInMemory){
        screen.textContent = getResultOperationAsStr();
        valueStrInMemory = null;
        operatorInMemory = null;
    }
});