//per installare npm
// npm init -y per installare npm con dati di default
// npm init per decidere i dati dell'installazione

const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);
