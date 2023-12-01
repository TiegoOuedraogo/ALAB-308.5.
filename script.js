//Take an array of numbers and return the sum.
function sumArray(arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum
}

let arr = [2,3,4,5,8];
let result =  sumArray(arr)
console.log(result)

function sumOfNum(num){
    let sum=0;
    let i =0;
    while(i<num.length){
        sum +=num[i];
        i++;
    }
    return sum;
}

let ArrNumbers = [2,3,4,5,8,9];
let total =  sumOfNum(ArrNumbers)
console.log(total)

function arrSum(numbers){
    let total =0;
    for(let number of numbers){
        total +=number
    }
    return total
}

let arrayNum = [2,3,4,5,8,10];
let sum =  arrSum(arrayNum)
console.log(sum)