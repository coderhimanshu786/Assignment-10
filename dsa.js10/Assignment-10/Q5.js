//Complexity
//Time Complexity: O(n)
//Auxiliary Space: O(1)

// Space efficient javascript program to count all substrings with same first and last characters.
function countSubstringWithEqualEnds(s) {
  var result = 0;
  var n = s.length;

  // Iterating through all substrings in way so that we can find first and last  character easily
  for (i = 0; i < n; i++)
    for (j = i; j < n; j++) if (s.charAt(i) == s.charAt(j)) result++;

  return result;
}

//Question  count of all contiguous substrings starting and ending with same character.
console.log(countSubstringWithEqualEnds("abcab"));
console.log(countSubstringWithEqualEnds("aba"));
