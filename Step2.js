// 1) Sum Zero

function truthDetector(numArray){
    if (numArray.length < 2) {
        console.log("Going to return false")
        return false
    }
    else {
        var n = 0
        while (n <= numArray.length) {
            var checkThis = numArray[n] * -1
            if (numArray.includes(checkThis)) { 
                return true 
            }
            n += 1
        }
    
    console.log("Made it to the end!")
    return true }
    }

truthDetector([1])


truthDetector([1,2,3,4])
truthDetector([2,3,4,5,-2])

// 2) Unique Characters

function unique(word){
    return new Set(word).size == word.length
}

console.log(unique('abc'))
console.log(unique('AAA'))

// 3) Pangram Sentence 

function pangram(sentence) {
    var regex = /([a-z])(?!.*\1)/g;
    return (sentence.match(regex) || []).length === 26;
}

console.log(pangram("parker"))
console.log(pangram("The quick brown fox jumps over the lazy dog! I can't believe this works!"))


// 4) Longest word

function findLongestWord(wordArray){
    var lengths = []
    wordArray.forEach(word => {
        lengths.push(word.length)
    })
    console.log((lengths))
    return Math.max(lengths)
    ;
}

findLongestWord(["hi", "hello", "veryLongHellllloooooo"])