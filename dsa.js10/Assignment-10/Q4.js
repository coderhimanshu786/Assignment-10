//Complexity
//Time Complexity: O(n)
//Auxiliary Space: O(1)

/* Function to calculate length */
	function stringLength(str)
	{
		// if we reach at the end of the string
		if (str == "")
			return 0;
		else
			return stringLength(str.substring(1)) + 1;
	}

//To find length of the string
		console.log(stringLength("abcd"));
		console.log(stringLength("GeeksforGeeks"));

