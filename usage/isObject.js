const _ = require('lodash')
const result1 = _.isObject({})
const result2 = _.isObject(null)
const result3 = _.isObject(undefined)
const result4 = _.isObject(_.noop)
const result5 = _.isObject(1)

console.log('result1', result1)
console.log('result2', result2)
console.log('result3', result3)
console.log('result4', result4)
console.log('result5', result5)