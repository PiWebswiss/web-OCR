// Obfuscating is not secure, it's just used to make it harder for users to copy the key easily.

// Your original API key
const apiKey = "helloworld";

// Encode the API key to Base64
const encodedKey = btoa(apiKey);

console.log("Base64 Encoded API Key: ", encodedKey);

// Decoding the Base64 encoded API key
const decodedKey = atob(encodedKey);

console.log("Decoded API Key: ", decodedKey);

/* 
Run code using CMD and node.js
- use: node js-obfuscators
*/