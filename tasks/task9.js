const names = ['Matrix', 'Prosper', 'Clementify', 'Taiwo', 'Precious']

// forEach()
console.log('Using forEach():')
names.forEach((name) => {
  console.log(`Hello, ${name}! Any plans for today?`)
})

// map()
console.log('\nUsing map():')
const nameLengths = names.map((name) => {
  return name.length
})
console.log(nameLengths) // Output:6, 7, 10, 5, 8

// filter()
console.log('\nUsing filter():')
const longNames = names.filter((name) => {
  return name.length > 6
})
console.log(longNames) // Output: 'Prosper', 'Clementify', 'Precious'
