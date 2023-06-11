//Complexity
//Time Complexity: O(2n)
//Auxiliary Space: O(n)

//let make a function to store string, current value and index
function powerSet(str, index, curr) {
  //find length of string
  let n = str.length;
  // base case
  if (index == n) {
    return;
  }
  // First print current subset
  console.log(curr + "<br>");
  // Try appending remaining characters to current subset
  for (let i = index + 1; i < n; i++) {
    curr += str[i];
    powerSet(str, i, curr);
    // Once all subsets beginning with initial "curr" are printed, remove last character to consider different prefix of subsets.
    curr = curr.substring(0, curr.length - 1);
  }
}
//Question to write a recursive code to print all subsets of it
//function to call
powerSet("abc", -1, "");

powerSet("abcd", -1, "");
