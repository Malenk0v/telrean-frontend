let nickName = `John`;

function greeting(){
    let nickName = `Peter`;
    return function(){
        let nickName = `Tigran`;
        console.log(nickName);
    }
}

const hello = greeting();
hello;