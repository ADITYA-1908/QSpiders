// password.js
const crypto = require('crypto');
const fs = require('fs');
const readline = require('readline');

// Encryption settings
const algorithm = 'aes-256-cbc';
const secretKey = crypto.randomBytes(32); // For demo only; store securely in real use
const iv = crypto.randomBytes(16);        // Initialization vector

// Readline interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Encrypt function
function encrypt(text) {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    const encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher.final()]);
    return encrypted.toString('hex');
}

// Decrypt function
function decrypt(encryptedText) {
    const encryptedBuffer = Buffer.from(encryptedText, 'hex');
    const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
    const decrypted = Buffer.concat([decipher.update(encryptedBuffer), decipher.final()]);
    return decrypted.toString();
}

// Ask for user input
rl.question('Enter the password you want to store securely: ', (inputPassword) => {
    const encrypted = encrypt(inputPassword);

    // Save to file
    fs.writeFileSync('password.txt', encrypted);
    console.log('\n Encrypted password saved to password.txt');

    // Read and decrypt
    const fromFile = fs.readFileSync('password.txt', 'utf-8');
    const decrypted = decrypt(fromFile);

    console.log(`\n Your decrypted password is: ${decrypted}`);
    rl.close();
});
