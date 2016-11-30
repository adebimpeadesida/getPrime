var checkPrimes = function(number){
var temp = [];
if (number < 2 ){
 return false;
}
for(var i=2; i<number; i++) {
 if (number%i === 0 ){
   temp.push(i);
 }
}
return temp.length === 0;
};

var getPrimes = function(number){
var primes = [];
for(var i=1; i<=number; i++){
 if(checkPrimes(i)){
   primes.push(i);
 }
}
return primes;
};
module.exports = getPrimes