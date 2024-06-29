// var items={"pottato":40,"mango":50,"apple":60,"banana":30,"carrot":40}

// var arr=Object.entries(items)           // covert Object to Nested Array

// console.log(arr.reduce((p1,p2)=>p1[1]>p2[1]?p1:p2));

var text="pneumonoultramicroscopicsilicovolcanoconiosis"

wc={}

for(let ch of text){
    ch in wc?wc[ch]+=1:wc[ch]=1
}
var arr=Object.entries(wc)

console.log(arr.reduce((o1,o2)=>o1[1]>o2[1]?o1:o2));