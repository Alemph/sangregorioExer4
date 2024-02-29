import { appendFileSync } from 'node:fs';
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';

function generateUniqueID(firstName, lastName) {
    const uniqueID = uuidv4().replace(/-/g, '').slice(0, 8); // Generating unique alphanumeric string
    const id = `${firstName[0].toLowerCase()}${lastName.toLowerCase()}${uniqueID}`;
    return id;
}

function addAccount(userData) {
    const [firstName, lastName, email, age] = userData;
    
    if (!firstName || !lastName || !email || !age) {
        console.log("All fields are required.");
        return;
    }

    if (typeof firstName !== 'string' || typeof lastName !== 'string' || typeof email !== 'string' || typeof age !== 'number') {
        console.log("Invalid data types.");
        return;
    }

    if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '') {
        console.log("First name, last name, and email cannot be empty.");
        return;
    }

    if (!validator.isEmail(email)) {
        console.log("Invalid email format.");
        return;
    }

    if (age < 18) {
        console.log("Age must be at least 18.");
        return;
    }

    const uniqueID = generateUniqueID(firstName, lastName);
    const userDataString = `${firstName},${lastName},${email},${age},${uniqueID}\n`;
    
    appendFileSync('users.txt', userDataString, 'utf8');
    console.log("Account added successfully.");
}

export { generateUniqueID, addAccount };
