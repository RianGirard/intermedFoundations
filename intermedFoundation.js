// Sigma
function sigma(num) {
    var sum = 0;
    for(var i=1; i<=num; i+=1) {
        sum = sum + i;
        }
    return sum;
    }
console.log(sigma(1000));

// Factorial
function factorial(num) {
    var product = 1;
    for (var i=1; i<=num; i+=1){
        product = product * i;
    }
    return product;
}
console.log(factorial(10));

// Fibonacci
function Fib(n) {
    if (n == 0) {    // initial Fib sequence number
        var sum = 0;        
    }
    else if (n == 1) {  // initial Fib sequence number
        var sum = 1;
    }
    else {
        var n1 = 0;  // start loop, set initial sequence sums
        var n2 = 1; 
        var sum = 1;
        for (var i=2; i<n; i+=1) {  // continue loop so long as i < desired n value
            var nexTerm = n1 + n2;  // nexTerm will be the "next" iteration we add to the sum; the number 3 will be the first successful loop
            sum = nexTerm + n2; 
            n1 = n2;  // move the values forward one iteration and continue loop as appropriate
            n2 = nexTerm;
        }
    }
    //console.log("n1, n2: ", n1, n2)
    return sum;
}
console.log(Fib(11));

// Array: Second to Last
function secondToLast(arr){
    if (arr.length < 2){
        return null;
    }
    for (var i=0; i<arr.length; i++){
        var penult = arr[i-1];
    }
    return penult;
}
console.log(secondToLast([42, true, 4, "Liam", 7]));

// Array: Nth-to-Last
function nthToLast(arr,n){
    if (n>arr.length){
        return null;
    }
    for (var i=0; i<arr.length; i++){
        var Nth = arr[i+1-n];
    }
    return Nth;
}
console.log(nthToLast([5,2,3,6,4,9,7],3));

// Second-Largest
function secLargest(arr){
    if (arr.length<2){
        return null;
    }
    for (var j=0; j<2; j++){  // two loops

        var big = arr[0];  // current biggest
        for (var i=0; i<arr.length; i++){
            if (arr[i] > big){
                big = arr[i];  // new current biggest
                var index = i
            }
        }
        arr.splice(index, 1);  // jettison current biggest for second loop
        // console.log(arr);
    }
    return big;  // final answer
}
console.log(secLargest([42,1,4,3.14,7]));

// Double Trouble
function doubleTroub(arr) {
    for (var i=0; i<arr.length; i+=2){   // note loop must increment by 2 since a value will be inserted each pass
        arr.splice(i, 0, arr[i]);   // splice in value of i at position i
    }
    return arr;
}
console.log(doubleTroub([4, "Ulysses", 42, false]));