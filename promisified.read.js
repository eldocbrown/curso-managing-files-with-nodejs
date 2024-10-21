const { convertCsv } = require('./csv.parse');

const fs = require('fs');

const { promisify } = require('util');

const readFile = promisify(fs.readFile);

// Async - Await
const read = async () => {
    const data = await readFile('./data/pulitzer-circulation-data.csv', 'utf-8');

    console.table(convertCsv(data));
};

read();

//Promises
readFile('./data/pulitzer-circulation-data.csv', 'utf-8')
    .then(data => console.table(convertCsv(data)))
    .catch(error => console.log(`Error al leer el archivo: ${error}`));