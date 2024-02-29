import { appendFileSync } from 'node:fs';
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';

function generateUniqueID(firstName, lastName) {
    const uniqueID = uuidv4().replace(/-/g, '').slice(0, 8); // Generating unique alphanumeric string
    const id = `${firstName[0].toLowerCase()}${lastName.toLowerCase()}${uniqueID}`;
    return id;
}


//test

import { generateUniqueID, addAccount } from './index.js';

// Testing generateUniqueID function
console.log(generateUniqueID("Alan", "Turing"));

// Testing addAccount function
addAccount(["Alan", "Turing", "aturing@w3c.com", 58]);