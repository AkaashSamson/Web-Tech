//import * as fs from 'node:fs/promises';
const fs = require('fs').promises;

// fs.writeFile('hello.txt', 'Hello from Node JS!', (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
// });

//read from file hello.txt and console log the text
async function readFile() {
    try {
        const data = await fs.readFile('hello.txt', 'utf-8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readFile();