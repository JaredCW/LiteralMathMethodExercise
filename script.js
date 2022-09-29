
// STEP ONE (A)
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

// STEP ONE (B)
console.log(warmHugs.toUpperCase());

// STEP ONE (C)
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);
//Instructor Review: This is most correct, as it stores the change for future use. Just using console.log w/ the string method is only temporary and mostly for testing purposes.

// STEP TWO (A)
let beenImpaled = "Oh, look at that. I've been impaled.";

// STEP TWO (B)
console.log(beenImpaled.slice(18));

// STEP THREE (A)
let dotDotDot = "...";

// STEP THREE (B)
let skullBones = `I don't have a skull${dotDotDot}or bones.`
// console.log(skullBones);

// STEP FOUR
console.log(Math.PI);

// STEP FIVE
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.ceil(randomNumber);
// console.log(randomNumber);

// BONUS

// STEP SIX
console.log(" Let It Go!".repeat(2).toUpperCase().trim());

// STEP SEVEN (A)
let reindeers = "Reindeers are better than people.";

// STEP SEVEN (B)
reindeers = reindeers.replace(/ /gi, "_");
console.log(reindeers);

// STEP EIGHT
console.log(Math.sqrt(2));
// Instructions stated "Display the decimal number". Did it mean everything PAST the decimal point?
// TODO: Check above and correct if needed.

// STEP NINE
let newRandomNumber = Math.floor((Math.random() * ((23 - 7 + 1)) + (7)));
/* 
Notes on Step Nine Logic:
The goal is to have a RNG with a range of 7-23.

let variableName = Math.floor((Math.random() * (MaxNumber - MinNumber + 1) + (MinNumber)));

- Floor is better than round or ceil; probability distribution is even, where the others are weighted
- The extra "+1" so you don't have 0 answers (or something outside of the range, IE - 6)
- Fun fact: All these numbers can be replaced with variables that carry the necessary value!

*/
console.log(newRandomNumber);