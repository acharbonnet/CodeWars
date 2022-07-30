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

int a = 16;
int b = 3;

int c = a / b;
float cRemainder = a % b;

Console.WriteLine($"quotient:{c}, remainder:{cRemainder}");

int max = int.MaxValue;
int min = int.MinValue;
Console.WriteLine($"The range of integers is {min} to {max}");

int what = max + 3;
Console.WriteLine($"An example of overflow: {what}");

double a = 16;
double b = 3;
double c = a / b;
Console.WriteLine(c);

double max = double.MaxValue;
double min = double.MinValue;
Console.WriteLine($"The range of double is {min} to {max}");

float floatmax = float.MaxValue;
float floatmin = float.MinValue;
Console.WriteLine($"The range of float is {floatmin} to {floatmax}");

decimal decimalmax = decimal.MaxValue;
decimal decimalmin = decimal.MinValue;
Console.WriteLine($"The range of decimal is {decimalmin} to {decimalmax}");

int i = 0;
while (i < 10)
{
   Console.WriteLine($"Howdy! The counter is currently {i}");
   i++;
}

var names = new List<string> {"Roland Of Giliad", "Susan of New York","Eddie of New York", "Jake of New York"};
names.Add("Oy of Mid-world");
foreach (var name in names)
{
    Console.WriteLine($"Hello {name}, it is well.");
}

var fibonacciNumbers = new List<int> {1,1};
int i = 0;
while (i < 10)
{
    var previous = fibonacciNumbers[fibonacciNumbers.Count - 1];
    var previous2 = fibonacciNumbers[fibonacciNumbers.Count - 2];
    fibonacciNumbers.Add(previous + previous2);
    Console.WriteLine(previous + previous2);
    i++;
}
