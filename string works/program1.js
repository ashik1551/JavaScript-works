var namee="Ashik Anil"
// t=namee.split(" ")
// console.log("first name : ",t[0])
// console.log("second name : ",t[1])

t=namee.indexOf(" ")  //space
console.log("first name :",namee.slice(0,t))
console.log("last name :",namee.slice(t,))