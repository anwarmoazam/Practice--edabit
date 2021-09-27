// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"
// 7 contains the number seven.

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"
// None of the items contain 7 within them.

// sevenBoom([2, 55, 60, 97, 86]) ➞ "Boom!"
// 97 contains the number seven.

function sevenBoom(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].toString().length>1){
            let subArr = [...arr[i].toString()];
            console.log(subArr);
            if(subArr.includes('7',0)){
                return 'Boom!';
            }
        } else if(arr[i]===7)
            return 'Boom!';
    }
    return "there is no 7 in the array";
}


// console.log(sevenBoom([2, 3, 4, 5, 6857]));
// console.log(sevenBoom([8, 6, 33, 105415415407]));
// console.log(sevenBoom([2, 55, 60, 97, 86]));
// console.log(sevenBoom([2, 55, 7, 60, 9, 758]));



// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

function oddishOrEvenish(value){
    let result = Array.from(value.toString()).reduce((acc,curr)=>Number(acc)+Number(curr));
    if(result%2===0){
        return 'Evenish';
    }
    return 'Oddish';
}

console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));
console.log(oddishOrEvenish(121));
console.log(oddishOrEvenish(41));
