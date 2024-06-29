var arr = ["flyin", "fly", "flyoff", "flyout"]
var temp = arr[0]

for (let ch of arr) {
    if (temp.length > ch.length) {
        temp = ch
    }
}
var t=temp.split("")

for(let i of temp){
    let f=true
    for(let ch of arr){
        if(!ch.startsWith(t.join(""))){
            t.pop()
            f=false
            break
        }
    }
    if(f){
        t=t.join('')
        break
    }
    
}
console.log(t)