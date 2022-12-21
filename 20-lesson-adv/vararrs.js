const sum = function(a, b, ...rest){
    console.log(arguments);
    console.log(rest);
    let res = a + b;
    for(let i = 0; i < rest.length; i++){
        res += rest[i];
    }
    return res;
    //Масива аргументса нет у стрелочный функции
}    

const res = sum(3,4,5);
console.log(res);