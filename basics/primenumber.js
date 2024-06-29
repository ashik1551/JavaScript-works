n=11
f="prime"
for(let i=2;i<n;i++){
    if(n%i==0){
        f="not prime"
    }
}
if(f){
    console.log(n,"is",f)
}