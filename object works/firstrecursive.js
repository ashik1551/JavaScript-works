var word="ABCBDDE"

var wc={}

for(let ch of word){
    if(ch in wc){
        console.log(ch)
        break
    }
    else{
        wc[ch]=1
    }
}