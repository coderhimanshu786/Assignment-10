//Complexity
//Time Complexity: O(n)
//Auxiliary Space: O(n)

//function to where two parameters s that is substring and answer
function permute(s , answer)
{
	if (s.length == 0)
	{
        //concatinating substring
		console.log(answer + " ");
	}
	//iterate over the substring woth find substring length
	for(let i = 0 ;i < s.length; i++)
	{
        //initialize the character of the substring one by one
		let ch = s[i];
		let left_substr = s.slice(0, i);
		let right_substr = s.slice(i + 1);
		let rest = left_substr + right_substr;
		permute(rest, answer + ch);
	}
}

	// Question to find the rearrangement charcter ina given string
	console.log("Enter the string : ");
	console.log("\nAll possible string are : ");
	permute("cd", "");
	permute("abb", "");

