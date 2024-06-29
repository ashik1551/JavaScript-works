var first=0
var second=1

var n=10

console.log(first)
console.log(second)

for(let i=3;i<=n;i++){
    let third=first+second
    first=second
    second=third
    console.log(third)
}