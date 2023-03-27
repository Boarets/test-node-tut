// Modules - Encapsulated code (only share minimum)
// CommonJS, every file  is module (by default)

const names = require('./4-names');

const sayHi = require('./5-utils');

const data = require('./6-alternative-flavor');

require('./7-mind-grenade')



// sayHi('Michele')
// //per far leggere alla funzione i nomi, è necessario destrutturare names
// sayHi(names.sara)
// sayHi(names.micia)