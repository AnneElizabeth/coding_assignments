// Anne Edmondson
// 2023-03-30-fe-mountain
// Week 4 Coding Assignment

// Solution for #1

// Create ages array
let ages = [3, 9, 23, 64, 2, 8, 28, 93]

// Function to substract first element of the array from the last
let subtractAge = function (ages) {
    return (ages[ages.length - 1]) - ages[0]
}
console.log(subtractAge(ages))

// Adding new value to array to test dynamic function
ages.push(111)
console.log(subtractAge(ages))

// Finding average age in the array by using the array.reduce method to sum all the numbers in the array and then dividing that sum by the number of elements in the array

let averageArrayAge = array => array.reduce((x,y) => x + y, 0) / array.length
console.log(averageArrayAge(ages))
