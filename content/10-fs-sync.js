const {readFileSync, writeFileSync} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// console.log(first);
// console.log(second);
// console.log(first, second);

writeFileSync(
    './content/result-sync.txt',
    `Here's the result: ${first}, ${second}`, //senza la seguente riga di codice, elimina il contenuto e scrive ciò che gli indico
    {flag: 'a'}
)
