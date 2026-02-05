function calcBill(prices , items){
    // console.log(prices,items);
    let total=0;

    for(let item in prices){
        let price=prices[item];
        // console.log(item,'->',price);
        total=total+price;
    }
    // console.log(total);

    let itemCount={};

    for(let item of items){
        // console.log(item);
        if(itemCount.hasOwnProperty(item)){
            itemCount[item]++;
        }else{
            itemCount[item]=1;
        }
    }
    // console.log(itemCount);

    return {
        total: total,
        // itemCount: itemCount,
        itemCount,
    }
}

let output=calcBill({pen: 10, book: 50}, ['pen', 'pen', 'book', 'pen']);
console.log(output);