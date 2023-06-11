//Complexity
//Time Complexity : O(1)
//Auxiliary Space: O(1)

function lastNumber(n) {
    
    let start = 1, diff = 1, direction = false;
    
    while(n > 1) {
        if(n % 2 === 1 || direction === false) {
            start += diff;
        }
        n = Math.floor(n / 2);
        diff *= 2;
        direction = !direction;
    }
    return start;
 
};console.log(lastNumber(9));
console.log(lastNumber(1));