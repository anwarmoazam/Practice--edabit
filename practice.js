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
            if(subArr.includes('7',0)){
                return 'Boom!';
            }
        } else if(arr[i]===7)
            return 'Boom!';
    }
    return "there is no 7 in the array";
}

function sevenBoom2(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i].toString().length>1){
            let subArr = [...arr[i].toString()].map((x)=>Number(x));
            for(let j=0;j<subArr.length;j++){
                if(subArr[j]===7){
                    return 'Boom!';
                }
            }
        } else if(arr[i]===7)
                return 'Boom!';
    }
    return "there is no 7 in the array";
}


console.log(sevenBoom2([172, 3, 4, 5, 6857]));
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

/*
Combinations
Create a function that takes a variable number of arguments, each argument representing the number of items in a group, and returns the number of permutations (combinations) of items that you could get by taking one item from each group.

Examples
combinations(2, 3) ➞ 6

combinations(3, 7, 4) ➞ 84

combinations(2, 3, 4, 5) ➞ 120
*/

function combinations(){
    let result = [];
    for(let i=0; i<arguments.length; i++){
        result.push(arguments[i]);
    }
    return result.reduce((acc, curr) => {return acc * curr;});
}

console.log(combinations(4,4,3));

// function allTruthy(arr) {
//     for(let i=0; i<arr.length; i++) {
//         if(arr[i] !== true){
//             return false;
//         } else {
//             return true;
//         }
//     }
// }  


function allTruthy() {
    for(let i=0; i<arguments.length; i++){
        if(arguments[i] == false){
            return false;
        }
    }
    return true;
}

// console.log(allTruthy(true, true, true));
// console.log(allTruthy(true, true, false));

function allTruthy1(arr) {
    for(let i=0; i<arr.length; i++){
        if(arr[i] == false){
            return false;
        }
    }
    return true;
}

console.log(allTruthy1([true, true, true]));
console.log(allTruthy1([true, true, false]));
console.log(allTruthy1([false, true, true, true]));

