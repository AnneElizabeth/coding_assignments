// Anne Edmondson
// 2023-03-30-fe-mountain
// Week 4 Coding Assignment

// SOLUTION FOR #1

// Creating ages array
let ages = [3, 9, 23, 64, 2, 8, 28, 93]

// Function to substract first element of the ages array from the last
let subtractAge = function (array) {
    return (array[array.length - 1]) - array[0]
}
console.log(subtractAge(ages))

// Adding new value to ages array using the array.push method and re-calling the subtractAge function to confirm that it is dynamic

ages.push(111)
console.log(subtractAge(ages))

// Finding average age in the ages array
// Using the array.reduce method to sum all the numbers in the array. "x" represents the accumulated sum and "y" represents the current element's value.
// Dividing that sum by the number of elements in the array

let averageArrayAge = array => array.reduce((x,y) => x + y, 0) / array.length
console.log(averageArrayAge(ages))

// SOLUTION FOR #2

// Creating names array
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']


// SOLUTION FOR #3
// array[array.length - 1]

// SOLUTION FOR #4
// array[0]

// SOLUTION FOR #5

// Creating nameLengths array
let nameLengths = []

// Creating function to determine the length of each name
function lengthOfNAme = 

// Calling function on each element in the names array and pushing the resulting value to the new nameLengths array
names.forEach(lengthOfName)
