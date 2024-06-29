var year=2100

if ((year%100==0 && year%400==0)||(year%1!=0 && year%4==0)){
    console.log("Leap");
}
else{
    console.log("not leap")
}