function blanderMachine(fruit){
    console.log('I received',fruit,'then convert juice');
}
// blanderMachine('MAngo');

function checkSumThenDoSomething(num1 , num2){
    let sum=num1+num2;
    if(sum%2===0){
        console.log('Yes, this is even number');
        console.log('I do something')
    }else{
        console.log('No,  this is odd number');
        console.log('I do something')
    }
}

// checkSumThenDoSomething(50,100);
// checkSumThenDoSomething(51,100);

// Return
function sumTwoNumberAndMultipyByFive(num1, num2){
    let sum=num1+num2;

    let result=sum*5;
    // console.log(result);
    if(result % 2===0){
        return result;
    }else{
        return "Sorry, This number is not even number . Please tyr again!"
    }
    // return result;
}
// let mainResult = sumTwoNumberAndMultipyByFive(2,2);
// let mainResult2 = sumTwoNumberAndMultipyByFive(3,2);
// console.log(mainResult , mainResult2);

function arrayAdd(arr){
    console.log(arr);
    let sum=0;
    for(let number of arr){
        sum=sum+number;
    }
    // console.log(sum);
    return sum;
}

// let arr=[5,4,6,3,1];
// let sumOfArray = arrayAdd(arr);
// console.log(sumOfArray);

// _____________Object___________

function countObjectProperty(obj){
    console.log(obj);
    let count=Object.keys(obj);

    console.log(count);
    console.log(count.length);
}

countObjectProperty({name:"Limon",age:22,roll:92})