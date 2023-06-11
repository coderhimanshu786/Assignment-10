//Complexity
//Time Complexity: O(n)
//Auxiliary Space: O(n)

// Function to check for consonant
function isConsonant(ch) {
  // To handle lower case
  ch = ch.toUpperCase();

  console.log(ch);

  return (
    !(ch == "A" || ch == "E" || ch == "I" || ch == "O" || ch == "U") &&
    ch.match(/[A-Z]/i)
  );
}

function totalConsonants(str) {
  let count = 0;
  //iterate over an hole given string with find lenght of string
  for (let i = 0; i < str.length; i++)
    // To check is character is Consonant
    if (isConsonant(str[i])) ++count;
  return count;
}
// Question to find consonant is an English alphabet character that is not vowel (a, e, i, o and u)
console.log(`The total nuumber of consonent in a given string is` + totalConsonants("abc de"));
console.log(`The total nuumber of consonent in a given string is` + totalConsonants("geeksforgeeks portal"));
