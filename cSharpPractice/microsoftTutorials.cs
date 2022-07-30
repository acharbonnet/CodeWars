Console.WriteLine("Hello World!");
string aFriend = "Bill Murray";
string anotherFriend = "Hank Green";
Console.WriteLine($"Hellow {aFriend} and {anotherFriend}!");
Console.WriteLine($"Collectively you have {aFriend.Length + anotherFriend.Length} letters in your names.");

string greeting = "                   Wow much space heck                 ";
string trimmedGreeting = greeting.TrimStart().TrimEnd();
Console.WriteLine($"{trimmedGreeting}");


string sayHello = "Hello World!";
Console.WriteLine(sayHello);
sayHello = sayHello.Replace("Hello","Goodbye");
Console.WriteLine(sayHello);

string songLyrics = "I have a record player that was made in 2014.";
Console.WriteLine(songLyrics.Contains("record player"));
Console.WriteLine(songLyrics.Contains("1905"));