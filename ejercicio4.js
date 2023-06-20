for(let x=1; x <=80; x++) {
let result = "";
if(x % 3 == 0){
result += "Fizz";
}
if(x % 5 == 0){
result += "Buzz";
}
console.log(result || x);
}