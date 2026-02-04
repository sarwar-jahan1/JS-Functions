function analyzeMarks(markObj){
    let total=0;

    let heightMark=-Infinity;

    let lowestMark=Infinity;

    let heightSubject=null;
    let lowestSubject=null;


    for(let subject in markObj){
        let mark=markObj[subject];
        total=total+mark;
        if(mark>heightMark){
            heightMark=mark;
            heightSubject=subject;
        }

        if(mark<lowestMark){
            lowestMark=mark;
            lowestSubject=subject;
        }
    }

    // console.log("Height Mark ->",heightMark);
    // console.log("Lowest Mark ->",lowestMark);
    // console.log("HeightSubject ->",heightSubject);
    // console.log("LowestSubject ->",lowestSubject);

    let average=total/Object.keys(markObj).length;

    return {
        // total: total,
        // average: average,
        // heightSubject:heightSubject,
        // lowestSubject:lowestSubject
        total,
        average,
        heightSubject,
        lowestSubject
    }
}

let output=analyzeMarks({math:78, english:65, physics:88 , bangla:55});
console.log(output);