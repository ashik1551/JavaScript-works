var text="The quick brown fox jumps over the lazy dog"
var alphabets="abcdefghijklmnopqrstuvwxyz"
f=true

for(let ch of alphabets){
    if(!text.includes(ch)){
        f=false
        break
    }
}
console.log(f)