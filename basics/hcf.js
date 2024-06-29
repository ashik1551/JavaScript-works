var num1=30
var num2=61
var hcf=1

small=num1<num2?num1:num2

for (let i=2;i<=small;i++){

    if(num1%i==0 && num2%i==0){
        hcf=i
    }

}
console.log(hcf)