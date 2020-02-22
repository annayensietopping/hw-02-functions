/***********
Problem: Blackjack

Create a function named `blackJack()` that accepts two parameters:
playerCardScore (number)
dealerCardScore (number)

Return whichever value is nearest (or equal) to 21 without going over. Return 0 if both scores go over 21.

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. blackJack(19, 21)

   Result: 21

2. blackJack(22, 22)

   Result: 0

3. blackJack(19, 22)

   Result: 19

3. blackJack(21, 21)

   Result: 21

************/
console.log("Problem 1:");

// Add your code below this line

let playerCardScore;
let dealerCardScore;

function blackJack(playerCardScore, dealerCardScore) {
  // eliminates card over 21, returns remaining if under 21
  if (playerCardScore > 21 && dealerCardScore <= 21) {
    return "Result: " + dealerCardScore;
  } else if (playerCardScore <= 21 && dealerCardScore > 21) {
    return "Result: " + playerCardScore;

    // 	if both are over 21 returns 0
  } else if (playerCardScore > 21 && dealerCardScore > 21) {
    return "Result: 0";
  }

  // returns closer card if both under 21
  else if (21 - playerCardScore <= 21 - dealerCardScore) {
    return "Result: " + playerCardScore;
  } else if (21 - playerCardScore >= 21 - dealerCardScore) {
    return "Result: " + dealerCardScore;

    // returns value if same
  } else if (playerCardScore === dealerCardScore) {
    return "Result: " + playerCardScore;
  } else {
    return "Result: 0";
  }
}

console.log(blackJack(21, 21));

// Add your code above this line

/** added for formatting purposes **/
console.log("");
console.log("-----------------");

/***********
Problem: Scrabble Scorer

Create a function named `scrabbleScore()` that accepts a parameter called "word". The function should use the following table to calculate the Scrabble score of a provided word:

```
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. scrabbleScore("cabbage")
   Note: c = 3, a = 1 (twice), b = 3 (twice), g = 2, e = 1

   Expected Result: 14

2. scrabbleScore("javascript")

   Expected Result: 24

3. scrabbleScore("function")

   Expected Result: 13

************/
console.log("Problem 2:");

// Add your code below this line

// function scrabbleScore(word) {
// 	let wordArr = word.split("");
// 	console.log(wordArr);
// 	let totalScore = 0;
//
// 	for (let i = 0; i < wordArr.length; i++) {
// 		switch (wordArr[i].toUpperCase()) {
// 			case "A":
// 			case "E":
// 			case "I":
// 			case "O":
// 			case "U":
// 			case "L":
// 			case "N":
// 			case "R":
// 			case "S":
// 			case "T":
// 				totalScore += 1;
// 				break;
// 			case "D":
// 			case "G":
// 				totalScore += 2;
// 				break;
// 			case "B":
// 			case "C":
// 			case "M":
// 			case "P":
// 				totalScore += 3;
// 				break;
// 			case "F":
// 			case "H":
// 			case "V":
// 			case "W":
// 			case "Y":
// 				totalScore += 4;
// 				break;
// 			case "K":
// 				totalScore += 5;
// 				break;
// 			case "J":
// 			case "X":
// 				totalScore += 8;
// 				break;
// 			case "Q":
// 			case "Z":
// 				totalScore += 10;
// 				break;
// 			default:
// 				break;
// 		}
// 		console.log(wordArr[i], totalScore);
// 	}
// 	return totalScore;
// }
//
// console.log(scrabbleScore("javascript"));

// Add your code above this line

/** added for formatting purposes **/
console.log("");
console.log("-----------------");

/***********
Problem: Palindromes

Palindromes are words which read the same forward as backwards. For example, "madam" and "noon" are both palindromes.

Create a function named `isPalindrome()` that accepts a parameter called "word". The function will return true if the word is a palindrome and false if it is not.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. isPalindrome("noon")

   Expected Result: true

2. isPalindrome("racecar")

   Expected Result: true

3. isPalindrome("moon")

   Expected Result: false

4. isPalindrome("run")

   Expected Result: false

************/
console.log("Problem 3:");

// Add your code below this line

function isPalindrome(word) {
  wordArr = word.split("");

  wordArr.reverse();

  let reverseWord = wordArr.join("");

  console.log(word);
  console.log(reverseWord);

  if (word === reverseWord) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("run"));

// Add your code above this line

/** added for formatting purposes **/
console.log("");
console.log("-----------------");

/***********
Problem: Double Letter Checker

Create a function that takes a "word" as a parameter and returns true if the word has two consecutive identical letters.

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. doubleLetters("loop")

   Expected Result: true

2. doubleLetters("rune")

   Expected Result: false

3. doubleLetters("apple")

   Expected Result: true

************/
console.log("Problem 4:");

// Add your code below this line

function hasDoubleLetter(word) {
  const letters = word.split("");
  console.log(letters);
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === letters[i + 1]) {
      return "Expected Result: " + true;
    }
  }
  return "Expected Results: " + false;
}

console.log(hasDoubleLetter("apple"));

// Add your code above this line

/** added for formatting purposes **/
console.log("");
console.log("-----------------");

/***********
Problem: Word Counter

Create a function named `wordCount()` that accepts a parameter called "phrase" which counts the number of occurrences of each word in that phrase

For example, the phrase: "olly olly in come free" should result in output that looks similar to the following:

```
olly: 1
in: 1
come: 1
free: 1
```

Feel free to add any additional functions or variables you deem necessary to meet the above requirements

Test Cases:
Use the following test cases to confirm your program meets the success criteria

1. wordCount("olly olly in come free")

   Result:

   olly: 2
   in: 1
   come: 1
   free: 1

2. wordCount("Baby shark, doo doo doo doo doo doo")

   Result:

   baby: 1
   shark: 1
   doo: 6

3. wordCount("Humpty Dumpty sat on a wall Humpty Dumpty had a great fall")

   Result:

   humpty: 2
   dumpty: 2
   sat: 1
   a: 2
   on: 1
   fall: 1
   great: 1
   had: 1
   wall: 1
************/
console.log("Problem 5 - bonus:");

// Add your code below this line

let phrase = "Humpty Dumpty sat on a wall Humpty Dumpty had a great fall";

// loop to examine each word in phrase, perhaps make an array?
// save first word - 1
// if already exists, add 1

function wordCount(phrase) {
  const words = phrase.split(" ");

  const counts = {};
  words.forEach(word => {
    if (counts[word] !== undefined) {
      counts[word] = 0;
    }

    counts[word]++;
  });

  Object.keys(counts).forEach(word => {
    console.log(`${word}: ${counts[word]}`);
  });
}

let words = phrase.split(" ");
console.log(words);

words.forEach(element => {
  if ((element = "undefined")) {
    return `${element}: 1`;
  } else {
    return `${element}: `
  }
});

// Add your code above this line

/** added for formatting purposes **/
console.log("");
console.log("-----------------");
