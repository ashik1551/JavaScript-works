var pointfreq=false
function displayNumber(event){
    const operators=['+','-','*','/']
    let num=event.target.value
    let current=document.querySelector("#result")
    let last=current.value.slice(-1)

    if(num=='.' && pointfreq==false){
        pointfreq=true
    }
    else if(num=='.' && pointfreq==true){
        return
    }

    if(operators.includes(num) && pointfreq==true){
        pointfreq=false
    }
    
    if(operators.includes(last)&&operators.includes(num)){
        let temp=current.value.slice(0,-1)
        current.value=temp+=num
    }
    else{
        current.value+=num
    }    
}

function displayClear(){
    document.querySelector("#result").value=""
}

function clearLast(){
    let num=document.querySelector("#result").value
    let res=num.slice(0,-1)
    document.querySelector("#result").value=res
}

function getResult(){
    let exp=document.querySelector("#result").value
    let res=eval(exp)
    document.querySelector("#result").value=res
}
