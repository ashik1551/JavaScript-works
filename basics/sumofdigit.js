var n = 555
var s = 0
while (n > 0) {
    s += n % 10
    n = Math.floor(n / 10)
}
console.log(s)