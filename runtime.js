const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

/* 
tinyarray: insert takes 2.291 μs
tinyarray: append takes 3.25 μs

smallArray: insert takes 5.917 μs
smallArray: append takes 4.083 μs

mediumArray: insert takes 99.291 μs
mediumArray: append takes 29.667 μs

largeArray: insert takes 6.274375 ms
largeArray: append takes 287.958 μs

extraLargeArray: insert takes 776.881042 ms
extraLargeArray: append takes 2.563167 ms

You can see here that the insert approach is growing exponentially. 
By the time the array is a large array, it already is exponentially larger than the append approach. 
This clearly indicates it is an O(n^2) whereas the append approach is O(n).

The reason for this must be that each time the array gets longer in unshift, the unshift method has more numbers to move. 
For example, unshifting an array with a length of 10 will have to move 10 numbers. Then, when you add a number to it, 
it will again have to move those same 10 numbers and also move the new number.
 */



// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
var resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
var resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords); 
console.log("append", resultsAppend.preciseWords);

perf.start();                     // Starts timer
doublerAppend(tinyArray);
resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(tinyArray);
resultsInsert = perf.stop();


console.log('Results for the tinyArray');
console.log("insert", resultsInsert.preciseWords); 
console.log("append", resultsAppend.preciseWords);

perf.start();                     // Starts timer
doublerAppend(smallArray);
resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(smallArray);
resultsInsert = perf.stop();


console.log('Results for the smallArray');
console.log("insert", resultsInsert.preciseWords); 
console.log("append", resultsAppend.preciseWords);


perf.start();                     // Starts timer
doublerAppend(mediumArray);
resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(mediumArray);
resultsInsert = perf.stop();


console.log('Results for the mediumArray');
console.log("insert", resultsInsert.preciseWords); 
console.log("append", resultsAppend.preciseWords);

perf.start();                     // Starts timer
doublerAppend(largeArray);
resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
resultsInsert = perf.stop();


console.log('Results for the largeArray');
console.log("insert", resultsInsert.preciseWords); 
console.log("append", resultsAppend.preciseWords);



