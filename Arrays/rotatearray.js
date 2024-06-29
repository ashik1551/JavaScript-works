var arr=[10,20,30,40]
var k=2

for(let i=0;i<k;i++){
    let temp=arr.pop()
    arr.unshift(temp)
}
console.log(arr)