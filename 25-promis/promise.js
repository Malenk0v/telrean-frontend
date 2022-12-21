const willWrGerAnswer = function(){
    return new Promise(function (resolve, reject){
        setTimeout(function (){
            const isEddAngry = Math.random() > 0.5;
            if(isEddAngry){
                const ignor = new Error(`^_^Fuck`);
                reject(ignor);
            } else {
                const answer = {
                    code: `i am happy`,
                    smile: `:)`
                }
                resolve(answer);
            }
        },1000)
    });
}

willWrGerAnswer()
    .then(result => {
        console.log(result.code, result.smile)
    })
    .catch(error => {
        console.log(error);
    })