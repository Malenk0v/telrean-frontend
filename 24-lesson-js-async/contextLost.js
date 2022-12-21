class User{
    constructor(nickName){
        this.nickName = nickName;
    }

    infoFunc = function(){
        console.log(`Nickname: ${this.nickName}`);
    }

    infoArrow = () => {
        console.log(`Nickname: ${this.nickName}`);
    }
} 


const peter = new User(`Peter`);
const john = new User(`John`);
console.log(`======= Func =======`);
peter.infoFunc();
console.log(`======= Arrow =======`);
peter.infoArrow();
console.log(`======= Context Lost =======`);
fn(peter.infoArrow);
console.log(`======= Call, Apply =======`);
peter.infoFunc.apply(john);
peter.infoFunc.call(john);



function  fn(info){
    console.log(info);
    info();
}  