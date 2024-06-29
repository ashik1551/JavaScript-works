var n=25
var count=String(n).length
var s=0
while(n>0){
    s+=(n%10)**count
    n=Math.floor(n/10)
}
console.log(s)
