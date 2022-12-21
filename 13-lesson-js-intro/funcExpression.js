const greeting = (name) => {
    console.log(`Hello ${name}`);
}

greeting(`John`);
console.log(`===========`);

let x = 5;


const pow3 = function(x){
    return pow2(x)*x;
}

let res = uniFunc(x, factorial, pow3);
console.log(res);


function uniFunc(x, fn1, fn2){
    if(x >= 0){
        return fn1(x);
    }else{
        return fn2(x);
    }
}


function pow2(x){
    return x*x;
}

function factorial(n){
    let res =  1;
    for(let i = 1; i <= n; i++){
        res*= i;
    }
    return res;
}