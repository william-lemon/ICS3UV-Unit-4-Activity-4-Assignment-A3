/**
 * @autor William
 * @version 1.0.0
 * @date 2025-11-25
 * @fileoverview Program that checks if a searched word exists inside a sentence.
 */

const sentence: string = String(prompt("Please enter a sentence?"));
const word: string = String(prompt("Please enter a word to search for in your sentence?"));

// PROCESS: check if word is found
// Using includes() to see if the word exists anywhere in the sentence
if (sentence.includes(word)) {
  console.log(`Hooray, the word ${word} was found in the sentence: ${sentence}`);
} else {
  console.log(`Sorry, the word ${word} was not found in the sentence: ${sentence}`);
}

console.log("Done.");
