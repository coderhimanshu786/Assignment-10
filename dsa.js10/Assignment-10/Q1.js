//Complexity
//Time Complexity : O(1)
//Auxiliary Space: O(1)
//function to check is power of 3 
function isPowerOfThree(n){
    //here there is a maximum power of 3^19
   return 1162261467 % n == 0;
}
//print
console.log(isPowerOfThree(81));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(-1));