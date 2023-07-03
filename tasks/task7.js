// Using a for loop to count from 1 to 10
for (let i = 1; i <= 10; i++) {
  // to check if the current iteration is divisible by 2
  if (i % 2 === 0) {
    continue
  }
  console.log(i)
}

// Output :1 3 5 7 9
