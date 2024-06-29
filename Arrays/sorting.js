// var arr=[12,13,14,15,16,1000,100,10,9]

// function compare(o1,o2){
//     if(o1<o2){
//         return -1
//     }
//     else{
//         return 1
//     }
// }

// var compare=(o1,o2)=>(o1<o2)?-1:1
// console.log(arr.sort(compare));

// console.log(arr.sort((o1,o2)=>o1-o2));

var arr=["program","project","profile","profession","django","python"]

// console.log(arr.sort((o1,o2)=>o1.length-o2.length))

var temp=arr.sort((o1,o2)=>o1.length-o2.length)

for(let ch of arr){
    console.log(ch);
}