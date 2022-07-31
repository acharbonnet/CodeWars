//=======================================
// Vowel Count
//=======================================
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

using System;
using System.Linq;

public static class Kata
{
    public static int GetVowelCount(string str)
    {
      int vowelCount = 0;
        //can't seem to get the list to work?
        //error CS0246: The type or namespace name 'List<>' could not be found (are you missing a using directive or an assembly reference?)
        // As far as I can tell I'm doing what I'm seeing on Google. Adding 'public static' gives me a bunch more error codes.
		List<char> vowels = new List<char> {"a","e","i","o","u"};
		foreach (char character in str)
		{
			if (vowels.Contains(character))
			{
				vowelCount++;
				//Console.WriteLine(vowelCount);
			}
		}
        return vowelCount;
    }
}


//Others didn't use lists at all, just a string "aeiou". Good to know. Still, I'd like to know how to use lists. 