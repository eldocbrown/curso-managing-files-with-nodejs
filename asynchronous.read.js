

const { convertCsv } = require('./csv.parse.js');

const { readFile } = require('fs');

readFile('./data/pulitzer-circulation-data.csv', 'utf-8', (err, data) => {
    if (err) {
        console.log(`Error al leer el archivo: ${err}`);
        return;
    }
    
    const vals = convertCsv(data);

    console.table(vals);
});