// Iteration 1: Names and Input
//
let hacker1 = 'Fitipaldi';
let hacker2 = 'Oracle';

console.log("the driver's name is " + hacker1);
console.log("The navigator's name is " + hacker2);

// Iteration 2: Conditionals

let driverName = hacker1.length;
let navigatorName = hacker2.length;
if (driverName > navigatorName) {
    console.log(`The driver has the longest name, it has ${driverName} characters`);
} else if (driverName < navigatorName) {
    console.log(`It seems that the navigator has the longest name, it has ${navigatorName} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${navigatorName} characters!`);
}


// Iteration 3: Loops

// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"

let allCaps = '';
for (let i = 0; i < hacker1.length; i++) {
    allCaps += hacker1[i].toUpperCase() + ' ';
}
console.log(allCaps);

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"

function wordFlipper(hacker2) {
    let reverseName = '';
    for (let i = hacker2.length - 1; i >= 0; i--) {
        reverseName += hacker2[i];
    }
    return reverseName;
}
console.log(wordFlipper(hacker2));

/* 3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */

let allNames = [hacker1, hacker2];
allNames.sort();
if (allNames[0] === hacker1) {
    console.log("The driver's name goes first.");
} else {
    if (allNames[0] === hacker2) {
        console.log("Yo, the navigator goes first definitely.");
    } else if (hacker1 = hacker2) {
        console.log("What?! You both have the same name?")
    }
}
/* Bonus 1:
Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears. */

const loremWords = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let count = 0;
for (let i = 0; i < loremWords.length; i++) {
      
    if (loremWords[i] === ' ' && loremWords[i + 1] === 'e' && loremWords[i + 2] === 't' && loremWords[i + 3] === ' ') {
      count += 1;
    }
}
console.log(count);

/* Bonus 2:
Create a new variable phraseToCheck and have it contain some string value. 
Write a code that will check if the value we assigned to this variable is a Palindrome. */


const phraseToCheck = 'A man, a plan, a canal, Panama'.toLowerCase().replace(/[^a-zA-Z0-9]/g,'')
const phraseReverse = [...phraseToCheck].reverse().join('')
if (phraseToCheck === phraseReverse) {
    console.log("It's a palindrome")
} esle {
    console.log('Is not a palindrome')
}
