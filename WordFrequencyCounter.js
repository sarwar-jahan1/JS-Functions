function wordFrequency(sentence){
    // Convert sentence to array
    let words=sentence.split(" ");

    let wordsCount={};

    // Check the age property are here in this object or not
    // console.log(wordsCount.hasOwnProperty("age"));

    // console.log(words);
    for(let word of words){
        // console.log(word);
        let wordLowerCase=word.toLowerCase();
        if(wordsCount.hasOwnProperty(wordLowerCase)){
            // wordsCount[word]=wordsCount[word]+1;
            wordsCount[wordLowerCase]++;
        }else{
            wordsCount[wordLowerCase]=1;
        }
    }
    return wordsCount;
}

let output=wordFrequency('I Love JS and I Love Coding and JS is fun');
console.log(output)