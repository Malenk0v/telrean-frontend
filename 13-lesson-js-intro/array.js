const arr = [1,2,3,`four`,`five`, true];

console.log(typeof(arr));
console.log(arr);
printArray(arr);
//arr[10] = 6;
arr[arr.length] = 10500

printArray(arr);
console.log(arr);

arr.length = 3;

function printArray(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
    console.log(`===============`);
}