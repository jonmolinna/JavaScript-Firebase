// CHALLENGE 1: ADD ALL NUMBERS
// Return a sum of all parameters entered regardless of the amount of numbers - NO ARRAYS
// ex. addAll(2,5,6,7) === 20

// Solution - ES5 arguments & for loop
/* function addAll(str){
    //return arguments;
    var args = Array.prototype.slice.call(arguments); // Devuelve un array
    var total = 0;
    for(let i=0; i<args.length; i++){
        total += args[i];
    }
    return total;
} */

// Solution 2 - ES6 ...rest & reduce/forEach
function addAll(...numbers){
    //return numbers // Devuelve un Array

    // Por ForEach
    // let total = 0;
    // numbers.forEach(num => total += num);
    // return total;

    // Usando Reduce
    return numbers.reduce((acc, cur) => acc + cur);
}

//console.log(addAll(2,5,6,7,5));


// CHALLENGE 2: SUM ALL PRIMES
// Pass in a number to loop up to and add all of the prime numbers. A prime number is a whole
// number greater than 1 whose only factors are 1 and itself
// ex. sumAllPrimes(10) == 17
function sumAllPrimes(num){
    let total = 0;

    function checkForPrime(i){
        for(let j=2; j < i; j++){
            if(i%j === 0){
                return false;
            }
        }
        return true;
    }

    for(let i=2; i<= num; i++){
        if(checkForPrime(i)){
            total += i
        }
    }
    return total;
}

//console.log(sumAllPrimes(10));


// CHALLENGE 3: SEEK & DESTROY
// Remove from the array whatever is in the following arguments. Return the leftove numbers
// in an array
// ex. seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6) == [3, 4, 'hello']

//16:59