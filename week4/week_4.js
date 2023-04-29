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

let averageArrayAge = array => array.reduce((x, y) => x + y, 0) / array.length
console.log(averageArrayAge(ages))

// SOLUTION FOR #2a

    // Creating names array, nameLengths array to hold lengths of each name

    let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'] 
    let lengthOfNames = []

    // Iterate through names, count number of letters in each name, push to nameLengths array

    for(let name of names) {
        lengthOfNames.push(name.length)
    }

    // array.reduce method sums numbers in the nameLengths array, sum is divided by the number of array elements, average length of each names is returned

    let averageLengthOfNames = array => array.reduce((x, y) => x + y, 0) / array.length

    console.log(averageLengthOfNames(lengthOfNames))

// SOLUTION FOR #2b
    console.log(names.join(' '))

// SOLUTION FOR #3
    // array[array.length - 1]

// SOLUTION FOR #4
    // array[0]

// SOLUTION FOR #5

    // Creating nameLengths array
    let nameLengths = []

    // Iterating through names, counting number of letters in each name, pushing to nameLengths array
    
    for(let name of names) {
        nameLengths.push(name.length)
    }

    console.log(nameLengths)

// SOLUTION FOR #6
    // array.reduce method sums numbers in the nameLengths array. "x" represents the accumulated sum and "y" represents the current element's value.

        let sumOfNameLengths = nameLengths.reduce((x, y) => x + y, 0)
        console.log(sumOfNameLengths)

// SOLUTION FOR #7
    // arrow function using the built-in string.repeat() JS method
    let multiplyWord = (word, n) => word.repeat(n)
        
    console.log(multiplyWord('Cool', 7))

// SOLUTION FOR #8
    let fullName = (firstName, lastName) => firstName + ' ' + lastName

    console.log(fullName('Suki', 'Waterhouse'))

// SOLUTION FOR #9
    let numArray = [35, 8, 87, 2, 10, 1]
         
    // array.reduce method sums numbers in the numArray array
    // if else statement checks if condition is true or false
    
    function trueDat (array) {
        let sumOfArray = array.reduce((x, y) => x+ y, 0)
        
        if (sumOfArray >= 100) {
        console.log('True dat')
        } else {
            console.log('False dat')
        }
    }

    trueDat(numArray)

// SOLUTION FOR #10
    // array.reduce method sums numbers in the numArray array
    // sum is divided by the number of array elements, returns average value of elements
    // reusing array from #9

    let numAverage = array => array.reduce((x, y) => x + y, 0) / array.length
        
    console.log(numAverage(numArray))

// SOLUTION FOR #11
    // Reusing numAverage function written in #11, then comparing values with an if else statement

    let numArray1 = [9, 45, 0, 11, 8]
    let numArray2 = [4, 6, 17, 20, 7]

    let numAverage1 = numAverage(numArray1)
    let numAverage2 = numAverage(numArray2)

    function compareAverages (array1, array2) {
        let numAverage1 = numAverage(array1)
        let numAverage2 = numAverage(array2)
        
        if (numAverage1 > numAverage2) {
            console.log(true)
        } else {
            console.log(false)
        }
    }
   compareAverages(numArray1, numArray2)

// SOLUTION FOR #12

    // Series of conditional statements
    function willBuyDrink (isHotOutside, moneyInPocket) {
        if (isHotOutside >= 80 && moneyInPocket > 10.50) {
            true
            console.log('Drinks on me!')
        } else if (isHotOutside >= 80 && moneyInPocket < 10.50) {
                console.log('Will you buy me a drink?')
        } else if (isHotOutside < 80 && moneyInPocket > 10.50){
                console.log('Hot chocolate on me!')
        } else {
            console.log('It is cold and I am not thirsty anyway!')
        }
    }

    willBuyDrink(65,6)

// SOLUTION FOR #13
    // This is a function that determines whether I can take a break from work and play fetch with my dogs. I work at home and often lose track of time.

    function playFetch (hoursSitting, foundBall) {
        if (hoursSitting >= 2 && foundBall >= 1) {
            console.log('Time for fetch!')
        } else if (hoursSitting <= 2 || foundBall <= 1) {
            console.log('No fetch yet!')
        } 
    }

    playFetch(2, 1)

