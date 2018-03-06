//Benedikte use map and filter first Disse har jeg tilføjet med ren brug af map  da Oliver havde glemt at lave den
var numbers = [1, 3, 5, 10, 11];

console.log(numbers.map(cbAll));


////-------------- Map ----------------------
//Oliver Here are two different ways of solving the exercise
let numbers2 = [1, 3, 5, 10, 11];

function cbAll(number,index,arr){
    if(index < arr.length-1){
        return number+arr[index+1];
    } else {
        return number;
    }
    }
//Benedikte Olivers index bruges ikke her 
function myMap(arr,cb,index){
    var returnValue = [];

    for(var i=0; i<arr.length; i++){
        let val = cb(arr[i],i,arr);
        returnValue.push(val);
    }
   
    return returnValue;
}

let res2 = myMap(numbers2,cbAll);
console.log(res2);

// Filter result
res3 = res2.filter((n)=> n<15);
console.log(res3);