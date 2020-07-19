const _ = require('lodash')
const array = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

const arr1 = _.slice(array)
const arr2 = _.slice(array, 0)
const arr3 = _.slice(array, 1, 5)
const arr4 = _.slice(array, -3, -2)
const arr5 = _.slice(array, -2, -3)
const arr6 = _.slice()

console.log('arr1', arr1)
console.log('arr2', arr2)
console.log('arr3', arr3)
console.log('arr4', arr4)
console.log('arr5', arr5)
console.log('arr6', arr6)