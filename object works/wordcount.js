var word="hello hai hello hai hello hello"

var wc={}

word=word.split(" ").map(w=>w in wc?wc[w]+=1:wc[w]=1)
console.log(wc);