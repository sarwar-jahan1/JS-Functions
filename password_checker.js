function checkPassword(password){
    let length=password.length;

    let reason=[];

    let hasUppercase=false;
    let hasNumber=false;

    let hasSpace=password.includes(" ");

    for(let i=0; i<length; i++){
        let character=password[i];
        // console.log(character);
        if(character >= '0' && character <= '9'){
            hasNumber=true;
        }
        if(character >= 'A' && character<='Z'){
            hasUppercase=true;
        }
    }
    // console.log(password,length ,hasNumber, hasUppercase);

    if(!hasNumber){
        reason.push("Missing number");
    }
    if(!hasUppercase){
        reason.push("Missing uppercase");
    }

    if(hasSpace === true){
        reason.push("Space found!!!")
    }


    let isValid=reason.length==0;

    return {
        valid: isValid,
        // reason:reason 
        reason,
    }
}

let output2=checkPassword("Hello1234");
console.log(output2);