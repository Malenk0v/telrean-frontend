
function luckyNumber(x){
    let count = 0;
    let numberFirst = undefined;
    let numberTwo = undefined;
    do{
        let temp = x % 10;
        switch (count){
            case 0: {
                numberFirst += temp;
                count++;
                break;
            }
            case 1:{
                numberTwo += temp;
                count--;
                break;
            }
            default :
                if(numberFirst !== undefined & numberTwo !== undefined) {
                    if (numberFirst === numberTwo) {
                        console.log(`lucky`)
                    } else {
                        console.log(`unlucky`)
                    }
                }
                else{
                    console.log(`error number`)
                }
        }
    }while(x>0);
}

let res = luckyNumber(123870); // 1 + 3 + 7 === 2 + 8 + 1