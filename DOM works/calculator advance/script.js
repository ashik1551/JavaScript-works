function addition(){
    let num1=+document.querySelector("#box1").value
    let num2=+document.querySelector("#box2").value
    let result=num1+num2
    document.querySelector("#root").innerHTML=`${num1} + ${num2} = ${result}`
}

function subtraction(){
    let num1=+document.querySelector("#box1").value
    let num2=+document.querySelector("#box2").value
    let result=num1-num2
    document.querySelector("#root").innerHTML=`${num1} - ${num2} = ${result}`
}

function multipication(){
    let num1=+document.querySelector("#box1").value
    let num2=+document.querySelector("#box2").value
    let result=num1*num2
    document.querySelector("#root").innerHTML=`${num1} * ${num2} = ${result}`
}

function division(){
    let num1=+document.querySelector("#box1").value
    let num2=+document.querySelector("#box2").value
    let result=num1/num2
    document.querySelector("#root").innerHTML=`${num1} / ${num2} = ${result}`
}
