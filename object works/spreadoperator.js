// var colors=["red","blue","green","yellow"]

// var copy=[...colors,"orange","white"]       //  to create a shallow copy ( Spread Operator )

// // copy.pop()

// console.log(colors);
// console.log(copy);


var user={"name":"ashik","email":"ashik@gmail.com","password":"1234","isactive":true}

copy={...user,"isactive":false}
// copy.isactive=false

console.table(user);
console.table(copy);