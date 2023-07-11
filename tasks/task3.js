// Creating an object with personal information
const personalInfo = {
  name: 'Akaza',
  age: 3000,
  city: 'Tokyo',
  occupation: 'Upper Three'
}

// Using a "for...in" loop to iterate over the object
for (const item in personalInfo) {
  console.log(item + ': ' + personalInfo[item])
}

// Output
// name: Akaza
// age: 3000
// city: Tokyo
// occupation: Upper Three
