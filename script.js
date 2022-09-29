
// STEP ONE (A)
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";

// STEP ONE (B)
console.log(warmHugs.toUpperCase());

// STEP ONE (C)
warmHugs = warmHugs.replace("like", "love");
console.log(warmHugs);
//TODO: Check this work. Not sure it's correct.

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
let newRandomNumber = Math.ceil((Math.random() * (23 - 6) + 6));
console.log(newRandomNumber);