// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// if more than one longest word, put into an array
// ex. longestWord('Hello, my name is brad') == 'hello'
// ex. longestWord('Hello there, my name is Brad') == ['hello, there']
function longestWord(sen){
    // Create filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

    // Sort by length
    const sorted = wordArr.sort((a,b) => b.length - a.length);
    
    // If multiple words, put into array
    const longestWordArr = sorted.filter((word) => word.length === sorted[0].length);
    
    // Check if more than one array val
    if(longestWordArr.length === 1){
        // Return the Word
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }
}

// Call Function
//const output = longestWord('Hello there, my name is Brad');
//console.log(output)


// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1,2,3,4,5,6,7], 3) === [[1,2,3], [4,5,6], [7]]
// ex. chunkArray([1,2,3,4,5,6,7], 2) === [[1,2],[3,4],[5,6],[7]]
function chunkArray(arr, len){
    /** Solucion 1 */
    /*
    // Init chunked arr
    const chunkedArr = [];
    // set index
    let i = 0;
    // Loop while index is less than the array length
    while(i < arr.length){
        // Slice out from the index to the index + the chunk length nd push on to the chunked array
        chunkedArr.push(arr.slice(i, i + len));
        // Increment by chunk length
        i += len;
    }
    return chunkedArr;
    */

    /** Solucion 2 */
    // Init chunked arr
    const chunkedArr = [];
    // Loop through arr
    arr.forEach((val) => {
        // Get last element
        const last = chunkedArr[chunkedArr.length - 1];
        // Check if last and if last length is equal to the chunklen
        if(!last || last.length === len){
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    });
    return chunkedArr;    
}

// Call Function
//const output = chunkArray([1,2,3,4,5,6,7], 3);
//console.log(output)


// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1,2], [3,4], [5,6], [7]] = [1,2,3,4,5,6,7]
function flattenArray(arrays){}

// Call Function
const output = flattenArray([[1,2], [3,4], [5,6], [7]]);
console.log(output)

// 20:44