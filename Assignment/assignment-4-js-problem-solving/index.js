//----------- Problem 01: Let’s play a mind game --------------

// mindGame function which take input positive number.now need to multiply that number by 3, then add 10, then divide by 2, then subtract 5, and return the output.

function mindGame(positiveNumber){

    const multiplicationResult = positiveNumber * 3;
    const additionResult = multiplicationResult + 10;
    const divisionResult = additionResult/2;
    const subtractionResult = divisionResult - 5;

    if(typeof(positiveNumber) === 'number'){
        return subtractionResult;
        
    }
    else {
         //error message
        let errorSMS = 'Please Provide Valid Number';
        return errorSMS;
    }
}
// let output = mindGame(50);
// console.log(output);



//----------- Problem 2: Finding even or odd --------------

// evenOdd function which take input as a string. now the output given based on the total number of characters of that string.Output will be 'even' or 'odd'

function evenOdd(x) {
    // x is input parameter
    // validation for string
    if (typeof (x) === 'string') { 
        // string length count
        let length = x.length;
        // condition part for odd even 
        if (length%2===0) {
            let even = 'even';
            return even;
        }

        //odd part 
        else {
            let odd = 'odd';
            return odd;
        }
    }
    else {
        //error message
        let errorSMS = 'Please Enter string';
        return errorSMS;
    }
}

// let output = evenOdd('chatgpt');
// console.log(output);


// //----------- Problem 3: Is Less or Greater than seven --------------

// isLGSeven function take input as a number.now need to find the difference between the input value and 7. If this difference is smaller than 7,must return the subtraction. Otherwise must return double of the input.

function isLGSeven(numbers) {
    //validation
    if (typeof numbers !== 'number') {
        return "Enter valid Number!"
    }

    if (numbers < 7) {
        const sub = numbers - 7;
        return sub;
    }
    else {
        const result = 2 * numbers;
        return result;
    }
    
}
// let output = isLGSeven(-15);
// console.log(output);



// //----------- Problem 4: Finding Bad data --------------

// findingBadData function take input a array.Any number of numbers will be in the array.Numbers can be negative numbers (less than zero) and positive numbers (greater than or equal to zero). which called "Bad data" & "Good Data".now How many bad data are there in the array and must return that number.

function findingBadData(array) {
    //validation-start
    if (Array.isArray(array) !== true) {
        return "Please Enter Array!"
    }
    //validation-end
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < 0) {
            newArray.push(element);

        }
    }
    return newArray.length;
}

// let array = [2, -5, -7, -13]
// let output = findingBadData(array);
// console.log(output);



// //----------- Problem 5: Convert your gems into diamond --------------

// gemsToDiamond function take 3 input as number of 3 friends gems number.Now find out how many diamonds get in total by combining the gems of 3 friends.If the number of total diamond is over twice 1000, then subtracting 2000 from the total diamond.must return diamonds number after subtracting 2000.Otherswise return totalDiamond.

function gemsToDiamond(firstFriendGem, secondFriendGem, thirdFriendGem) {
    //for find all number value
    let valuesDefine = firstFriendGem + secondFriendGem + thirdFriendGem;
    // condition for Number value or not 
    if (typeof (valuesDefine) === 'number') {
        // total sum part
        const firstFriendGemPower = 21;
        const secondFriendGemPower = 32;
        const thirdFriendGemPower = 43;
    
        const firstFriendDimond = firstFriendGem * firstFriendGemPower;
        const secondFriendDimond = secondFriendGem * secondFriendGemPower;
        const thirdFriendDimond = thirdFriendGem * thirdFriendGemPower;
        // total value
        let totalDimond = firstFriendDimond + secondFriendDimond + thirdFriendDimond;
        //  diamond compare of 1000 * 2 
        if (totalDimond >= (1000 * 2)) {
            //  diamond minus of 1000 * 2 
            let sum = totalDimond - (1000 * 2);
            return sum;
        }
        // other wise output
        else if (totalDimond < (1000 * 2)) {
            return totalDimond;
        }
    }
    else {
    //error message
        let errorSMS = 'Please Enter Valid Number';
        return errorSMS;
    }
}

// let output = gemsToDiamond(100, 5, 1);
// console.log(output);
